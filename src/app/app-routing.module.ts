import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { TemplateEditComponent } from './components/template-edit/template-edit.component';
import { SendCertiComponent } from './components/send-certi/send-certi.component';
import { SentComponent } from './components/sent/sent.component';
 
const routes: Routes = [
	{path:'home',component:HomeComponent},
   {path:'design',component:DesignComponent},
   {path:'edit-template',component:TemplateEditComponent},
   {path:'send-certificate',component:SendCertiComponent},
   {path:'certificate-sent',component:SentComponent},
   {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
