import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {

  cardNewYear: any = [
    { _id: 1, title: "Pagli Re", 
      description: "Love you",
      imgUrl: "../assets/foru/l0.png"
    },
    { _id: 1, title: "Jaan Amar", 
      description: "Love you Babu",
      imgUrl: "../assets/foru/l1.jpeg"
    },
    { _id: 1, title: "Sona Bachha", 
      description: "Love you baccha",
      imgUrl: "../assets/foru/l2.jpeg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
