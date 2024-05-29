import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-pool',
  templateUrl: './question-pool.component.html',
  styleUrls: ['./question-pool.component.scss']
})
export class QuestionPoolComponent {
  constructor(private storageService: StorageService, private router: Router) {
  }
  ngOnInit() {
    if(this.storageService.getData("quizme.loggedInUser")===""){
      this.router.navigate(['login'])
    }
  }
  sets:number[] = [
    1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5
  ];
}
