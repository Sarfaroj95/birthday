import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  @Output()  newEvent = new EventEmitter<boolean>()

  constructor(private fb: FormBuilder, private service: CredentialsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      username: [],
      password: []
    })
  }

  onSubmit(){
    if( this.loginForm.value.username === "Roni" && this.loginForm.value.password === "143s"){
      // this.service.isLogin = true
      // console.log("Loged in", this.loginForm.value);
      this.newEvent.emit(true)

    } else {
      console.log("Log error", this.loginForm.value);
    }
  }

}
