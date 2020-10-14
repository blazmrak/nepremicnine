import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealestatesService } from '../services/realestates.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  public lat: number = 46.050959;
  public lng: number = 14.505292;

  public realestates: any;
  public user: any;
  public userSubscriber;

  constructor(
    private userService: UserService,
    route: ActivatedRoute
  ) {
    this.user = route.snapshot.data.user;
    this.realestates = route.snapshot.data.realestates;

    this.userSubscriber = this.userService.userPublisher.subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }
}
