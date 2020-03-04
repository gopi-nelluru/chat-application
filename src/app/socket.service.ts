import { Injectable } from '@angular/core';

import * as io from 'socket.io-client'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies'

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
      this.socket.on('Online-Usr-List',(userList)=>{
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
