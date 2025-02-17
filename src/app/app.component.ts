import { Component } from '@angular/core';
import {StorageService} from "./services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz-web-app';
  constructor(public storageService: StorageService, private router: Router) {
  }
  ngOnInit() {
  }
}
