import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-chat-boat',
  templateUrl: './chat-boat.component.html',
  styleUrls: ['./chat-boat.component.scss']
})
export class ChatBoatComponent implements OnInit {

  cardData: any = [
    { _id: 1, title: "Tumi Buchheo Bochho na", 
      descriptioon: "Amar kosto ta keno bocho nago. Ami j tomar jonno pagol hoye jai. Koto din j phn koro ni amake, kotha boloni, amar moner abostha ta bocho na keno pagol",
      imgUrl: "../assets/foru/call.jpg"
    },
    // { _id: 1, title: "Amar Chap", 
    //   descriptioon: "Ami eto chap kemon vabe nebo, Tumi toh sob jano. Amar abosta ta. hotat kore emon ta korle keno. Phone tato korbe amake naki. Koto ta chape achi jano tumi.",
    //   imgUrl: "../assets/foru/call.jpg"
    // }
  ]


@Input() data:any
  isLogin: boolean = false;

  constructor(private service: CredentialsService) { }

  ngOnInit(): void {
  }

  updateData(val:boolean){
    this.isLogin = val
    console.log("passed data",val)
  }


    // ngOnChanges(changes: SimpleChanges): void{
    //   console.log(changes)
    // }
  

}
