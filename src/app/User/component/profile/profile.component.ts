import { Router } from '@angular/router';
import { AuthUserService } from './../../../service/auth-user.service';
import { TokenStorageService } from './../../../service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  errorMessageDelete = '';
  idClient=''
  isSuccessfulDeleteMassage = false;
  workersId=[]
  acceptOrder=[]
  rejectionOrder=[]
  pendingOrder=[]
  finishOrder=[]
  CancellationOrder=[]
  // arrayStatus for assigned one array of status arrases
  arrayStatus:any=[]
  constructor(private token: TokenStorageService, private AuthUserService: AuthUserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

     // get workrsId for This Client Id For that Request order Status Pending
     this.idClient= this.token.getUser().userData._id
     this.AuthUserService.getAllOrderStatus(this.idClient).subscribe(result=>{
       console.log(result);
       
       this.pendingOrder= result.pendingStatus
       this.finishOrder= result.FinishStatus
       this.CancellationOrder = result.CancellationStatus
       this.rejectionOrder = result.RejectionStatus
       this.acceptOrder = result.AcceptStatus

      //  this.workersId= result.IdWorkers.map((item :any) =>item.IdWorker )
      // console.log("workersId :" ,this.workersId);




    })

  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

  deleteUserAccount(idUser: string) {
    console.log(idUser);
    this.AuthUserService.deleteUser(idUser).subscribe(result => {
      this.isSuccessfulDeleteMassage= true
      // for delete token ang logout user
      this.logout()
      // for router redirect register user
      // this.router.navigate(['user/registerUser'])
      // console.log(result);
    }, err => {
      console.log(err);
      this.errorMessageDelete = err.error.massage || err.error.errorsValidation;

    })


  }

  viewCancellationOrder(){
    this.arrayStatus = this.CancellationOrder
    console.log(this.arrayStatus);

  }

  viewfinishOrder(){
    this.arrayStatus = this.finishOrder
  }

  viewAcceptOrder(){
    this.arrayStatus = this.acceptOrder
  }

  viewRejectionOrder(){
    this.arrayStatus = this.rejectionOrder
  }
  viewPendingOrder(){
    this.arrayStatus = this.pendingOrder
    console.log(this.arrayStatus);

  }

}
