import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

  showMe:boolean=false;

  toogleTag(){
    this.showMe=!this.showMe
  }
    constructor(){



    }

}

