import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [CommonModule]
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

   items = [
    { name: 'Item 1', icon: 'fa-home' },
    { name: 'Item 2', icon: 'fa-user' },
    { name: 'Item 3', icon: 'fa-cog' },
    { name: 'Item 4', icon: 'fa-envelope' },
    { name: 'Item 5', icon: 'fa-bell' },
    { name: 'Item 6', icon: 'fa-heart' },
    { name: 'Item 7', icon: 'fa-star' },
    { name: 'Item 8', icon: 'fa-camera' },
    { name: 'Item 9', icon: 'fa-book' },
    { name: 'Item 10', icon: 'fa-globe' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

   get rows() {
    const chunkSize = 2;
    const rows = [];
    for (let i = 0; i < this.items.length; i += chunkSize) {
      rows.push(this.items.slice(i, i + chunkSize));
    }
    return rows;
  }

}
