import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

 fourServiceArrayFromHomePage:any=4
 isLoggedIn = false;
  constructor(private appComp:AppComponent) {
    this.isLoggedIn= appComp.isLoggedIn
   }

  ngOnInit(): void {

  }

}
