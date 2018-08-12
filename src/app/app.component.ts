import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';

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
    this.api.getDealers().then(dealers => {
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
}
