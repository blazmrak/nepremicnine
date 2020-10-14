import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class IsAdminGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate() {
        if (this.userService.userPublisher.getUser().role === 'admin') {
            return true;
        } else {
            this.router.navigate(['/']);
            window.alert("You don't have permission to view this page");
            return false;
        }
    }
}