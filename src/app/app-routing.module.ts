import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
// import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [

  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService }, },
  { path: 'contact', component: ContactPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: 'edit/:id', resolve: { contact: ContactResolverService }, component: ContactEditComponent },
  // { path: 'home/:userName', component: HomePageComponent , resolve: { user: UserResolverService }},
  { path: 'edit', resolve: { contact: ContactResolverService }, component: ContactEditComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'signUp', component: SignUpPageComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', component: ContactPageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
