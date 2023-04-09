import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  isButton:boolean = false;
  isLogin:boolean = false;
  loginForm!: FormGroup;

  formData!: FormGroup<any>;
  errorMessage: boolean = false;
  user!: any;

  messages:any = [];


@Input() data:any

  constructor(private fb: FormBuilder, private service: CredentialsService) { }


  ngOnInit(): void {
    this.initFormLog();
    this.initForm();
    this.getMessage();
  }

  updateData(val:boolean){
    this.isLogin = val
    console.log("passed data",val)
  }

  showBottom(){
     this.isButton = !this.isButton;
  }

  logOut(){
    this.service.logOut();
    this.isLogin = false;
    this.isButton = false;
  }

  initFormLog(){
    this.loginForm = this.fb.group({
      username: [''],
      passcode: [''],
    })
  }

  initForm(){
    this.formData = this.fb.group({
      text: ['', Validators.required],
      user: [],
    })
}


getErrorMessage(){
  this.errorMessage = false;
}

onSubmitLog(){
  const formValue = this.loginForm.value;
    this.service.ChatLogIn(formValue).subscribe( response => {
      this.service.setUserName(response);
      this.loginForm.reset();
      this.isLogin = true;
      this.user  = this.service.getUser()!.slice(0, 1);
    }, 
    err =>{
      this.errorMessage = true;
    })
}


// Message Submit
onSubmit(){
  let data: any   =  { text: this.formData.value.text, user: this.service.getUserName() };
  this.service.postMessage(data).subscribe( res => {
   this.formData.reset();
    this.getMessage();
  },
  (err) => {
    console.log("Message not submit", err)
  })
}


getMessage(){
  this.service.getData().subscribe( res => {
    console.log("SMS", res)
    this.messages = res;
  })
  }

  

    // ngOnChanges(changes: SimpleChanges): void{
    //   console.log(changes)
    // }
  

}
