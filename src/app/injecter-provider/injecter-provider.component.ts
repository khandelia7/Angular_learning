import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service'; //VERY IMPORTANT 4

@Component({
  selector: 'app-injecter-provider',
  templateUrl: './injecter-provider.component.html',
  styleUrls: ['./injecter-provider.component.css']
})
export class InjecterProviderComponent implements OnInit {

  persons_arr = [];

  constructor(personservice: PersonService) {  //VERY IMPORTANT 4
    ​this​.persons_arr = personservice.getPersons();
  }

  ngOnInit(): void {
  }

}
