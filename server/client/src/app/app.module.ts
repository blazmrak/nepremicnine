import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { AgmCoreModule } from '@agm/core';
import { RealestateDetailsComponent } from './realestate-details/realestate-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { IsLoggedInGuard } from './guards/IsLoggedInGuard';
import { IsNotLoggedInGuard } from './guards/IsNotLoggedInGuard';
import { IsAdminGuard } from './guards/IsAdminGuard';
import { UserResolver } from './resolvers/user.resolver';
import { RealestatesResolver } from './resolvers/realestates.resolver';
import { RealestateDetailsResolver } from './resolvers/realestate-details.resolver';
import { ReservationsResolver } from './resolvers/reservations.resolver';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RealestateDetailsComponent,
    NavigationComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD_x7JDLZHhuxHhVB-G304f3n8jvV23bgw"
    })
  ],
  providers: [
    IsLoggedInGuard,
    IsNotLoggedInGuard,
    IsAdminGuard,
    UserResolver,
    RealestatesResolver,
    RealestateDetailsResolver,
    ReservationsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
