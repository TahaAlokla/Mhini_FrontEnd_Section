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
  massageAddService :String=''
  IsSuccessAddService:Boolean=false
  FilenameImageSelected:String = ''
  form: any = {
    serviceName: null,
    serviceDescription: null,
  };

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {

    this.adminService.getAllServices().subscribe(result=>{
      this.allServices = result.data
      this.MassageAllServices = result.massage
    })
  }

  onSubmit(){
    const formData = new FormData()
    const {
      serviceName,
      serviceDescription,

    } = this.form;

    formData.append('serviceDescription', serviceDescription);
    formData.append('serviceName', serviceName);
    formData.append('serviceImage', this.serviceImage);

    this.adminService.addService(formData).subscribe(result=>{

      this.massageAddService = result.massage
      this.IsSuccessAddService = true
      this.ngOnInit()

    },err=>{
      this.massageAddService = err.massage
    })


  }
  serviceImage:any
  fileSelected(event: any) {
    const selectedFile = <File>event.target.files[0]
    this.serviceImage = selectedFile
    this.FilenameImageSelected = <string>selectedFile.name

    console.log(this.serviceImage);
  }

  deleteService(IdService:any){

  }

}
