import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-boat',
  templateUrl: './chat-boat.component.html',
  styleUrls: ['./chat-boat.component.scss']
})
export class ChatBoatComponent implements OnInit {

  cardData: any = [
    { _id: 1, title: "Amar Kosto", 
      descriptioon: "Amar kosto ta keno bocho nago. Ami j tomar jonno pagol hoye jai. Koto din j phn koro ni amake, kotha boloni, amar moner abostha ta bocho na keno pagol",
      imgUrl: "../assets/foru/call.jpg"
    },
    { _id: 1, title: "Amar Chap", 
      descriptioon: "Ami eto chap kemon vabe nebo, Tumi toh sob jano. Amar abosta ta. hotat kore emon ta korle keno. Phone tato korbe amake naki. Koto ta chape achi jano tumi.",
      imgUrl: "../assets/foru/call.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
