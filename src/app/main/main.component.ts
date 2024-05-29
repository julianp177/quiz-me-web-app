import { Component } from '@angular/core';
import {Validators} from "@angular/forms";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private storageService: StorageService, private router: Router) {
  }
  ngOnInit() {
    if(this.storageService.getData("quizme.loggedInUser")===""){
      this.router.navigate(['login'])
    }
  }
  hoveredAnswer=999;
  correctAnswer = 1
  successAnswer = 999
  dangerAnswer = 999
  questionAnswered = 999;
  quizMode = true;

  hoverAnswer(value:number) {
    this.hoveredAnswer = value
  }
  checkAnswer(value:number){
    if(this.questionAnswered===999){
      if(value===this.correctAnswer){
        this.successAnswer = value;
        this.dangerAnswer = 999
      }else{
        this.dangerAnswer = value;
        this.successAnswer = 999
      }
      this.questionAnswered = value
    }
  }
}
