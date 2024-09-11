import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-common',
    templateUrl: './common.component.html',
    styleUrls: ['./common.component.scss'],
    standalone: true
})
export class CommonComponent implements OnInit {
  pageType: string = "home";

  
  constructor() { }

  ngOnInit(): void {
  }

  Submit(data:any){
    this.pageType = data;
  }

}
