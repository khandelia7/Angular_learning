import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { Course } from '../model/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course;

  courseForm = new FormGroup({
    name: new FormControl(' ', [Validators.required, Validators.minLength(3), 
      Validators.maxLength(15), Validators.pattern('[a-zA-z ]*')]),
    price: new FormControl(' '),
    shortDescription: new FormControl(' '),
    description: new FormControl(' ')
  })
  
  constructor(public courseService: CourseService, public router: Router) { 
    //check as it is provide as provider
  }
  
  onFormSubmit() {
    console.log(this.courseForm.value);
    this.course = this.courseForm.value;
   this.courseService.postCourse(this.course)
     .subscribe(resp => { //good practise
       console.log(resp.body); //cross check
       if (resp.status == 200) { 
         //naviagte to the page without refreshing page 
           this.router.navigate(['/api']); //naviagte
       }
     });
  }

  ngOnInit(): void {
  }
}