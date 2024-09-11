import { Component } from '@angular/core';
import { CredentialsService } from './services/credentials.service';
import { ChatBoatComponent } from './components/chat-boat/chat-boat.component';
import { BirthDayComponent } from './components/birth-day/birth-day.component';
import { LoveComponent } from './components/love/love.component';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HomeComponent, MessageComponent, LoveComponent, BirthDayComponent, ChatBoatComponent]
})
export class AppComponent {
  title: string = "bachha";
  pageType: string = "home";
  getFilterData:any;
  isActive = true;
  constructor(private service: CredentialsService){}

  Submit(data:any){
    this.pageType = data;
    // this.getData(data);
  }


  // get data from service imp Later
  // getData(data:any){
  //   this.service.getListdata().subscribe(res=> {
  //     let arr = res.filter((items:any) => items.type === data);
  //     this.getFilterData = arr;
  //     console.log("FIlter data: ", arr)
  //   })
  // }

  // getFilter(){
  //   return this.getFilterData.filter((items:any)=> items.type ==="Home")
  //   return this.getFilterData.filter((items:any)=> items.type ==="Home").lenght

  // }

}
