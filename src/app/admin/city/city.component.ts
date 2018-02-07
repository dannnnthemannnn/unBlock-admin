import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';

import { CityService } from '../../api/city.service';

import { com } from '../../protos/compiled.js'

// TODO: Figure out how to handle enum values without redefining them here
const CITY_DISABLED = 'CITY_DISABLED';

@Component({
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  fullCityList: Promise<com.unblock.proto.ICity[]>;
  cities: Observable<com.unblock.proto.ICity[]>;
  neighborhoods: com.unblock.proto.INeighborhood[];

  citySearchControl = new FormControl('');
  nameControl = new FormControl('');
  disabledControl = new FormControl('');
  neighborhoodControl = new FormControl('');

  city: com.unblock.proto.ICity | null = null;

  constructor(private readonly cityService: CityService) {
    this.fullCityList = this.getFullCityList();
    this.cities = this.citySearchControl.valueChanges.startWith('').flatMap(
      value => this.getCities(value)
    );
  }

  get disabled() {
    return this.city && this.city.status.toString() === CITY_DISABLED;
  }

  getCities(value: string): Promise<com.unblock.proto.ICity[]> {
    if (typeof value !== 'string') {
      return Promise.resolve([]);
    }
    return this.fullCityList.then(cities => cities.filter(city => city.name.toLowerCase().startsWith(value.toLowerCase())));
  }

  citySelected(city: com.unblock.proto.ICity) {
    this.nameControl.setValue(city.name);
    this.disabledControl.setValue(this.disabled);
    this.neighborhoods = city.neighborhoods;
    this.city = city;
  }

  displayCity(city: com.unblock.proto.ICity) {
    return city.name;
  }

  onCreateMode() {
    this.city = null;
    this.citySearchControl.setValue('');
    this.nameControl.setValue('');
    this.disabledControl.setValue(false);
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
      cities.sort((a, b) => a.name < b.name ? -1 : 1);
      return cities;
    })
  }

  updateCity() {
    this.cityService.updateInfo(new com.unblock.proto.UpdateCityInfoRequest({
      id: this.city.id,
      info: {
        name: this.nameControl.value
      }
    })).then(city => {
      this.city = city;
    });
  }

  onDisableToggle() {
    const status = this.disabled ? com.unblock.proto.CityStatus.CITY_LIVE : com.unblock.proto.CityStatus.CITY_DISABLED;
    this.cityService.updateStatus(new com.unblock.proto.UpdateCityStatusRequest({
      id: this.city.id,
      status
    })).then(city => {
      this.city = city;
    });
  }

  createNewCity() {
    this.cityService.create(new com.unblock.proto.CreateCityRequest({
      info: {
        name: this.nameControl.value
      }
    })).then(city => {
      this.city = city;
      // TODO: Add city to list without making another call
      this.fullCityList = this.getFullCityList();
      this.fullCityList.then(() => {
        this.citySearchControl.setValue('');
      });
    })
  }

  onEditNeighborhood() {
    // TODO: Implement editing neighborhood
    console.log('edit neighborhood');
  }
}
