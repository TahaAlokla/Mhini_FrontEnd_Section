import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  massageFromBackend:String=''
  blockedUser:any=[]
  WorkerUser:any=[]
  clientUser:any=[]
  checkResultLength:any=[]
  ShowUsers:Boolean= false
  ShowWorkers:Boolean= false
  massageBlockedUser:String=''
ShowDefault:String='user'

  constructor(private AdminService:AdminService) { }

  ngOnInit(): void {
    this.AdminService.getAllUser().subscribe(result=>{
      // this.checkResultLength = result
      this.blockedUser = result.blockedUser
      this.WorkerUser = result.WorkerUser
      this.clientUser = result.clientUser
      // console.log("object keys",Object.keys(result.length));



    })
  }
  ShowUsersFun(){
    this.ShowDefault='user'

  }
  ShowWorkersFun(){
    this.ShowDefault='worker'

  }
  blockedUserFun(phoneNumber:any){
     this.AdminService.blockedUser(phoneNumber).subscribe(result=>{
       this.massageBlockedUser= result.massage
       this.ngOnInit()

     })
  }
  unBlockedUserFun(phoneNumber:any){
    this.AdminService.unBlockedUser(phoneNumber).subscribe(result=>{
      this.massageBlockedUser= result.massage
      this.ngOnInit()
    })
  }


}
