import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  

  constructor(public modalSS:SwitchService){}


  ngOnInit() {
  }

  closeModal(){
    this.modalSS.$modal.closed;
  }


}
