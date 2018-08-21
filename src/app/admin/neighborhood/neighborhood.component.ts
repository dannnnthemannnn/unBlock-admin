import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AgmMap, MouseEvent, LatLngLiteral, AgmPolygon, LatLng } from '@agm/_dev/packages/core';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { NeighborhoodService } from '../../api/neighborhood.service';
import { CityService } from '../../api/city.service';
import { NEIGHBORHOOD_ID_PARAM } from '../../app-routing.const';

import { com } from '../../protos/compiled.js';

// TODO: Figure out how to handle enum values without redefining them here
const NEIGHBORHOOD_DISABLED = 'NEIGHBORHOOD_DISABLED';

enum MapState {
  VIEW,
  EDIT_BOUNDS
}

@Component({
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent {

  fullNeighborhoodList: Promise<com.unblock.proto.INeighborhood[]>;
  fullCitiesList: Promise<com.unblock.proto.ICity[]>;
  cityLookupPromise: Promise<Map<string, com.unblock.proto.ICity>>
  cityLookup: Map<string, com.unblock.proto.ICity> | null = null;

  neighborhoods: Observable<com.unblock.proto.INeighborhood[]>;
  blocks: com.unblock.proto.IBlock[];

  neighborhoodSearchControl = new FormControl('');
  nameControl = new FormControl('');
  cityControl = new FormControl('');
  disabledControl = new FormControl('');
  blockControl = new FormControl('');
  mapStateControl = new FormControl(MapState.VIEW);

  neighborhood: com.unblock.proto.INeighborhood | null = null;

  bounds: LatLngLiteral[] = []
  otherBounds: Array<Array<LatLngLiteral>> = [];
  lat = 42.877742;
  lng = -97.380979;
  zoom = 4;

  mapState = MapState;

  displayableNeighborhood = (neighborhood: com.unblock.proto.INeighborhood) => this.displayNeighborhood(neighborhood);

  constructor(
    private readonly neighborhoodService: NeighborhoodService,
    private readonly cityService: CityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar
  ) {
    this.route.paramMap.subscribe(params => {
      if (params.has(NEIGHBORHOOD_ID_PARAM)) {
        this.loadNeighborhood(params.get(NEIGHBORHOOD_ID_PARAM));
      }
    });

    this.getFullCitiesList();
    this.getCitiesLookup();
    this.getFullNeighborhoodList();

    this.neighborhoods = this.neighborhoodSearchControl.valueChanges.startWith('').flatMap(
      value => this.getNeighborhoods(value)
    );
  }

  get disabled() {
    return this.neighborhood && this.neighborhood.status.toString() === NEIGHBORHOOD_DISABLED;
  }

  loadNeighborhood(neighborhoodId: string) {
    this.neighborhoodService.get(neighborhoodId).then(neighborhood => {
      this.updateNeighborhoodDetails(neighborhood);
    });
  }

  updateNeighborhoodDetails(neighborhood: com.unblock.proto.INeighborhood) {
    this.neighborhoodSearchControl.setValue('');
    this.nameControl.setValue(neighborhood.name);
    this.disabledControl.setValue(this.disabled);
    this.updateCityDetails(neighborhood.cityId);
    this.blocks = neighborhood.blocks;
    this.neighborhood = neighborhood;
    this.getCitiesLookup().then(lookup => {
      let city = lookup.get(neighborhood.cityId);
      this.otherBounds = this.filterNeighborhood(city.neighborhoods).map(n => this.boundsToLatLngBounds(n.bounds));
      this.lat = city.center.x;
      this.lng = city.center.y;
      this.zoom = 12;
    });
    if (this.neighborhood.bounds && this.neighborhood.bounds.points) {
      this.bounds = this.boundsToLatLngBounds(this.neighborhood.bounds);
      this.lat = neighborhood.bounds.points.map(point => point.x).reduce((a, b) => a + b, 0) / neighborhood.bounds.points.length;
      this.lng = neighborhood.bounds.points.map(point => point.y).reduce((a, b) => a + b, 0) / neighborhood.bounds.points.length;
      this.zoom = 14;
    }
  }

  boundsToLatLngBounds(bounds: com.unblock.proto.IBounds) {
    return new Array().concat(bounds.points.map(point => { return { lat: point.x, lng: point.y }; }));
  }

  filterNeighborhood(neighborhoods: com.unblock.proto.INeighborhood[]) {
    return neighborhoods.filter(neighborhood => neighborhood.id != this.neighborhood.id);
  }

  updateCityDetails(cityId: string) {
    if (!cityId) return;
    this.getCitiesLookup().then(lookup => {
      this.cityControl.setValue(lookup.get(cityId));
    });
  }

  getFullNeighborhoodList() {
    if (!this.fullNeighborhoodList) {
      this.fullNeighborhoodList =
        this.getCitiesLookup()
          .then(() => this.neighborhoodService.list())
          .then(neighborhoods => {
            neighborhoods.sort((a, b) =>
              this.displayNeighborhood(a) < this.displayNeighborhood(b) ? -1 : 1);
            return neighborhoods;
          });
    }
    return this.fullNeighborhoodList;
  }

  getFullCitiesList() {
    if (!this.fullCitiesList) {
      this.fullCitiesList = this.cityService.list().then(neighborhoods => {
        neighborhoods.sort((a, b) => a.name < b.name ? -1 : 1);
        return neighborhoods;
      });
    }
    return this.fullCitiesList;
  }

  getCitiesLookup() {
    if (!this.cityLookupPromise) {
      this.cityLookupPromise = this.getFullCitiesList().then(cities => {
        const transform: (value: com.unblock.proto.ICity) =>
          [string, com.unblock.proto.ICity] = city => [city.id, city];
        this.cityLookup = new Map(cities.map(transform));
        return this.cityLookup;
      });
    }
    return this.cityLookupPromise;
  }

  getNeighborhoods(value: string): Promise<com.unblock.proto.INeighborhood[]> {
    if (typeof value !== 'string') {
      return Promise.resolve([]);
    }
    return this.getFullNeighborhoodList()
      .then(neighborhoods =>
        neighborhoods.filter(neighborhood =>
          neighborhood.name.toLowerCase().startsWith(value.toLowerCase())));
  }

  displayNeighborhood(neighborhood: com.unblock.proto.INeighborhood) {
    if (!neighborhood) return '';

    let cityDisplay = 'Unknown';
    if (neighborhood.cityId && this.cityLookup && this.cityLookup.size) {
      const city = this.cityLookup.get(neighborhood.cityId);
      cityDisplay = city.name;
    }

    return `${cityDisplay} - ${neighborhood.name}`;
  }

  showNotification(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

  navigate(paths: string[]) {
    this.router.navigate(['admin'].concat(paths));
  }

  neighborhoodSelected(neighborhood: com.unblock.proto.INeighborhood) {
    this.navigate(['neighborhoods', neighborhood.id]);
  }

  onCreateMode() {
    this.navigate(['neighborhoods']);
  }

  onCreateNewPoint(mouseEvent: MouseEvent | { latLng: LatLng }) {
    let latLng = (<MouseEvent>mouseEvent).coords;
    if (!latLng) {
      let temp = (<{ latLng: LatLng }>mouseEvent).latLng;
      latLng = { lat: temp.lat(), lng: temp.lng() };
    }
    this.bounds = [...this.bounds, latLng];
  }

  onNeighborhoodBoundsUpdate() {
    let request = new com.unblock.proto.UpdateNeighborhoodBoundsRequest({
      id: this.neighborhood.id,
      update: new com.unblock.proto.UpdateNeighborhoodBoundsRequest.UpdateNeighborhoodBounds({
        bounds: new com.unblock.proto.Bounds({
          points: this.bounds.map(latlng => new com.unblock.proto.Point({ x: latlng.lat, y: latlng.lng })),
        }),
      })
    });
    console.log(request);
    this.neighborhoodService.updateBounds(
      request
    ).then(neighborhood => {
      this.neighborhood = neighborhood;
      this.showNotification('Neighborhood bounds updated.');
    });
  }

  onNeighborhoodBoundsReset() {
    this.bounds = [];
  }

  onUpdateInfo() {
    this.neighborhoodService.updateInfo(new com.unblock.proto.UpdateNeighborhoodInfoRequest({
      id: this.neighborhood.id,
      info: {
        name: this.nameControl.value
      }
    })).then(neighborhood => {
      this.neighborhood = neighborhood;
      this.showNotification('Neighborhood info updated.');
    });
  }

  onUpdateCity() {
    this.neighborhoodService.assignToCity(new com.unblock.proto.AssignNeighborhoodToCityRequest({
      id: this.neighborhood.id,
      cityId: this.cityControl.value.id
    })).then(neighborhood => {
      this.neighborhood = neighborhood;
      this.showNotification('City updated.');
    });
  }

  onCreate() {
    this.neighborhoodService.create(new com.unblock.proto.CreateNeighborhoodRequest({
      cityId: (this.cityControl.value as com.unblock.proto.ICity).id,
      info: {
        name: this.nameControl.value
      }
    })).then(neighborhood => {
      this.navigate(['neighborhoods', neighborhood.id]);
    });
  }

  onDisableToggle() {
    const status = this.disabled ? com.unblock.proto.NeighborhoodStatus.NEIGHBORHOOD_LIVE : com.unblock.proto.NeighborhoodStatus.NEIGHBORHOOD_DISABLED;
    this.neighborhoodService.updateStatus(new com.unblock.proto.UpdateNeighborhoodStatusRequest({
      id: this.neighborhood.id,
      status
    })).then(neighborhood => {
      this.neighborhood = neighborhood;
      this.showNotification('Neighborhood status updated.');
    });
  }

  onEditBlock() {
    if (this.blockControl.value) {
      this.navigate(['blocks', this.blockControl.value.id]);
    }
  }
}
