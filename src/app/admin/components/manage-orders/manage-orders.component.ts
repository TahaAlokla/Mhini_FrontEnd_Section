import { map } from 'rxjs/operators';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { result } from 'lodash';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.sass']
})
export class ManageOrdersComponent implements OnInit {
  AllOrders :any =[]
  massageOrders:String =''
  massageOrdersError:String=''

  constructor( private AdminService : AdminService) { }

  ngOnInit(): void {

    this.AdminService.getAllOrders().subscribe(result=>{
      this.AllOrders = result.orders
      this.massageOrders = result.massage
    }, err=>{

      this.massageOrdersError = err.massage

    })


  }

}
