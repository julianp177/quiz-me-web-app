import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseURL: String = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get(this.baseURL+'/user');
  }
  public checkUser(username:String) {
    return this.http.get(this.baseURL+'/usercheck/'+username)
  }
  public checkPassword(username:String,password:String) {
    return this.http.get(this.baseURL + '/passwordcheck/' + password + '/' + username)
  }
  public getFirstName(userName: String){
    return this.http.get(this.baseURL+'/get/firstname/'+userName,{responseType:"text"})
  }
  public getLastName(userName: String){
    return this.http.get(this.baseURL+'/get/lastname/'+userName,{responseType:"text"})
  }
  public getUserId(userName: String):Observable<number>{
    return this.http.get<number>(this.baseURL+'/get/userid/'+userName)
  }
  public addUser(newUserData:String):Observable<string>{
    return this.http.post(this.baseURL+'/adduser',newUserData,{responseType:'text'})
  }
  public changePassword(newPasswordData:String):Observable<string>{
    return this.http.post(this.baseURL+'/change/password',newPasswordData,{responseType:'text'})
  }
  public getCards() {
    return this.http.get(this.baseURL+'/cards');
  }
  public getDuels() {
    return this.http.get(this.baseURL+'/duels');
  }
  public getFriends() {
    return this.http.get(this.baseURL+'/friends');
  }
  public getMarks() {
    return this.http.get(this.baseURL+'/marks');
  }
  public getSets() {
    return this.http.get(this.baseURL+'/sets');
  }
  public addFriend(newFriendData:String) {
    return this.http.post(this.baseURL+'/addfriend',newFriendData,{responseType:'text'})
  }
}
