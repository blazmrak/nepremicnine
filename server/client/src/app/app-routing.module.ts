import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RealestateDetailsComponent } from './realestate-details/realestate-details.component';
import { IsLoggedInGuard } from './guards/IsLoggedInGuard';
import { IsAdminGuard } from './guards/IsAdminGuard';
import { ReservationsComponent } from './reservations/reservations.component';
import { UserResolver } from './resolvers/user.resolver';
import { RealestatesResolver } from './resolvers/realestates.resolver';
import { RealestateDetailsResolver } from './resolvers/realestate-details.resolver';
import { ReservationsResolver } from './resolvers/reservations.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      user: UserResolver,
      realestates: RealestatesResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'realestates/:id',
    component: RealestateDetailsComponent,
    canActivate: [IsLoggedInGuard],
    resolve: {
      realestate: RealestateDetailsResolver
    }
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
    canActivate: [IsLoggedInGuard, IsAdminGuard],
    resolve: {
      reservations: ReservationsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
