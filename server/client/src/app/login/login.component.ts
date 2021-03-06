import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public error: string = null;

  public loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private user: UserService, private router: Router) {
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.error = null;
      this.auth.login(this.loginForm.value)
        .then(res => {
          this.saveUser(res.user);
          this.router.navigate(['/']);
        })
        .catch(err => {
          this.error = err.error.error;
        });
    }
  }

  private saveUser(user: any): void {
    localStorage.setItem('id', user.id);
    localStorage.setItem('username', user.username);
    localStorage.setItem('role', user.role);

    this.user.userPublisher.next(user);
  }
}
