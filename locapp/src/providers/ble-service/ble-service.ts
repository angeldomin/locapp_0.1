import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BleServiceProvider provider.

  Servicio que se encargará de lo relacionado con bluetooth
*/

@Injectable()
export class BleServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BleServiceProvider Provider');
  }

}
