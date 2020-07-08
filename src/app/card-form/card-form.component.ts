import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    'name': new FormControl('',
                          [Validators.required,
                          Validators.minLength(4),
                          Validators.maxLength(15),
                          Validators.pattern('[a-z A-z]*') ]),
    'cardNumber': new FormControl('',
                          [Validators.required,
                          Validators.minLength(19),
                          Validators.maxLength(19),
                          Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}') ]),
    date: new FormControl('',
                            [Validators.required,
                              Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/) ]),
    code: new FormControl('',
                          [Validators.required,
                          Validators.minLength(3),
                          Validators.maxLength(3),
                          Validators.pattern('[0-9]*') ])
  });
  
  get name() { return this.cardForm.get('name'); }
  get cardNumber() { return this.cardForm.get('cardNumber'); }
  get date() { return this.cardForm.get('date'); }
  get code() { return this.cardForm.get('code'); }


  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.cardForm.value);
    
  }

  onReset(){
    this.cardForm.reset();
  }

  showErrors(){
    const {dirty,touched,errors}=this.cardForm
    return dirty && touched && errors;
  }

}
