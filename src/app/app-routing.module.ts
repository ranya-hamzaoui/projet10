import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './fo/pages/index/index.component';
import { ProfileComponent } from './fo/pages/adherentespace/profile/profile.component';
import { TesterComponent } from './fo/pages/tester/tester.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"index",component:IndexComponent},
  {path:"profile/:id",component:ProfileComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
