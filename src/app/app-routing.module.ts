import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoggedinComponent } from './loggedin/loggedin.component';

const appRoute: Routes = [
   {path: 'home', component: HomeComponent},
   {path: '', component: HomeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'loggedin', component: LoggedinComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{

}
