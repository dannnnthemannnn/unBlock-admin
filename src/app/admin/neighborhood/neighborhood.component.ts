import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { NeighborhoodService } from '../../api/neighborhood.service';
import { CityService } from '../../api/city.service';
import { NEIGHBORHOOD_ID_PARAM } from '../../app-routing.const';

import { com } from '../../protos/compiled.js'

// TODO: Figure out how to handle enum values without redefining them here
const NEIGHBORHOOD_DISABLED = 'NEIGHBORHOOD_DISABLED';

// TODO: Move this and other similar constants to the api classes and export them

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

  neighborhood: com.unblock.proto.INeighborhood | null = null;

  displayableNeighborhood = (neighborhood: com.unblock.proto.INeighborhood) => this.displayNeighborhood(neighborhood);

  constructor(
    private readonly neighborhoodService: NeighborhoodService,
    private readonly cityService: CityService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
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

  navigate(paths: string[]) {
    this.router.navigate(['admin', 'neighborhoods'].concat(paths));
  }

  neighborhoodSelected(neighborhood: com.unblock.proto.INeighborhood) {
    this.navigate([neighborhood.id]);
  }

  onCreateMode() {
    this.navigate([]);
  }

  onSave() {
    if (this.neighborhood) {
      this.updateNeighborhood();
    } else {
      this.createNewNeighborhood();
    }
  }

  updateNeighborhood() {
    this.neighborhoodService.updateInfo(new com.unblock.proto.UpdateNeighborhoodInfoRequest({
      id: this.neighborhood.id,
      info: {
        name: this.nameControl.value
      }
    })).then(neighborhood => {
      this.neighborhood = neighborhood;
    });
  }

  onDisableToggle() {
    const status = this.disabled ? com.unblock.proto.NeighborhoodStatus.NEIGHBORHOOD_LIVE : com.unblock.proto.NeighborhoodStatus.NEIGHBORHOOD_DISABLED;
    this.neighborhoodService.updateStatus(new com.unblock.proto.UpdateNeighborhoodStatusRequest({
      id: this.neighborhood.id,
      status
    })).then(neighborhood => {
      this.neighborhood = neighborhood;
    });
  }

  createNewNeighborhood() {
    this.neighborhoodService.create(new com.unblock.proto.CreateNeighborhoodRequest({
      cityId: (this.cityControl.value as com.unblock.proto.ICity).id,
      info: {
        name: this.nameControl.value
      }
    })).then(neighborhood => {
      this.navigate([neighborhood.id]);
    });
  }

  onEditBlock() {
    // TODO: Implement editing block
    console.log('edit block');
  }
}
