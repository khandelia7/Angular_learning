import { Component, OnInit } from '@angular/core';
import { Encapsulate } from '../encapsulate.model';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css']
})
export class EncapsulationComponent implements OnInit {

  encapsulate1: Encapsulate; //instance variable
  encapsulate2: Encapsulate; //instance variable

  encapsulate_arr = []; //aaray

  constructor() {
    this.encapsulate1 = new Encapsulate("Akash", "Mumbai", 1); //Object 1 
    this.encapsulate2 = new Encapsulate("Khandelia", "Mumbai", 2); //Object 2  
  }

  ngOnInit(): void {
    this.encapsulate_arr.push(this.encapsulate1); //insert in aaray
    this.encapsulate_arr.push(this.encapsulate2); //insert in aaray
  }

}
