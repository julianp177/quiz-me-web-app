import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private storageService: StorageService, private router: Router) {
  }
  ngOnInit() {
    if(this.storageService.getData("quizme.loggedInUser")===""){
      this.router.navigate(['login'])
    }
  }
  hovered = 9999;

  toggleHover(item:any) {
    if(this.hovered != item){
      this.hovered = item;
    }
    else{
      this.hovered = 0;
    }
  }
}
