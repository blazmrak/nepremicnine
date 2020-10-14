import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {

  public user: any;
  public userSubscriber;

  constructor(private auth: AuthService, private userService: UserService, private router: Router) {
    this.user = userService.userPublisher.getUser();
    this.userSubscriber = userService.userPublisher.subscribe({
      next: (user) => {
        this.user = user;
      }
    })
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }

  public logout(): void {
    this.auth.logout().then(() => {
      this.userService.clearUser();
      this.router.navigate(['/']);
    });
  }

}
