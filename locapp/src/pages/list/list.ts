import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { BuscadorPage } from '../buscador/buscador';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  selectedUser: any;
  usuarios: Usuario[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // TODO traemos de base de datos la lista de usuarios registrados

    // datos simulados
    this.usuarios = [new Usuario('', 'Cloud', 'Strife', 'FF7', 25, '', ''),
                    new Usuario('', 'Tifa', 'Lockhart', 'FF7', 23, '', '')
    ];

  }

  seleccionar(usuario) {
    this.selectedUser = usuario;
  }
  
  buscar(usuario) {
    this.navCtrl.push(BuscadorPage, {usuario: usuario, mode: 'edit'});
  }

}
