import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
//import { SignupComponent } from './user/signup/signup.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //SignupComponent,
    ToastrModule,
    ChatModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent, pathMatch:'full'},
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'*', component:LoginComponent},
      {path:'**', component:LoginComponent}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
