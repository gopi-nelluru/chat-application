import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChatBoxComponent } from '../user/chat-box/chat-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path: 'chat', component: ChatBoxComponent}
    ]),
    SharedModule,
  ],
})
export class ChatModule { }
