import { Injectable } from '@angular/core';

import * as io from 'socket.io-client'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url="https://chatapi.edwisor.com"

  public socket;


  constructor(public http:HttpClient) { 
    this.socket=io(this.url);
  }

  public verifyUser=()=>{
    return Observable.create((observer)=>{
      this.socket.on('verifyUser',(data)=>{
        observer.next(data);
      });
    });
  }

  public OnlineUserList=()=>{
    return Observable.create((observer)=>{
      this.socket.on('OnlineUserList',(userList)=>{
        observer.next(userList);
      });
    });
  }

  public disconnectedSocket=()=>{
    return Observable.create((observer)=>{
      this.socket.on('disconnect',()=>{
        observer.next();
      });
    });
  }

  public setUser=(authToken)=>{
    this.socket.emit("set-user",authToken)

  }

  public markChatAsSeen=(userDetails)=>{
    this.socket.emit('mark-chat-as-seen',userDetails)

  }

  public getChat(senderId, receiverId, skip):Observable <any>{
    return this.http.get(`${this.url}/api/v1/chat/get/for/user?senderId=${senderId}&receiverId=${receiverId}&skip=${skip}&authToken=${Cookie.get('authToken')}`)
    .do(data=>console.log('Data Recived'))
    .catch(this.handleError)
  }

  public chatByUserId=(userId)=>{
    return Observable.create((observer)=>{
      this.socket.on(userId,(data)=>{
        observer.next(data);
      });
    });
  }

  public SendChatMessage=(chatMsgObject)=>{
    this.socket.emit('chat-msg',chatMsgObject);
  }

  public exitSocket=()=>{
    this.socket.disconnect();
  }

  public handleError(err: HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof Error){

    }else{

    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
