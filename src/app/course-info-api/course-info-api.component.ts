import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../service/course.service';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-info-api',
  templateUrl: './course-info-api.component.html',
  styleUrls: ['./course-info-api.component.css']
})
export class CourseInfoApiComponent implements OnInit {

  id: number;
  course: Course;

  constructor(public actRoute: ActivatedRoute, public courseService: CourseService) { 
    this.id = actRoute.snapshot.params.id;
  }

  ngOnInit(): void { 
    this.courseService.getCourse(this.id)
    .subscribe( resp => {
        this.course = resp.body;
    });

  }
}