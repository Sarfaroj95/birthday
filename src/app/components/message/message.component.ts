import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    standalone: true
})
export class MessageComponent implements OnInit {

  cardHome: any = [
    // { _id: 1, title: "Jaan", 
    //   description: "",
    //   imgUrl: "../assets/foru/s.jpg"
    // },
     // { _id: 1, title: "Baccha", 
    //   description: "",
    //   imgUrl: "../assets/foru/h2.jpeg"
    // },
    { _id: 1, title: "You & Me", 
      description: "তুমি আমি দুজনে এ মনের বাঁধনে, থাকবো পাশাপাশি সারাটি জীবন",
      imgUrl: "../assets/foru/h1.jpg"
    },
   
    { _id: 2, title: "Only for you dear", 
      description: "",
      imgUrl: "../assets/foru/h3.jpeg"
    },
    { _id: 3, title: "রাস্তা যেটাই হোক, লক্ষ্য তুমি", 
    description: "হারাতে দেব না তোমায়, আমার এই অন্তর থেকে, হৃদয়ের মধ্যে রেখেছি তোমায়, পৃথিবীর সমস্ত সুখ দিয়ে. ভালোবাসি তোমায় অনেক বেশি, সারাজীবন থাকতে চাই পাশাপাশি .",
    imgUrl: "../assets/foru/l3.jpeg"
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
