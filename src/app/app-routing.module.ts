import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentInformationComponent } from './components/student-information/student-information.component';

const routes: Routes = [
  {path:'', component: StudentInformationComponent},
  {path:'student-info', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }