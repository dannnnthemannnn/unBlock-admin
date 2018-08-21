import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AgmMap, MouseEvent, LatLngLiteral, AgmPolygon, LatLng } from '@agm/_dev/packages/core';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { BlockService } from '../../api/block.service';
import { AttractionService } from '../../api/attraction.service';
import { NeighborhoodService } from '../../api/neighborhood.service';
import { CityService } from '../../api/city.service';
import { BLOCK_ID_PARAM } from '../../app-routing.const';

import { com } from '../../protos/compiled.js'

declare var randomColor;

// TODO: Figure out how to handle enum values without redefining them here
const BLOCK_DISABLED = 'BLOCK_DISABLED';

type BlockOwner = [com.unblock.proto.ICity, com.unblock.proto.INeighborhood];

@Component({
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  @ViewChild('gmap') gmapElement: any;
  @ViewChild(AgmPolygon) agmPolygon: AgmPolygon;

  fullBlocksList: Promise<com.unblock.proto.IBlock[]>;
  fullNeighborhoodsList: Promise<com.unblock.proto.INeighborhood[]>;
  fullCitiesList: Promise<com.unblock.proto.ICity[]>;

  neighborhoodLookupPromise: Promise<Map<string, com.unblock.proto.INeighborhood>>;
  neighborhoodLookup: Map<string, com.unblock.proto.INeighborhood> = null;
  cityLookupPromise: Promise<Map<string, com.unblock.proto.ICity>>;
  cityLookup: Map<string, com.unblock.proto.ICity> = null;

  blocks: Observable<com.unblock.proto.IBlock[]>;
  places: Observable<google.maps.places.PlaceResult[]>;
  attractions: com.unblock.proto.IAttraction[] = [];

  blockSearchControl = new FormControl('');
  nameControl = new FormControl('');
  neighborhoodControl = new FormControl('');
  disabledControl = new FormControl('');
  attractionControl = new FormControl('');
  placesSearchControl = new FormControl('');

  lat: number = 40.7831;
  lng: number = -73.9712;

  selectedPlace: google.maps.places.PlaceResult;

  block: com.unblock.proto.IBlock | null = null;

  blockBounds: LatLngLiteral[] = [];

  loading = true;

  color = randomColor({
    luminosity: 'dark'
  });

  displayableBlock = (block: com.unblock.proto.IBlock) => this.displayBlock(block);

  constructor(
    private readonly blockService: BlockService,
    private readonly attractionService: AttractionService,
    private readonly neighborhoodService: NeighborhoodService,
    private readonly cityService: CityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar
  ) {
    // TODO: Update this to reflect the block parameters
    this.route.paramMap.subscribe(params => {
      if (params.has(BLOCK_ID_PARAM)) {
        this.loadBlock(params.get(BLOCK_ID_PARAM));
      }
    });

    Promise.all([
      this.getCityLookup(),
      this.getNeighborhoodLookup(),
      this.getFullNeighborhoodsList(),
      this.getFullBlockList(),
    ]).then(() => {
      this.loading = false;
    })

    this.blocks = this.blockSearchControl.valueChanges.startWith('').flatMap(
      value => this.getBlocks(value)
    );

    // TODO: Debounce this typing
    // TODO: Clear selected place on typing
    this.places = this.placesSearchControl.valueChanges.startWith('').flatMap(
      value => this.getPlaces(value)
    );
  }

  get disabled() {
    return this.block && this.block.status.toString() === BLOCK_DISABLED;
  }

  loadBlock(blockId: string) {
    this.blockService.get(blockId).then(block => {
      this.updateBlockDetails(block);
    });
  }

  updateBlockDetails(block: com.unblock.proto.IBlock) {
    this.blockSearchControl.setValue('');
    this.nameControl.setValue(block.name);
    this.disabledControl.setValue(this.disabled);
    this.updateNeighborhoodDetails(block.neighborhoodId);
    console.log(this.attractions);
    this.attractions = block.attractions;
    console.log(block.attractions);
    this.block = block;
    console.log(block.bounds.points);
    if (block.bounds && block.bounds.points) {
      this.lat = block.bounds.points.map(point => point.x).reduce((a, b) => a + b, 0) / block.bounds.points.length;
      this.lng = block.bounds.points.map(point => point.y).reduce((a, b) => a + b, 0) / block.bounds.points.length;
      this.blockBounds = block.bounds.points.map(point => ({ lat: point.x, lng: point.y }));
    }
  }

  getPlaces(name: string) {
    return new Promise<google.maps.places.PlaceResult[]>((resolve, _) => {
      try {
        let placesService = new google.maps.places.PlacesService(new google.maps.Map(this.gmapElement.nativeElement));
        placesService.nearbySearch({ location: { lat: this.lat, lng: this.lng }, radius: 200, name }, results => {
          console.log(results);
          resolve(results);
        });
      } catch (error) {
        console.log('error');
        console.log(error);
        resolve([]);
      }
    });
  }

  showNotification(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

  addAttractionToBlock() {
    this.attractionService.create(new com.unblock.proto.CreateAttractionRequest({
      blockId: this.block.id,
      info: {
        name: this.selectedPlace.name,
        location: {
          x: this.selectedPlace.geometry.location.lat(),
          y: this.selectedPlace.geometry.location.lng()
        }
      }
    }))
      .then(attraction => {
        this.navigate(['attractions', attraction.id]);
      });
  }

  updateNeighborhoodDetails(neighborhoodId: string) {
    if (!neighborhoodId) return;
    this.getNeighborhoodLookup().then(lookup => {
      this.neighborhoodControl.setValue(lookup.get(neighborhoodId));
    });
  }

  getFullBlockList() {
    if (!this.fullBlocksList) {
      this.fullBlocksList =
        Promise.all([this.getCityLookup(), this.getNeighborhoodLookup()])
          .then(() => this.blockService.list())
          .then(blocks => {
            blocks.sort((a, b) =>
              this.displayBlock(a) < this.displayBlock(b) ? -1 : 1);
            return blocks;
          });
    }
    return this.fullBlocksList;
  }

  getFullNeighborhoodsList() {
    if (!this.fullNeighborhoodsList) {
      this.fullNeighborhoodsList = this.neighborhoodService.list().then(neighborhoods => {
        neighborhoods.sort((a, b) => this.displayNeighborhood(a) < this.displayNeighborhood(b) ? -1 : 1);
        return neighborhoods;
      });
    }
    return this.fullNeighborhoodsList;
  }

  getFullCitiesList() {
    if (!this.fullCitiesList) {
      this.fullCitiesList = this.cityService.list();
    }
    return this.fullCitiesList;
  }

  getCityLookup() {
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

  getNeighborhoodLookup() {
    if (!this.neighborhoodLookupPromise) {
      this.neighborhoodLookupPromise = this.getFullNeighborhoodsList().then(neighborhoods => {
        const transform: (value: com.unblock.proto.INeighborhood) =>
          [string, com.unblock.proto.INeighborhood] = neighborhood => [neighborhood.id, neighborhood];
        this.neighborhoodLookup = new Map(neighborhoods.map(transform));
        return this.neighborhoodLookup;
      });
    }
    return this.neighborhoodLookupPromise;
  }

  getBlocks(value: string): Promise<com.unblock.proto.IBlock[]> {
    if (typeof value !== 'string') {
      return Promise.resolve([]);
    }
    return this.getFullBlockList()
      .then(blocks =>
        blocks.filter(block =>
          this.displayBlock(block).toLowerCase().includes(value.toLowerCase())));
  }

  displayBlock(block: com.unblock.proto.IBlock) {
    if (!block) return '';

    let city = null;
    let neighborhood = null;
    if (block.neighborhoodId && this.cityLookup && this.neighborhoodLookup) {
      neighborhood = this.neighborhoodLookup.get(block.neighborhoodId);
      city = neighborhood ? this.cityLookup.get(neighborhood.cityId) : null;
    }
    return `${this.retrieveName(city)} - ${this.retrieveName(neighborhood)} - ${this.retrieveName(block)}`;
  }

  displayPlace(place: google.maps.places.PlaceResult) {
    return place.name;
  }

  displayNeighborhood(neighborhood: com.unblock.proto.INeighborhood) {
    if (!neighborhood) return '';

    let city = null;
    if (neighborhood.cityId && this.cityLookup) {
      city = this.cityLookup.get(neighborhood.cityId);
    }
    return `${this.retrieveName(city)} - ${this.retrieveName(neighborhood)}`;
  }

  retrieveName(location: { name?: string }) {
    return location ? location.name : 'Unknown';
  }

  navigate(paths: string[]) {
    this.router.navigate(['admin'].concat(paths));
  }

  blockSelected(block: com.unblock.proto.IBlock) {
    this.navigate(['blocks', block.id]);
  }

  placeSelected(place: google.maps.places.PlaceResult) {
    this.selectedPlace = place;
  }

  getBounds() {
    return this.agmPolygon.getPolygonPath().then((path: google.maps.MVCArray<google.maps.MVCArray<LatLng>>) =>
      new com.unblock.proto.Bounds({
        points: path.getArray()[0].getArray().map(latlng => new com.unblock.proto.Point({ x: latlng.lat(), y: latlng.lng() }))
      }));
  }

  onCreateMode() {
    this.navigate(['blocks']);
  }

  onCreateNewPoint(mouseEvent: MouseEvent) {
    this.blockBounds = [...this.blockBounds, mouseEvent.coords];
  }

  onUpdateNeighborhood() {
    this.blockService.assignToNeighborhood(new com.unblock.proto.AssignBlockToNeighborhoodRequest({
      id: this.block.id,
      neighborhoodId: this.neighborhoodControl.value.id
    })).then(block => {
      this.block = block;
      this.showNotification('Block neighborhood updated.');
    });
  }

  onUpdateBounds() {
    console.log(this.blockBounds);
    this.getBounds().then(bounds =>
      this.blockService.updateBounds(new com.unblock.proto.UpdateBlockBoundsRequest({
        id: this.block.id,
        update: new com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds({
          bounds
        })
      }))).then(block => {
        this.block = block;
        this.showNotification('Block bounds updated.');
      });
  }

  onUpdateInfo() {
    this.blockService.updateInfo(new com.unblock.proto.UpdateBlockInfoRequest({
      id: this.block.id,
      info: {
        name: this.nameControl.value
      }
    })).then(block => {
      this.block = block;
      this.showNotification('Block info updated.');
    });
  }

  onDisableToggle() {
    const status = this.disabled ? com.unblock.proto.BlockStatus.BLOCK_LIVE : com.unblock.proto.BlockStatus.BLOCK_DISABLED;
    this.blockService.updateStatus(new com.unblock.proto.UpdateBlockStatusRequest({
      id: this.block.id,
      status
    })).then(block => {
      this.block = block;
      this.showNotification('Block status updated.');
    });
  }

  onCreate() {
    this.getBounds().then(bounds =>
      this.blockService.create(new com.unblock.proto.CreateBlockRequest({
        neighborhoodId: (this.neighborhoodControl.value as com.unblock.proto.INeighborhood).id,
        info: {
          name: this.nameControl.value,
          bounds
        }
      }))).then(block => {
        this.navigate(['blocks', block.id]);
      });
  }

  onEditAttraction() {
    if (this.attractionControl.value) {
      this.navigate(['attractions', this.attractionControl.value.id]);
    }
  }
}
