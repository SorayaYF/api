import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { UserModule } from './user/user.module';
import { CountryModule } from './country/country.module';
import { SpeedwayModule } from './speedway/speedway.module';
import { LoginModule } from './login/login.module';
import { TeamModule } from './team/team.module';
import { PilotModule } from './pilot/pilot.module';
import { ChampionshipModule } from './championship/championship.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    MenuModule,
    UserModule,
    CountryModule,
    SpeedwayModule,
    LoginModule,
    TeamModule,
    PilotModule,
    ChampionshipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
