import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true
})
export class HomeComponent implements OnInit {

  cardNewYear: any = [
    
    { _id: 1, title: "রাস্তা যেটাই হোক, লক্ষ্য তুমি", 
      description: "হারাতে দেব না তোমায়, আমার এই অন্তর থেকে, হৃদয়ের মধ্যে রেখেছি তোমায়, পৃথিবীর সমস্ত সুখ দিয়ে. ভালোবাসি তোমায় অনেক বেশি, সারাজীবন থাকতে চাই পাশাপাশি .",
      imgUrl: "../assets/foru/l3.jpeg"
    },
  ]

  songsUrl:any = [
    { 
      _id:1,
      title: "Love you",
      videoUrl: "../../../assets/Videos/foru.mp4"
    },
    { 
      _id:1,
      title: "Love you",
      videoUrl: "../../../assets/Videos/foru1.mp4"
    },
  ]

  youtubeBase:string = "https://www.youtube.com/embed/"

  url: string = "OfaK8L_kADE"

  constructor() { }

  ngOnInit(): void {
  }

}
