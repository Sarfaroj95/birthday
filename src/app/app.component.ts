import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "bachha";
  pageType: string = "home";
  isActive = true;
  constructor(){}

  Submit(data:any){
    this.pageType = data;
  }
}
