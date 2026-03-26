import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  cardNewYear: any = [
    {
      _id: 1,
      title: 'রাস্তা যেটাই হোক, লক্ষ্য তুমি',
      description:
        'হারাতে দেব না তোমায়, আমার এই অন্তর থেকে, হৃদয়ের মধ্যে রেখেছি তোমায়, পৃথিবীর সমস্ত সুখ দিয়ে. ভালোবাসি তোমায় অনেক বেশি, সারাজীবন থাকতে চাই পাশাপাশি .',
      imgUrl: '../assets/foru/l3.jpeg',
    },
  ];

  items = [
    { name: 'Home', icon: 'fa-home' },
    { name: 'Profile', icon: 'fa-user' },
    { name: 'Settings', icon: 'fa-cog' },
    { name: 'Messages', icon: 'fa-envelope' },
    { name: 'Notify', icon: 'fa-bell' },
    { name: 'Favorites', icon: 'fa-heart' },
    { name: 'Starred', icon: 'fa-star' },
    { name: 'Gallery', icon: 'fa-camera' },
    { name: 'Library', icon: 'fa-book' },
  ];

  constructor() {}

  ngOnInit(): void {}

  get rows() {
    const chunkSize = 3;
    const rows = [];
    for (let i = 0; i < this.items.length; i += chunkSize) {
      rows.push(this.items.slice(i, i + chunkSize));
    }
    return rows;
  }

  homeCard(val: any) {
    console.log(val);
  }
}
