import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";
import {BackendService} from "../services/backend.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private storageService: StorageService, private router: Router,private backendService: BackendService) {
  }
  ngOnInit() {
    if(this.storageService.getData("quizme.loggedInUser")===""){
      this.router.navigate(['login'])
    }
  }
  isFriend:boolean = false;

  addFriend(friend_id:String) {
    this.backendService.addFriend("1;36").subscribe(result => {
      console.log("Freund hinzugefügt")
    })
  }
}
