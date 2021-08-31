
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './Shared/module/material/material.module';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { HomePageComponent } from './Shared/components/home-page/home-page.component';
import { ServiceCardListComponent } from './Shared/components/service-card-list/service-card-list.component';
import { WhoUsComponent } from './Shared/components/who-us/who-us.component';
import { ContactUsComponent } from './Shared/components/contact-us/contact-us.component';
import { QuestionAnswerComponent } from './Shared/components/question-answer/question-answer.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/modules/admin/admin.module';
import { LoginComponent } from './User/component/login/login.component';
import { RegisterComponent } from './User/component/register/register.component';
import { ProfileComponent } from './User/component/profile/profile.component';
import { BoardUserComponent } from './User/component/board-user/board-user.component';
import { BoardAdminComponent } from './admin/components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './User/component/board-moderator/board-moderator.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CustomFormsModule } from 'ng2-validation';
import { RegisterWorkerComponent } from './User/component/register-worker/register-worker.component';
import { RegistrationWorkerTermsComponent } from './Shared/components/registration-worker-terms/registration-worker-terms.component';
import { WorkerProfileComponent } from './User/component/worker-profile/worker-profile.component';
import { BrithdayToAgePipe } from './Pipes/brithday-to-age.pipe';
import { SearchWorkerComponent } from './User/component/search-worker/search-worker.component';
import { WorkercardComponent } from './User/components/workercard/workercard.component'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    ServiceCardListComponent,
    WhoUsComponent,
    ContactUsComponent,
    QuestionAnswerComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    RegisterWorkerComponent,
    RegistrationWorkerTermsComponent,
    WorkerProfileComponent,
    BrithdayToAgePipe,
    SearchWorkerComponent,
    WorkercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
   FormsModule,
   AdminModule,
   CustomFormsModule,
   ReactiveFormsModule






  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
