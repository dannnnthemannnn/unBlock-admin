import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AgmMap, MouseEvent, LatLngLiteral, AgmPolygon, LatLng } from '@agm/_dev/packages/core';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { AttractionService } from '../../api/attraction.service';
import { BlockService } from '../../api/block.service';
import { NeighborhoodService } from '../../api/neighborhood.service';
import { CityService } from '../../api/city.service';
import { ATTRACTION_ID_PARAM } from '../../app-routing.const';

import { com } from '../../protos/compiled.js'

// TODO: Figure out how to handle enum values without redefining them here
const ATTRACTION_DISABLED = 'ATTRACTION_DISABLED';

@Component({
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent {
  fullAttractionsList: Promise<com.unblock.proto.IAdminAttraction[]>;
  fullBlocksList: Promise<com.unblock.proto.IBlock[]>;
  fullNeighborhoodsList: Promise<com.unblock.proto.INeighborhood[]>;
  fullCitiesList: Promise<com.unblock.proto.ICity[]>;

  blockLookupPromise: Promise<Map<string, com.unblock.proto.IBlock>>;
  blockLookup: Map<string, com.unblock.proto.IBlock> = null;
  neighborhoodLookupPromise: Promise<Map<string, com.unblock.proto.INeighborhood>>;
  neighborhoodLookup: Map<string, com.unblock.proto.INeighborhood> = null;
  cityLookupPromise: Promise<Map<string, com.unblock.proto.ICity>>;
  cityLookup: Map<string, com.unblock.proto.ICity> = null;

  attractions: Observable<com.unblock.proto.IAdminAttraction[]>;

  attractionSearchControl = new FormControl('');
  nameControl = new FormControl('');
  descriptionControl = new FormControl('');
  blockControl = new FormControl('');
  disabledControl = new FormControl('');

  attraction: com.unblock.proto.IAdminAttraction | null = null;

  loading = true;

  displayableAttraction = (attraction: com.unblock.proto.IAdminAttraction) => this.displayAttraction(attraction);

  lat: number = 40.7831;
  lng: number = -73.9712;
  centerLat: number = null;
  centerLng: number = null;

  color = '#e34r56';/*randomColor({
    luminosity: 'dark'
  });*/

  constructor(
    private readonly attractionService: AttractionService,
    private readonly blockService: BlockService,
    private readonly neighborhoodService: NeighborhoodService,
    private readonly cityService: CityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar
  ) {
    // TODO: Update this to reflect the attraction parameters
    this.route.paramMap.subscribe(params => {
      if (params.has(ATTRACTION_ID_PARAM)) {
        this.loadAttraction(params.get(ATTRACTION_ID_PARAM));
      }
    });

    Promise.all([
      this.getCityLookup(),
      this.getNeighborhoodLookup(),
      this.getBlockLookup(),
      this.getFullBlocksList(),
      this.getFullAttractionList(),
    ]).then(() => {
      this.loading = false;
    })

    this.attractions = this.attractionSearchControl.valueChanges.startWith('').flatMap(
      value => this.getAttractions(value)
    );
  }

  get disabled() {
    return this.attraction && this.attraction.attraction.status.toString() === ATTRACTION_DISABLED;
  }

  get blockPaths() {
    if (!this.blockControl.value) {
      return null;
    }
    return this.blockControl.value.block.bounds.points.map(point => ({ lat: point.x, lng: point.y }));
  }

  showNotification(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }

  loadAttraction(attractionId: string) {
    this.attractionService.get(attractionId).then(attraction => {
      this.updateAttractionDetails(attraction);
    });
  }

  updateAttractionDetails(attraction: com.unblock.proto.IAdminAttraction) {
    this.attractionSearchControl.setValue('');
    this.nameControl.setValue(attraction.attraction.name);
    this.descriptionControl.setValue(attraction.attraction.description);
    this.disabledControl.setValue(this.disabled);
    this.updateBlockDetails(attraction.attraction.blockId);
    this.attraction = attraction;
    if (this.attraction.googlePlace != null) {
      this.centerLat = this.lat = attraction.googlePlace.location.x;
      this.centerLng = this.lng = attraction.googlePlace.location.y;
    } else {
      this.centerLat = this.lat = attraction.attraction.location.x;
      this.centerLng = this.lng = attraction.attraction.location.y;
    }
  }

  updateBlockDetails(blockId: string) {
    if (!blockId) return;
    this.getBlockLookup().then(lookup => {
      this.blockControl.setValue(lookup.get(blockId));
    });
  }

  getFullAttractionList() {
    if (!this.fullAttractionsList) {
      this.fullAttractionsList =
        Promise.all([this.getCityLookup(), this.getNeighborhoodLookup(), this.getBlockLookup()])
          .then(() => this.attractionService.list())
          .then(attractions => {
            attractions.sort((a, b) =>
              this.displayAttraction(a) < this.displayAttraction(b) ? -1 : 1);
            return attractions;
          });
    }
    return this.fullAttractionsList;
  }

  getFullBlocksList() {
    if (!this.fullBlocksList) {
      this.fullBlocksList =
        Promise.all([this.getCityLookup(), this.getNeighborhoodLookup()])
          .then(() => this.blockService.list())
          .then(blocks => {
            blocks.sort((a, b) => this.displayBlock(a) < this.displayBlock(b) ? -1 : 1);
            return blocks;
          });
    }
    return this.fullBlocksList;
  }

  getFullNeighborhoodsList() {
    if (!this.fullNeighborhoodsList) {
      this.fullNeighborhoodsList = this.neighborhoodService.list();
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

  getBlockLookup() {
    if (!this.blockLookupPromise) {
      this.blockLookupPromise = this.getFullBlocksList().then(blocks => {
        const transform: (value: com.unblock.proto.IBlock) =>
          [string, com.unblock.proto.IBlock] = block => [block.id, block];
        this.blockLookup = new Map(blocks.map(transform));
        return this.blockLookup;
      });
    }
    return this.blockLookupPromise;
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

  getAttractions(value: string): Promise<com.unblock.proto.IAdminAttraction[]> {
    if (typeof value !== 'string') {
      return Promise.resolve([]);
    }
    return this.getFullAttractionList()
      .then(attractions =>
        attractions.filter(attraction =>
          this.displayAttraction(attraction).toLowerCase().includes(value.toLowerCase())));
  }

  displayAttraction(attraction: com.unblock.proto.IAdminAttraction) {
    if (!attraction) return '';

    let city = null;
    let neighborhood = null;
    let block = null;
    if (attraction.attraction.blockId && this.blockLookup && this.neighborhoodLookup && this.cityLookup) {
      block = this.blockLookup.get(attraction.attraction.blockId);
      neighborhood = this.neighborhoodLookup.get(block.neighborhoodId);
      city = neighborhood ? this.cityLookup.get(neighborhood.cityId) : null;
    }
    return `${this.retrieveName(attraction.attraction)} (${this.retrieveName(city)} - ${this.retrieveName(neighborhood)} - ${this.retrieveName(block)})`;
  }

  displayBlock(block: com.unblock.proto.IBlock) {
    if (!block) return '';

    let city = null;
    let neighborhood = null;
    if (block.neighborhoodId && this.neighborhoodLookup && this.cityLookup) {
      neighborhood = this.neighborhoodLookup.get(block.neighborhoodId);
      city = neighborhood ? this.cityLookup.get(neighborhood.cityId) : null;
    }
    return `${this.retrieveName(block)} (${this.retrieveName(city)} - ${this.retrieveName(neighborhood)})`;
  }

  retrieveName(location: { name?: string }) {
    return location ? location.name : 'Unknown';
  }

  navigate(paths: string[]) {
    this.router.navigate(['admin', 'attractions'].concat(paths));
  }

  attractionSelected(attraction: com.unblock.proto.IAdminAttraction) {
    this.navigate([attraction.attraction.id]);
  }

  onCreateMode() {
    this.navigate([]);
  }

  onCreateNewPoint(mouseEvent: MouseEvent) {
    this.centerLat = mouseEvent.coords.lat;
    this.centerLng = mouseEvent.coords.lng;
  }

  onUpdateInfo() {
    this.attractionService.updateInfo(new com.unblock.proto.UpdateAttractionInfoRequest({
      id: this.attraction.attraction.id,
      info: {
        name: this.nameControl.value,
        description: this.descriptionControl.value
      }
    })).then(attraction => {
      this.attraction.attraction = attraction;
      this.showNotification('Attraction info updated.');
    });
  }

  onUpdateBlock() {
    this.attractionService.assignToBlock(new com.unblock.proto.AssignAttractionToBlockRequest({
      id: this.attraction.attraction.id,
      blockId: this.blockControl.value.id
    })).then(attraction => {
      this.attraction.attraction = attraction;
      this.showNotification('Attraction block updated.');
    });
  }

  onDisableToggle() {
    const status = this.disabled ?
      com.unblock.proto.AttractionStatus.ATTRACTION_LIVE :
      com.unblock.proto.AttractionStatus.ATTRACTION_DISABLED;
    this.attractionService.updateStatus(new com.unblock.proto.UpdateAttractionStatusRequest({
      id: this.attraction.attraction.id,
      status
    })).then(attraction => {
      this.attraction.attraction = attraction;
      this.showNotification('Attraction status updated.');
    });
  }

  onCreate() {
    this.attractionService.create(new com.unblock.proto.CreateAttractionRequest({
      blockId: (this.blockControl.value as com.unblock.proto.IBlock).id,
      info: {
        name: this.nameControl.value,
        description: this.descriptionControl.value,
        location: {
          x: this.centerLat,
          y: this.centerLng
        }
      }
    })).then(attraction => {
      this.navigate([attraction.id]);
    });
  }
}
