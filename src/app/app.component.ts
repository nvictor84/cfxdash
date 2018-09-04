import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarfaxCom Finder';
  lat = 26.010633;
  lng = -80.1495297;
  dealers: any = [];
  vehicles: any = [];
  currentDealer: any = null;

  constructor(private api: ApiService) {

  }

  getDealers(dealerState) {
    this.api.getDealers(dealerState).then(dealers => {
      this.dealers = dealers;
    });
  }

  strToNumber(num) {
    return parseFloat(num);
  }

  setCurrentDealer(dealer) {
    this.currentDealer = dealer;
    this.title = this.currentDealer.name;
    this.api.getVehicles(this.currentDealer.carfaxId)
      .then(vehicles => {
        this.vehicles = vehicles;
      });
  }

  onMapClick(evt) {
    this.getDealers(evt['state-abbr']);
  }

  viewStats(year: number, make: string, model: string) {
    this.api.getVehicleStats(year, make, model).then(stats => {
      console.log(stats);
    });
  }
}
