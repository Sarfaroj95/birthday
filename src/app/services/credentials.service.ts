import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  name!: string;
  userID: any;
  userName: string = 'Roni';


  // private url = "https://v1.nocodeapi.com/sarfaroj/google_sheets/SGkNoJyqyAMxWLTO?tabId=Sheet1"

  private HostUrl = "https://chatapp-delta-five.vercel.app"
  private LocalUrl =  "http://localhost:3001"
  private url = this.HostUrl + "/api/v1/user/"

  constructor( private http: HttpClient) {}

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"allmessage");
  }

  public postData(data:any): Observable<any[]> {
    return this.http.post<any[]>(this.url+"message", data);
  }

  public getUser(){
    return localStorage.getItem('user')
  }
  public logOut(){
    localStorage.removeItem('user');
  }


  ChatLogIn(data:any){
    return this.http.post(this.url+"chatuserlog", data)
  }

  postMessage(data:any){
    return this.http.post(this.url+"message", data)
  }
	
	setUserName(userData:any){
    this.userNameService(userData.user_id).subscribe( res => {
      let userDetails: any = res;
      this.userName = userDetails.name;
      localStorage.setItem('user', userDetails.name );
    });
	}
	
	userNameService(userid: any ){
	  return this.http.get(this.url+"chatuserget/"+userid)
	}

  getUserName(){
    return this.userName;
  }

  getListdata(){
    return null;
  }

}

