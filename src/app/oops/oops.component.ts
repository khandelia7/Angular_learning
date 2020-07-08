import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {

  x : number = 5; //instance variable

  isPass: Boolean = false;//instance variable

  myFirstObject;
  mySecondObject = " ";
  myThirdObject = "abcd";
  myFourthObject = {
    name : 'harry',
    age : '18'
  };

  constructor() {
    this.myMethodNoReturn();
    let y = this.myMethodReturn();
    console.log(y);
    console.log(this.myFirstObject);
    console.log(this.mySecondObject);
    console.log(this.myThirdObject);
    console.log(this.myFourthObject);
  }

  ngOnInit(): void {
  }

  //without return type
  myMethodNoReturn(): void { //void is optional
    let y = 15;
    console.log(y);
    //return y; //ERRROR
  }

  //with return type
  myMethodReturn() {
    let x = 10; //local variable
    return x;
  }

}
