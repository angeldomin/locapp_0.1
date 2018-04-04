import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Usuario } from '../../models/usuario';

/*  
  Este service se encargará de las operaciones con la base de datos firebase.
*/

@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  newUsuario(usuario:Usuario) {
    
    const usuariosRef: firebase.database.Reference = firebase.database().ref('/usuarios/');
    
    const _id = usuario._id;
    const nombre = usuario.nombre;
    const apellido1 = usuario.apellido1;
    const apellido2 = usuario.apellido2;
    const edad = usuario.edad;
    const imagen = usuario.image;
    const id_dispositivo = usuario.id_dispositivo;
    
    usuariosRef.set({
      _id,
      nombre,
      apellido1,
      apellido2,
      edad,
      imagen,
      id_dispositivo
    })
    console.log('provider firebase');
  }

  editUsuario(usuario:Usuario) {

  }

  getUsuario() {

  }

} 
