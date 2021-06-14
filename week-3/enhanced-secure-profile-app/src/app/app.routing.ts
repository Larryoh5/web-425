import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';


// exports routes for use
export const AppRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomeComponent, canActivate: [SignInGuard] },
];
