import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AgmMap, MouseEvent, LatLngLiteral } from '@agm/core';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { BlockService } from '../../api/block.service';
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
  fullBlocksList: Promise<com.unblock.proto.IBlock[]>;
  fullNeighborhoodsList: Promise<com.unblock.proto.INeighborhood[]>;
  fullCitiesList: Promise<com.unblock.proto.ICity[]>;

  neighborhoodLookupPromise: Promise<Map<string, com.unblock.proto.INeighborhood>>;
  neighborhoodLookup: Map<string, com.unblock.proto.INeighborhood> = null;
  cityLookupPromise: Promise<Map<string, com.unblock.proto.ICity>>;
  cityLookup: Map<string, com.unblock.proto.ICity> = null;

  blocks: Observable<com.unblock.proto.IBlock[]>;
  attractions: com.unblock.proto.IAttraction[] = [];

  blockSearchControl = new FormControl('');
  nameControl = new FormControl('');
  neighborhoodControl = new FormControl('');
  disabledControl = new FormControl('');
  attractionControl = new FormControl('');

  lat: number = 51.678418;
  lng: number = 7.809007;

  block: com.unblock.proto.IBlock | null = null;

  blockBounds: LatLngLiteral[] = [];

  loading = true;

  color = randomColor({
    luminosity: 'dark'
  });

  displayableBlock = (block: com.unblock.proto.IBlock) => this.displayBlock(block);

  constructor(
    private readonly blockService: BlockService,
    private readonly neighborhoodService: NeighborhoodService,
    private readonly cityService: CityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
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
    this.attractions = block.attractions;
    this.block = block;
    console.log(block.bounds.points);
    if (block.bounds && block.bounds.points) {
      this.lat = block.bounds.points.map(point => point.x).reduce((a, b) => a + b, 0) / block.bounds.points.length;
      this.lng = block.bounds.points.map(point => point.y).reduce((a, b) => a + b, 0) / block.bounds.points.length;
      this.blockBounds = block.bounds.points.map(point => ({ lat: point.x, lng: point.y }));
    }
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
    this.router.navigate(['admin', 'blocks'].concat(paths));
  }

  blockSelected(block: com.unblock.proto.IBlock) {
    this.navigate([block.id]);
  }

  getBounds() {
    return new com.unblock.proto.Bounds({
      points: this.blockBounds.map(bounds => new com.unblock.proto.Bounds.Point({ x: bounds.lat, y: bounds.lng }))
    });
  }

  onCreateMode() {
    this.navigate([]);
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
    });
  }

  onUpdateBounds() {
    console.log(this.blockBounds);
    /*this.blockService.updateBounds(new com.unblock.proto.UpdateBlockBoundsRequest({
      id: this.block.id,
      update: new com.unblock.proto.UpdateBlockBoundsRequest.UpdateBlockBounds({
        bounds: this.getBounds()
      })
    })).then(block => {
      this.block = block;
    });*/
  }

  onUpdateInfo() {
    this.blockService.updateInfo(new com.unblock.proto.UpdateBlockInfoRequest({
      id: this.block.id,
      info: {
        name: this.nameControl.value
      }
    })).then(block => {
      this.block = block;
    });
  }

  onDisableToggle() {
    const status = this.disabled ? com.unblock.proto.BlockStatus.BLOCK_LIVE : com.unblock.proto.BlockStatus.BLOCK_DISABLED;
    this.blockService.updateStatus(new com.unblock.proto.UpdateBlockStatusRequest({
      id: this.block.id,
      status
    })).then(block => {
      this.block = block;
    });
  }

  onCreate() {
    this.blockService.create(new com.unblock.proto.CreateBlockRequest({
      neighborhoodId: (this.neighborhoodControl.value as com.unblock.proto.INeighborhood).id,
      info: {
        name: this.nameControl.value,
        bounds: this.getBounds()
      }
    })).then(block => {
      this.navigate([block.id]);
    });
  }

  onEditBlock() {
    // TODO: Implement editing block
    console.log('edit block');
  }
}
