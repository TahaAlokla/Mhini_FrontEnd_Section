import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class NotfiactionService {

  private socket: Socket;

  constructor( private tokenService: TokenStorageService) {
    this.socket = io('http://localhost:3000');
  }

  onNewNotification() {
    console.log( this.tokenService.getUser());

    let idWorker= this.tokenService.getUser().userData._id

    return new Observable(observer => {
      this.socket.on('message'+idWorker, msg => {
        observer.next(msg);
      });
    });
  }
}
