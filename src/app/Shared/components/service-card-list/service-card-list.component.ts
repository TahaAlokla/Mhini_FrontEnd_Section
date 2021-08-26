import { ServiceUsService } from './../../../service/service-us.service';
import { Component, OnInit } from '@angular/core';
import { ServiceUs } from 'src/app/interfaces/service-us';

@Component({
  selector: 'app-service-card-list',
  templateUrl: './service-card-list.component.html',
  styleUrls: ['./service-card-list.component.scss']
})
export class ServiceCardListComponent implements OnInit {
  serviceData: ServiceUs = {
     massage: '',
     services: [{ serviceImage: '', serviceDescription: '', serviceName: '' ,_id:''}]
    }
  constructor(private serviceUs: ServiceUsService) { }

  ngOnInit(): void {
    this.serviceUs.getAllServicesUs().subscribe(data => {
      this.serviceData = data
      console.log(this.serviceData);

    }, err => {
      console.log(err);
    },
    )
  }
  // for search worker provider service this || must be user login
  //  so gourd this router list worker
  getServiceId(idService:String){
    console.log(idService);
  }
}
