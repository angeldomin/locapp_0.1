import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsuarioPage page.
 *
 * Página para dar de alta nuevos usuarios y modificar existentes
 * Aquí relacionaremos un usuario con un dispositivo concreto 
 *
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  newUser() {
    // conectamos con base de datos y damos de alta un nuevo usuario
  }

  editUser() {
    // editamos los datos de un usuario existente 
  }

  asignarDispositivo() {
    // si ya tenía uno asignado se lo quitamos

    // iniciamos busqueda de dispositivos y quedamos a la espera de que nos devuelva un id_dispositivo

    // asignamos el id_dispositivo al usuario
  }

  desasignarDispositivo() {
    // quitamos dispositivo asignado al usuario
  }

}
