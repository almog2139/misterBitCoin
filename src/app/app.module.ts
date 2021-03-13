import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
 import { ChartComponent } from './cmps/chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { HeaderComponent } from './pages/header/header.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from 'src/environments/environment.prod';
// import { EffectsModule } from '@ngrx/effects';
// import {AppEffects} from './store/app.effects';
// import {reducers,metaReducers} from './store/reducers';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    StatisticPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    HeaderComponent,
    ContactEditComponent,
    SignUpPageComponent,
    TransferFundComponent,
    MoveListComponent,
     ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    // StoreModule.forRoot(reducers,{
    //   metaReducers,
    //   runtimeChecks:{
    //     strictStateImmutability:true,
    //     strictActionImmutability:true,
    //   }
    // }),
    // StoreDevtoolsModule.instrument({
    //   maxAge:25,
    //   logOnly:environment.production,
    // }),
    // EffectsModule.forRoot([AppEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
