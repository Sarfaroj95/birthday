import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { TextComponent } from './text/text.component';


interface Message {
  _id: string;
  user: string;
  text: string;
  createdAt: string;
}

@Component({
    selector: 'app-chat-boat',
    templateUrl: './chat-boat.component.html',
    styleUrls: ['./chat-boat.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, TextComponent, UpperCasePipe]
})


export class ChatBoatComponent implements OnInit {

  cardData: any = [
    // { _id: 1, title: "Tumi Buchheo Bochho na",
    //   descriptioon: "Amar kosto ta keno bocho nago. Ami j tomar jonno pagol hoye jai. Koto din j phn koro ni amake, kotha boloni, amar moner abostha ta bocho na keno pagol",
    //   imgUrl: "../assets/foru/call.jpg"
    // },
    { _id: 2, title: "Welcome to ChatBoat",
      // descriptioon: "Ami eto chap kemon vabe nebo, Tumi toh sob jano. Amar abosta ta. hotat kore emon ta korle keno. Phone tato korbe amake naki. Koto ta chape achi jano tumi.",
      imgUrl: "../assets/foru/welcome.jpg"
    }
  ]


  isButton:boolean = false;
  isLogin:boolean = false;
  loginForm!: FormGroup;
  userShortName!: string;
  userName!: string;
  formData!: FormGroup<any>;
  errorMessage: boolean = false;
  user!: any;

  messages:Message[] = [];


@Input() data:any


  constructor(private fb: FormBuilder, private service: CredentialsService) { }


  ngOnInit(): void {
    this.initFormLog();
    this.initForm();
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
    this.service.ChatLogIn(formValue).subscribe( (response:any) => {
      this.loginForm.reset();
      this.isLogin = true;
      console.log("Login Response", response)
      setTimeout(() => {
          // this.service.setUserName(response);

    this.service.userNameService(response.user_id).subscribe((res : any )=> {
      let username = res.name;
      this.userName = username;
      this.userShortName = username.slice(0, 1);
      console.log("userShortName TS", this.userShortName)
      console.log("userNameService Full Name 22" , res.name)
// let un = this.service.userShortName.getValue();
          // console.log("userShortName TS", un)
          // this.userShortName  = un;
    })

      }, 100);



       this.getMessage();
    },
    (err:any) =>{
      this.errorMessage = true;
    })
}



// Message Submit
onSubmit(){
  let data: any   =  { text: this.formData.value.text, user: this.userName };
  this.service.postMessage(data).subscribe( res => {
   this.formData.reset();
    this.getMessage();
  },
  (err:any) => {
    console.log("Message not submit", err)
  })
}


getMessage(){
  this.service.getData().subscribe( (res: Message[]) => {
    this.messages = res;
  });
}



    // ngOnChanges(changes: SimpleChanges): void{
    //   console.log(changes)
    // }


}
