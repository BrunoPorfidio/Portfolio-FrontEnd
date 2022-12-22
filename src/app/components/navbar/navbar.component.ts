import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

  modalSwitch!: boolean;

  constructor(public modalSS:SwitchService){}


  ngOnInit() {

    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch == valor})

  }

  openModal(){
    this.modalSwitch = true;
  }


}
 