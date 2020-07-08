import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-api',
  templateUrl: './course-api.component.html',
  styleUrls: ['./course-api.component.css']
})
export class CourseApiComponent implements OnInit {
  
  courses: Course[] = [];

  constructor(public courseService: CourseService) {  
  }

  ngOnInit(): void {
    this.courseService.getCourses()
     .subscribe(resp => {
       console.log(resp);
       console.log(resp.status);
       console.log(resp.statusText);
       console.log(resp.url);
       this.courses = resp.body;
     });
  }

  onCourseDelete(id: Number){
    //no subscribe as method delete is void
    this.courseService.deleteCourse(id).subscribe(
      resp => { if (resp.status == 200) {
                  for (let i = 0; i < this.courses.length; i++) { 
                  //iterate course
                      let c = this.courses[i];
                      //give 1 course to c
                      if (c.id == id) {
                      //delete it
                          this.courses.splice(i, 1);
                      }
                  }
                }
              }
    );
    alert("This " + id + " Course Deleted"); 
  }

}