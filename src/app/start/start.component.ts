import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  constructor(private storageService: StorageService, private router: Router) {
  }
  ngOnInit() {
    if(this.storageService.getData("quizme.loggedInUser")===""){
      this.router.navigate(['login'])
    }
  }
}
