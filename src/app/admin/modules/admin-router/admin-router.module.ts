
import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { LoginAdminComponent } from './../../components/auth/login-admin/login-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageServicesComponent } from '../../components/manage-services/manage-services.component';
import { ManageUsersComponent } from '../../components/manage-users/manage-users.component';
import { AdminAuthGuard } from 'src/app/guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'loginAdmin', component: LoginAdminComponent },
      { path: 'dashboard',
      canActivate: [AdminAuthGuard],
       component: DashboardComponent },
      { path: 'manage-service-us',
      canActivate: [AdminAuthGuard],
       component: ManageServicesComponent },
      { path: 'manage-user',
      canActivate: [AdminAuthGuard],
       component: ManageUsersComponent ,

    }
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
