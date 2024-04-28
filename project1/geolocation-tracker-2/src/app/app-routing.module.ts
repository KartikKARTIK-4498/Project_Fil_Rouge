import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {IntroVideoComponent} from './IntroVideo/IntroVideo.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { authGuard } from './guards/auth.guard';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path: "", component: IntroVideoComponent }, 
  {path:"login",component:LoginComponent},
  {path:"terms",component:TermsAndConditionComponent},
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[authGuard]},
  {path:"**",component:PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
