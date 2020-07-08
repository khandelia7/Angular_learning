import { Component, OnInit } from '@angular/core';
import​ { Person } ​from​ ​'../person.model'​;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person1: Person; //instance variable behave like Person.component.ts
  person2: Person; //instance variable behave like Person.component.ts

  persons_arr = []; //instance array 

  constructor() { 
    this.person1 = { //initialize person 1
      name: 'AKASH',
      address: " MUMBAI",
      id: 1
    };

    this.person2 = { //initialize person 1
      name: 'RON',
      address: "NEW-YORK",
      id: 3
    };

    this.persons_arr.push(this.person1); //adding person1 in array
    this.persons_arr.push(this.person2); //adding person2 in array
  }

  ngOnInit(): void {
  }

}
