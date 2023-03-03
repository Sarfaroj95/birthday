import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { BirthDayComponent } from './components/birth-day/birth-day.component';
import { ChatBoatComponent } from './components/chat-boat/chat-boat.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', component: CommonComponent },
  // { path: 'birth-day', component: BirthDayComponent },
  // { path: 'new-year', component: NewYearsComponent },
  // { path: 'chat-boat', component: ChatBoatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
