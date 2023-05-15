import { Component } from '@angular/core';
import { CredentialsService } from './services/credentials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
