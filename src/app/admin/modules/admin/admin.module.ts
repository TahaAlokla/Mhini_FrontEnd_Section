import { AdminProfileComponent } from './../../components/admin-profile/admin-profile.component';
import { DashboardSpaceComponent } from './../../components/dashboard-space/dashboard-space.component';
import { AdminRouterModule } from './../admin-router/admin-router.module';
import { RegisterSubAdminComponent } from './../../components/auth/register-sub-admin/register-sub-admin.component';
import { LoginAdminComponent } from './../../components/auth/login-admin/login-admin.component';
import { ManageUsersComponent } from './../../components/manage-users/manage-users.component';
import { ManageServicesComponent } from './../../components/manage-services/manage-services.component';
import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageOrdersComponent } from '../../components/manage-orders/manage-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Shared/module/material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ManageServicesComponent,
    ManageUsersComponent,
    ManageOrdersComponent,
    LoginAdminComponent,
    RegisterSubAdminComponent,
    DashboardSpaceComponent,
    AdminProfileComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    AdminRouterModule,
    MaterialModule,
  ]
})
export class AdminModule { }
