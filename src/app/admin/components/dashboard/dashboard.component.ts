import { TokenStorageService } from './../../../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private token : TokenStorageService) { }

  ngOnInit(): void {
  }

  logoutAdmin(){
    this.token.signOut();
    window.location.reload();
  }

}
