import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})


export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Flash', 'Thor', 'Hulk']
  heroeBorrado: string = ''
  //mostrar: boolean = false;

  borrarHeroe(){
    console.log('Borrando');
    this.heroeBorrado = this.heroes.pop() || '';
    //this.mostrar = true

  }



}
