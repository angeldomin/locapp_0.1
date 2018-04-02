import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dispositivo } from '../../models/dispositivo'

/**
 * Generated class for the NewDispositivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-dispositivo',
  templateUrl: 'new-dispositivo.html',
})
export class NewDispositivoPage {

  dispositivos : Dispositivo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewDispositivoPage');
  }

  buscar() {
    this.dispositivos = [ new Dispositivo ('000000000', 'Dispositivo 0', 'Dispositivo simulado 0')];
    this.dispositivos.push( new Dispositivo('000000001', 'Dispositivo 1', 'Dispositivo simulado 1') );
    this.dispositivos.push( new Dispositivo('000000002', 'Dispositivo 2', 'Dispositivo simulado 2') );
    this.dispositivos.push( new Dispositivo('000000003', 'Dispositivo 3', 'Dispositivo simulado 3') );
  }

  registrar(dispositivo: Dispositivo) {
    //navegaremos a la pagina de registrar dispositivo
  }
}
