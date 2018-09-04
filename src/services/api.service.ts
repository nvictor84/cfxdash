import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getDealers(dealerState: string) {
    return new Promise((fulfill, reject) => {
      this.http.get(environment.api_url + '/dealers/' + dealerState)
        .subscribe(data => {
          fulfill(data['dealers']);
        });
    });
  }

  getVehicles(dealerId) {
    return new Promise((fulfill, reject) => {
      this.http.get(environment.api_url + '/vehicles/' + dealerId)
        .subscribe(data => {
          fulfill(data['vehicles']);
        });
    });
  }

  getVehicleStats(year, make, model) {
    return new Promise((fulfill, reject) => {
      this.http.get(`${environment.api_url}/stats?year=${year}&make=${make}&model=${model}`)
        .subscribe(data => {
          fulfill(data);
        });
    });
  }
}
