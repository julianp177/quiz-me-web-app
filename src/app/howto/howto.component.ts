import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss']
})
export class HowtoComponent {
  constructor(private storageService: StorageService, private router: Router) {
  }
  ngOnInit() {
    if(this.storageService.getData("quizme.loggedInUser")===""){
      this.router.navigate(['login'])
    }
  }
}
