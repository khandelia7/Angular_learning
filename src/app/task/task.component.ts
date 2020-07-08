import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  time: " "; //variable for 2 way binding
  content: " "; // //variable for 2 way binding
  
  task;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() taskCreated = new EventEmitter(); // import angular-core IMPORTANT 1

  onTaskSubmit() {
    this.task = {
      time: this.time,
      content: this.content
    }
    this.taskCreated.emit(this.task); // IMPORTANT 1
  }

}
