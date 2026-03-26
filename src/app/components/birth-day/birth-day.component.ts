import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-birth-day',
    templateUrl: './birth-day.component.html',
    styleUrls: ['./birth-day.component.scss'],
    standalone: true
})
export class BirthDayComponent implements OnInit {
  loveCount:number = 10001
  dateBirth: any = "শুভ শুভ শুভ দিন, আজ তোমার জন্মদিন। মুখে তোমার দীপ্ত হাসি, ফুল ফুটেছে রাশি রাশি। হাজার ফুলের মাঝে গোলাপ যেমন হাসে, তোমার জীবন যেন সুখের সাগরে ভাসে। আজ আমার সবচেয়ে প্রিয় মানুষের জন্মদিন…. “শুভ জন্মদিন”"
  BirthDayComponent: any = "শুভ জন্মদিন! এই বিশেষ দিনে আপনাকে জানাই অনেক অনেক শুভেচ্ছা, ভালোবাসা ও আলিঙ্গন। আপনার জীবনের প্রতিটি মুহূর্ত আনন্দ, সাফল্য ও ভালোবাসায় ভরে উঠুক। নতুন বছরটি আপনার জন্য বয়ে আনুক সুন্দর মুহূর্ত ও অফুরন্ত সুখ। সৃষ্টিকর্তা আপনার সব স্বপ্ন পূরণ করুন এবং আপনাকে সুস্থ ও দীর্ঘজীবী রাখুন, এই কামনা করি। "

  constructor() { }

  ngOnInit(): void {
  }

  love(){
    this.loveCount +=1
  }

  //add new comments
}
