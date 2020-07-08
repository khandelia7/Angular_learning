import { Injectable } from '@angular/core'; //VERY IMPORTANT 1
import { Encapsulate } from './encapsulate.model'; //VERY IMPORTANT 2


@Injectable() //VERY IMPORTANT 1
export class PersonService{
    // Go to DB and fetch all Person

    injector_person1: Encapsulate; //VERY IMPORTANT 2
    injector_person2: Encapsulate;
    injector_person3: Encapsulate

    injector_persons_arr = [];

    constructor(){
        this.injector_person1 = new Encapsulate("Akash", "Mumbai", 1) //Object 1 
        this.injector_person2 = new Encapsulate("Khandelia", "Mumbai", 2); //Object 2 
        this.injector_person3 = new Encapsulate(" "," ", 3); //Object 3
        
        this.injector_persons_arr.push(this. injector_person1); //insert in aaray
        this.injector_persons_arr.push(this. injector_person2); //insert in aaray
        this.injector_persons_arr.push(this. injector_person3); //insert in aaray
    }

    public​ getPersons() : PersonService[]{ //VERY IMPORTANT 3
        return​ this​.injector_persons_arr;
    }

    addPerson(person: Encapsulate): void{
        this.injector_persons_arr.push(person);
    }

}