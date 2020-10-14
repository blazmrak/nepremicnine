import { Component, OnInit } from '@angular/core';
import { RealestatesService } from '../services/realestates.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lat: number = 46.050959;
  public lng: number = 14.505292;

  public realestates: any;
  public user: any;
  public userSubscriber;

  constructor(private realestateService: RealestatesService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.userPublisher.getUser();
    this.userSubscriber = this.userService.userPublisher.subscribe({
      next: (user) => {
        this.user = user;
      }
    })
    this.realestateService.getRealestates().then(res => {
      this.realestates = res;
    });
  }

}
