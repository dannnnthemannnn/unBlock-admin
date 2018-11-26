import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AgmMap, MouseEvent, LatLngLiteral, AgmPolygon, LatLng } from '@agm/core';

import { Observable } from 'rxjs';
import { startWith, flatMap, map } from 'rxjs/operators';

import { CityService } from '../../api/city.service';
import { CITY_ID_PARAM } from '../../app-routing.const';

import { com } from '../../protos/compiled.js'
import { timeout } from '../../../../node_modules/@types/q';

// TODO: Figure out how to handle enum values without redefining them here
const CITY_DISABLED = 'CITY_DISABLED';

enum MapState {
  VIEW,
  EDIT_CENTER,
  EDIT_BOUNDS
}

@Component({
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  @ViewChild('gmap') gmapElement: any;

  fullCityList: Promise<com.unblock.proto.ICity[]>;
  originalCitiesList: com.unblock.proto.ICity[];
  cities: Observable<com.unblock.proto.ICity[]>;
  neighborhoods: com.unblock.proto.INeighborhood[];

  citySearchControl = new FormControl('');
  nameControl = new FormControl('');
  imageFilenameControl = new FormControl('');
  cityStatusControl = new FormControl('');
  neighborhoodControl = new FormControl('');
  mapStateControl = new FormControl(MapState.VIEW);

  city: com.unblock.proto.ICity | null = null;

  cityStatuses: String[] = Object.keys(com.unblock.proto.CityStatus);

  center: LatLngLiteral;
  bounds: LatLngLiteral[] = []
  lat = 42.877742;
  lng = -97.380979;
  zoom = 4;

  mapState = MapState;

  constructor(
    private readonly cityService: CityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar
  ) {
    this.route.paramMap.subscribe(params => {
      if (params.has(CITY_ID_PARAM)) {
        this.loadCity(params.get(CITY_ID_PARAM));
      }
    })
    this.fullCityList = this.getFullCityList()
    this.cities = this.citySearchControl.valueChanges.startWith('').flatMap(
      value => this.getCities(value)
    );
  }

  loadCity(cityId: string) {
    this.cityService.get(cityId).then(city => {
      this.updateCityDetails(city);
    })
  }

  updateCityDetails(city: com.unblock.proto.ICity) {
    this.citySearchControl.setValue('');
    this.nameControl.setValue(city.name);
    this.imageFilenameControl.setValue(city.imageFilename);
    this.cityStatusControl.setValue(city.status);
    this.neighborhoods = city.neighborhoods;
    this.city = city;
    console.log(this.city);
    if (this.city.center && this.city.center.x && this.city.center.y) {
      this.lat = this.city.center.x;
      this.lng = this.city.center.y;
      this.zoom = 12;
      this.center = { lat: this.lat, lng: this.lng }
    }
    if (this.city.bounds && this.city.bounds.points) {
      this.bounds = this.city.bounds.points.map(point => ({ lat: point.x, lng: point.y }))
    }
  }

  getCities(value: string): Promise<com.unblock.proto.ICity[]> {
    if (typeof value !== 'string') {
      return Promise.resolve([]);
    }
    return this.fullCityList.then(cities => cities.filter(city => city.name.toLowerCase().startsWith(value.toLowerCase())));
  }

  navigate(paths: string[]) {
    this.router.navigate(['admin'].concat(paths));
  }

  citySelected(city: com.unblock.proto.ICity) {
    this.navigate(['cities', city.id]);
  }

  displayCity(city: com.unblock.proto.ICity) {
    return city.name;
  }

  onCreateMode() {
    this.navigate(['cities']);
  }

  onSave() {
    if (this.city) {
      this.updateCity();
    } else {
      this.createNewCity();
    }
  }

  getFullCityList() {
    return this.cityService.list().then(cities => {
      this.originalCitiesList = cities;
      cities.sort((a, b) => a.name < b.name ? -1 : 1);
      return cities;
    })
  }

  updateCity() {
    this.cityService.updateInfo(new com.unblock.proto.UpdateCityInfoRequest({
      id: this.city.id,
      info: {
        name: this.nameControl.value,
        imageFilename: this.imageFilenameControl.value
      }
    })).then(city => {
      this.city = city;
      this.updateCityList(city);
      this.showNotification('City updated.');
    });
  }

  updateCityList(newCity: com.unblock.proto.City) {
    const index = this.originalCitiesList.findIndex(city => city.id === newCity.id);
    this.originalCitiesList.splice(index, 1, newCity);
    this.originalCitiesList.sort((a, b) => a.name < b.name ? -1 : 1);
    this.fullCityList = Promise.resolve(this.originalCitiesList);
  }

  showNotification(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

  get showBounds() {
    return this.mapStateControl.value == MapState.VIEW || this.mapStateControl.value == MapState.EDIT_BOUNDS;
  }

  get showCenter() {
    return this.center && this.mapStateControl.value == MapState.VIEW || this.mapStateControl.value == MapState.EDIT_CENTER;
  }

  onCreateNewPoint(mouseEvent: MouseEvent) {
    if (this.mapStateControl.value == MapState.EDIT_BOUNDS) {
      this.bounds = [...this.bounds, mouseEvent.coords];
      console.log(this.bounds);
    } else if (this.mapStateControl.value == MapState.EDIT_CENTER) {
      this.center = mouseEvent.coords;
      this.lat = mouseEvent.coords.lat
      this.lng = mouseEvent.coords.lng;
    }
  }

  onCityStatusUpdate() {
    this.cityService.updateStatus(new com.unblock.proto.UpdateCityStatusRequest({
      id: this.city.id,
      status: this.cityStatusControl.value,
    })).then(city => {
      this.city = city;
      this.showNotification('City status updated.');
    });
  }

  onCityCenterUpdate() {
    this.cityService.updateCenter(new com.unblock.proto.UpdateCityCenterRequest({
      id: this.city.id,
      center: new com.unblock.proto.Point({ x: this.center.lat, y: this.center.lng })
    })).then(city => {
      this.city = city;
      this.showNotification('City center updated.');
    });
  }

  onCityBoundsUpdate() {
    this.cityService.updateBounds(new com.unblock.proto.UpdateCityBoundsRequest({
      id: this.city.id,
      bounds: new com.unblock.proto.Bounds({
        points: this.bounds.map(latlng => new com.unblock.proto.Point({ x: latlng.lat, y: latlng.lng })),
      })
    })).then(city => {
      this.city = city;
      this.showNotification('City bounds updated.');
    });
  }

  onCityBoundsReset() {
    this.bounds = [];
  }

  createNewCity() {
    this.cityService.create(new com.unblock.proto.CreateCityRequest({
      info: {
        name: this.nameControl.value,
        imageFilename: this.imageFilenameControl.value
      }
    })).then(city => {
      this.navigate(['cities', city.id]);
    })
  }

  onEditNeighborhood() {
    if (this.neighborhoodControl.value) {
      this.navigate(['neighborhoods', this.neighborhoodControl.value.id]);
    }
  }
}
