import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userPublisher = new UserObserver();

  constructor() { }

  public isLoggedIn(): boolean {
    return localStorage.getItem('id') ? true : false;
  }

  public clearUser(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('username');

    this.userPublisher.next(null);
  }
}

class UserObserver {
  private subscribers = [];
  private user = !localStorage.getItem('id') ? null : {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    role: localStorage.getItem('role')
  };

  subscribe(observer) {
    this.subscribers.push(observer);
    
    return {
      unsubscribe: () => {
        this.subscribers = this.subscribers.filter(sub => sub != observer);
      }
    }
  }

  next(user) {
    this.user = user;
    this.subscribers.forEach(sub => sub.next(user));
  }

  getUser() {
    return this.user;
  }
}
