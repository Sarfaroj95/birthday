import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-years',
  templateUrl: './new-years.component.html',
  styleUrls: ['./new-years.component.scss']
})
export class NewYearsComponent implements OnInit {
  cardNewYear: any = [
    { _id: 1, title: "Pagli", 
      description: "Love you",
      imgUrl: "../assets/foru/l0.png"
    },
    { _id: 1, title: "Jaan", 
      description: "Love you Babu",
      imgUrl: "../assets/foru/l1.jpeg"
    },
    { _id: 1, title: "Sona Bachha", 
      description: "Love you baccha",
      imgUrl: "../assets/foru/l2.jpeg"
    },
    { _id: 1, title: "", 
      description: "",
      imgUrl: "../assets/foru/l3.jpeg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
