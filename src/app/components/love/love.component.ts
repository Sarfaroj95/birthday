import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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

  // send data from app componets  imp later
  @Input()  datas : any;

  privateImg:any = [
    { _id: 1, title: "Sudhu Tumi", 
    description: "",
    imgUrl: "../assets/foru/me.jpg"
  },
  { _id: 1, title: "Amar", 
    description: "",
    imgUrl: "../assets/foru/me2.jpg"
  },
  ]
  loginForm!: FormGroup;
  show:boolean = false;
  ourSection:boolean = false;
  error: boolean = false;
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      // username: [],
      pin: []
    })
  }

  onSubmit(){
    if( this.loginForm.value.pin === "143s"){
      this.ourSection = true;
      this.show = false;
      this.error = false;
      console.log("Loged in", this.loginForm.value);
    } else {
      this.error = true;
      console.log("Log error", this.loginForm.value);
    }
  }

  weShow(){
    // this.show = !this.show;
    this.show = true;
   
  }

}
