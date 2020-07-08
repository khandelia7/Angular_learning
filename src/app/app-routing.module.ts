import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { PersonComponent } from './person/person.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InjecterProviderComponent } from './injecter-provider/injecter-provider.component';
import { PersonFormsComponent } from './person-forms/person-forms.component';
import { OopsComponent } from './oops/oops.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HomeComponent } from './home/home.component';
import { WasteComponent } from './waste/waste.component';
import { CourseApiComponent } from './course-api/course-api.component';
import { CourseInfoApiComponent } from './course-info-api/course-info-api.component';
import { CardFormComponent } from './card-form/card-form.component';
import { MaterialAngularComponent } from './material-angular/material-angular.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DashboardComponent } from './analytics/dashboard/dashboard.component';
import { ProductmyComponent } from './productmy/productmy.component';
import { CartmyComponent } from './cartmy/cartmy.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'courses', component: CoursesComponent},
  {path: 'course-info/:title', component: CourseInfoComponent},
  {path: 'oops', component: OopsComponent},
  {path: 'persons', component: PersonComponent},
  {path: 'encapsulation', component: EncapsulationComponent},
  {
    path: 'injecter-provider', component: InjecterProviderComponent,
    children:[
      {path: 'add-person', component: PersonFormsComponent},
    ]
  },
  {path: 'waste', component: WasteComponent},
  {path: 'api', component: CourseApiComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  { path: 'course-info-api/:id', component: CourseInfoApiComponent },
  {path: 'card', component: CardFormComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'material', component: MaterialAngularComponent},
  { path: 'analytics', component: DashboardComponent },
  { path: 'myshop', component: ProductmyComponent },
  { path: 'mycart', component: CartmyComponent },
  {path: '**', component: PageTransitionEvent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
