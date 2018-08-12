import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getDealers() {
    return new Promise((fulfill, reject) => {
      this.http.get(environment.api_url + '/dealers')
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
}
