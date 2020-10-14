import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RealestateDetailsComponent } from './realestate-details/realestate-details.component';
import { IsLoggedInGuard } from './guards/IsLoggedInGuard';
import { IsAdminGuard } from './guards/IsAdminGuard';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'realestates/:id', component: RealestateDetailsComponent, canActivate: [IsLoggedInGuard] },
  { path: 'reservations', component: ReservationsComponent, canActivate: [IsLoggedInGuard, IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
