import { PagenotfoundComponent } from './Shared/components/pagenotfound/pagenotfound.component';
import { SearchWorkerComponent } from './User/component/search-worker/search-worker.component';
import { WorkerProfileComponent } from './User/component/worker-profile/worker-profile.component';
import { WorkerAuthGuard } from './guards/worker-auth.guard';
import { RegistrationWorkerTermsComponent } from './Shared/components/registration-worker-terms/registration-worker-terms.component';
import { RegisterWorkerComponent } from './User/component/register-worker/register-worker.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { ProfileComponent } from './User/component/profile/profile.component';
import { RegisterComponent } from './User/component/register/register.component';
import { LoginComponent } from './User/component/login/login.component';

import { QuestionAnswerComponent } from './Shared/components/question-answer/question-answer.component';
import { ServiceCardListComponent } from './Shared/components/service-card-list/service-card-list.component';
import { ContactUsComponent } from './Shared/components/contact-us/contact-us.component';
import { HomePageComponent } from './Shared/components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './guards/admin-auth.guard';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent },
  { path: 'service-us', component: ServiceCardListComponent },
  { path: 'Q&A', component: QuestionAnswerComponent },


  // lazy loading admin section
  {
    path: 'admin',
    loadChildren: () => import('./admin/modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user', children: [
      { path: 'loginUser', component: LoginComponent },
      { path: 'registerUser', component: RegisterComponent },
      { path: 'registerWorker', component: RegisterWorkerComponent },
      {
        path: 'profile',
        canActivate: [UserAuthGuard],
        component: ProfileComponent
      },
      {
        path: 'profile-worker',
        canActivate: [WorkerAuthGuard],
        component: WorkerProfileComponent
      }
    ]
  },
  {
    path: 'searchWorker',
     canActivate: [UserAuthGuard],

    component: SearchWorkerComponent
  },
  { path: 'registration-terms', component: RegistrationWorkerTermsComponent },
  {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
