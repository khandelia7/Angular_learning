import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  title: String = "";
  constructor(private actRoute: ActivatedRoute) { 
    this.title = actRoute.snapshot.params.title;
  }

  ngOnInit(): void {
  }
}
