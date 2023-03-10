import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  cardHome: any = [
    { _id: 1, title: "Jaan", 
      description: "",
      imgUrl: "../assets/foru/s.jpg"
    },
    { _id: 1, title: "Babu", 
      description: "Ami eto chap kemon vabe nebo, Tumi toh sob jano. Amar abosta ta. hotat kore emon ta korle keno. Phone tato korbe amake naki. Koto ta chape achi jano tumi.",
      imgUrl: "../assets/foru/h1.jpg"
    },
    { _id: 1, title: "Baccha", 
      description: "",
      imgUrl: "../assets/foru/h2.jpeg"
    },
    { _id: 1, title: "Pagol", 
      description: "",
      imgUrl: "../assets/foru/h3.jpeg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
