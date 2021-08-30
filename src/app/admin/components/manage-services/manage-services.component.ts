import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.scss']
})
export class ManageServicesComponent implements OnInit {
  allServices:any=[]
  MassageAllServices:String=''
  form: any = {
    serviceName: null,
    serviceDescription: null,
  };

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {

    this.adminService.getAllServices().subscribe(result=>{
      this.allServices = result.services
      this.MassageAllServices = result.massage
    })
  }

  onSubmit(){

  }
  serviceImage:any
  fileSelected(event: any) {
    const selectedFile = <File>event.target.files[0]
    this.serviceImage = selectedFile

    console.log(this.serviceImage);

  }

}
