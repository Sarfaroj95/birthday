import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-birth-day',
    templateUrl: './birth-day.component.html',
    styleUrls: ['./birth-day.component.scss'],
    standalone: true
})
export class BirthDayComponent implements OnInit {
  loveCount:number = 101
  dateBirth: any = "শুভ শুভ শুভ দিন, আজ তোমার জন্মদিন। মুখে তোমার দীপ্ত হাসি, ফুল ফুটেছে রাশি রাশি। হাজার ফুলের মাঝে গোলাপ যেমন হাসে, তোমার জীবন যেন সুখের সাগরে ভাসে। আজ আমার সবচেয়ে প্রিয় মানুষের জন্মদিন…. “শুভ জন্মদিন”"
  constructor() { }

  ngOnInit(): void {
  }

  love(){
    this.loveCount +=1
  }

  //add new comments
}
