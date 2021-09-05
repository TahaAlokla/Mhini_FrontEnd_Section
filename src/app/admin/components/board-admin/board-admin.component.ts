import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  allAdmins:any=[]
  massageGetAllAdmins:String=''
  massageError:String=''
  massageAddAdmin:String=''
  massageErrorAddAdmin:String=''
  IsSuccessAddAdmin:Boolean= false
  hide1:boolean=false
  massageDeleteAdmin:String=''
  massageErrorDeleteAdmin:String=''
  adminPrivileges:String[]=["full-admin","sub-admin"]


  form: any = {
    adminName: null,
    phoneNumber: null,
    adminPrivilege:null,
    password:null
  };

  constructor( private AdminService : AdminService ,private _snackBar: MatSnackBar , private token: TokenStorageService) { }

  ngOnInit(): void {
    this.AdminService.getAllAdmins().subscribe(result=>{
      this.massageGetAllAdmins = result.massage,
      this.allAdmins = result.admins

    }, err=>{
      this.massageError= err.massage

    })
  }

  onSubmit(){

    const {
   adminName,
    phoneNumber,
    adminPrivilege,
    password
    } = this.form;


this.AdminService.addAdmin(adminName, phoneNumber,adminPrivilege , password)
   .subscribe(result=>{

      this.massageAddAdmin = result.massage
      this.IsSuccessAddAdmin = true
      this.ngOnInit()


    },err=>{
      this.massageErrorAddAdmin = err.massage
    })


  }

  deleteAdmin(AdminId:any){
    console.log("admin id" ,AdminId );

    this.AdminService.deleteAdmin(AdminId).subscribe(result=>{
      this.massageDeleteAdmin = result.massage
       this.openSnackBar(this.massageDeleteAdmin)

      this.ngOnInit()

    },err=>{
      this.massageErrorDeleteAdmin = err.massage

    })
  }
  openSnackBar(massage:any ,) {
    this._snackBar.open(massage, 'اغلاق', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration : 3000
    });
  }

  

  }




