import { TokenStorageService } from './../../../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  currentAdmin:any

  constructor(private serviceToken : TokenStorageService) { }

  ngOnInit(): void {
    this.currentAdmin = this.serviceToken.getAdmin().user
    console.log(this.currentAdmin);

  }

}
