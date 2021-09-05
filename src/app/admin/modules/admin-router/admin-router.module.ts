import { PagenotfoundComponent } from './../../../Shared/components/pagenotfound/pagenotfound.component';
import { AdminProfileComponent } from './../../components/admin-profile/admin-profile.component';
import { DashboardSpaceComponent } from './../../components/dashboard-space/dashboard-space.component';
import { ManageOrdersComponent } from './../../components/manage-orders/manage-orders.component';
import { BoardAdminComponent } from './../../components/board-admin/board-admin.component';

import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { LoginAdminComponent } from './../../components/auth/login-admin/login-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageServicesComponent } from '../../components/manage-services/manage-services.component';
import { ManageUsersComponent } from '../../components/manage-users/manage-users.component';
import { AdminAuthGuard } from 'src/app/guards/admin-auth.guard';

const routes: Routes = [
  { path: 'loginAdmin', component: LoginAdminComponent },
  {
    path: 'dashboard',
    canActivate: [AdminAuthGuard],
    component:DashboardComponent,

    children: [


      { path: 'manage-service-us',
      canActivate: [AdminAuthGuard],
       component: ManageServicesComponent },
      { path: 'manage-user',
      canActivate: [AdminAuthGuard],
       component: ManageUsersComponent ,
    },{
      path:'sub-admin',
      canActivate: [AdminAuthGuard],
      component:BoardAdminComponent
    },
    {
      path:"manage-orders",
      canActivate: [AdminAuthGuard],
      component:ManageOrdersComponent
    },
    {
      path:"dashboard-space",
      canActivate: [AdminAuthGuard],
      component:DashboardSpaceComponent
    },
    {
      path:"adminProfile",
      canActivate: [AdminAuthGuard],
      component:AdminProfileComponent
    },
    {
      path:"**",
      canActivate: [AdminAuthGuard],
      component:PagenotfoundComponent
    },


    ]
  },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouterModule { }
