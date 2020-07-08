import { Component, OnInit } from '@angular/core';
import { Encapsulate } from '../encapsulate.model';
import { NgForm } from '@angular/forms';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person-forms',
  templateUrl: './person-forms.component.html',
  styleUrls: ['./person-forms.component.css']
})
export class PersonFormsComponent implements OnInit {

  mypersonservice: PersonService; //IMPORTANT 1

  constructor(personservice: PersonService, public router: Router) { //IMPORTANT 1
    this.mypersonservice = personservice; //IMPORTANT 1
  }

  onformSubmit = (personForm: NgForm) => {
    let person = new Encapsulate(personForm.value.id, personForm.value.name, personForm.value.address);
    this.mypersonservice.addPerson(person); //IMPORTANT 1
    this.router.navigate(['injecter-provider']);
  }

  ngOnInit(): void {
  }
}
