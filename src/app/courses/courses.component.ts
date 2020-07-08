import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course_select = {
    title: ''
  };

  course1 = {
    id: '1',
    title: 'GOOGLE',
    description: 'Sundar Pichai',
    content: 'As Google CEO, Pichai made $650,000 in annual base pay, and previously shirked additional shares of the company, according to a May report from Bloomberg'
  };

  course2 = {
    id: '2',
    title: 'APPLE',
    description: 'Tim Cook',
    content: 'Cook got a $3 million salary, a $7.7 million bonus and $884,466 in perks and other compensation in the latest period, the Cupertino, California-based technology giant said in a filing Friday.'
  };

  course3 = {
    id: '3',
    title: '',
    description: '',
    content: ''
  };

  courses_arr = []; //this in instance array. We have to use this keyword


  constructor() { }

  ngOnInit(): void {
    this.courses_arr.push(this.course1);
    this.courses_arr.push(this.course2);
    this.courses_arr.push(this.course3);

  }

  onCourseSelect(course1) {
    //this.course_select_arr.push(course);
    this.course_select = course1;
  }

}