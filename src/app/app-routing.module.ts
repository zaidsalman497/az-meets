import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const appRoute: Routes = [
   {path: '', component: HomeComponent},
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
