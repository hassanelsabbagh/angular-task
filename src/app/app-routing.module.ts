import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component'; 
import { ViewDataComponent } from './view-data/view-data.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/form', pathMatch: 'full'},
	{path: 'form', component: FormComponent},
	{path: 'view-data', component: ViewDataComponent},
	{path: ':id/edit', component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}