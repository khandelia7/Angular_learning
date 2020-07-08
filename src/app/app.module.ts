import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { PersonComponent } from './person/person.component';
import { OopsComponent } from './oops/oops.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InjecterProviderComponent } from './injecter-provider/injecter-provider.component';
import { PersonService } from './person.service';
import { FormsModule } from '@angular/forms'; //write this
import { PersonFormsComponent } from './person-forms/person-forms.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { WasteComponent } from './waste/waste.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseApiComponent } from './course-api/course-api.component';
import { CourseInfoApiComponent } from './course-info-api/course-info-api.component'; //write this
import { CourseService } from './service/course.service';
import { CardFormComponent } from './card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms'; //write this
import { AddCourseComponent } from './add-course/add-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialAngularComponent } from './material-angular/material-angular.component'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductmyComponent } from './productmy/productmy.component';
import { MyProductService } from './service/myproduct.service';
import { CartmyComponent } from './cartmy/cartmy.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    PersonComponent,
    OopsComponent,
    EncapsulationComponent,
    InjecterProviderComponent,
    PersonFormsComponent,
    CourseInfoComponent,
    HomeComponent,
    TaskComponent,
    TaskListComponent,
    WasteComponent,
    CourseApiComponent,
    CourseInfoApiComponent,
    CardFormComponent,
    MaterialAngularComponent,
    AddCourseComponent,
    ProductmyComponent,
    CartmyComponent,
    LoginComponent,  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule
  ],

  providers: [
    PersonService,
    CourseService,
    MyProductService,
    AuthService,
    AuthGuard
  ], //VERY IMPORTANT 5

  bootstrap: [AppComponent]
})
export class AppModule { }
