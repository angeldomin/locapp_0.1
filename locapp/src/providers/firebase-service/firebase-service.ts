import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Usuario } from '../../models/usuario';
import { Firebase } from '@ionic-native/firebase';

/*  
  Este service se encargará de las operaciones con la base de datos firebase.
*/

@Injectable()
export class FirebaseServiceProvider {

  constructor(
    public http: HttpClient,
    private _firebase: Firebase
  ) {
    console.log('Hello FirebaseServiceProvider Provider');
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log('error en signInAnonymously', errorMessage);
    });

    firebase.auth().onAuthStateChanged(function(user) {
      console.log('Cambio en auth');
      if (user) {
        // User is signed in.
        // var isAnonymous = user.isAnonymous;
        var uid = user.uid; console.log(' :O ',uid);
        /* var userRef = app.dataInfo.child(app.users);
    
        var useridRef = userRef.child(app.userid);
    
        useridRef.set({
          locations: "",
          theme: "",
          colorScheme: "",
          food: ""
        });*/
    
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });

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

    console.log('Probando a añadir nuevo usuario');
    
    /*usuariosRef.set({
      _id,
      nombre,
      apellido1,
      apellido2,
      edad,
      imagen,
      id_dispositivo 
    });*/

    // este funciona 
    usuariosRef.push({_id,
      nombre,
      apellido1,
      apellido2,
      edad,
      imagen,
      id_dispositivo
    });

    // console.log(this._firebase.getValue('usuarios', '4ltcRquTh4zI0XbhkMOE'));
    // console.log(usuariosRef);
    console.log('provider firebase');
  }

  editUsuario(usuario:Usuario) {
    // mirar a ver si se hace con set
  }

  deleteUsuario(){
    // mirar removeValue() o setValue() null
  }

  getUsuario() {
    const usuariosRef: firebase.database.Reference = firebase.database().ref('/usuarios/');
    console.log(usuariosRef.toJSON);
  }

  
} 
