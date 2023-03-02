import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthDayComponent } from './components/birth-day/birth-day.component';
import { ChatBoatComponent } from './components/chat-boat/chat-boat.component';
import { HomeComponent } from './components/home/home.component';
import { NewYearsComponent } from './components/new-years/new-years.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', component: HomeComponent },
  // { path: 'birth-day', component: BirthDayComponent },
  // { path: 'new-year', component: NewYearsComponent },
  // { path: 'chat-boat', component: ChatBoatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
