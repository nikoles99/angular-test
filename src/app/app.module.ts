import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {AppComponent} from './app.component';
import {HeroesComponent}  from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-details/hero-details.component';
import {HeroService} from './heroes/service/hero.service';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule}     from './app-routing.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './api/in-memory-data.servic';
import {HeroSearchComponent} from './hero-search/hero-search.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    HeroSearchComponent,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




