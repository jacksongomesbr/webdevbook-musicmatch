import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private login$: LoginService, private auth$: AuthService, private router: Router) { }

  ngOnInit() {
  }

  sair() {
    this.login$.logout()
      .subscribe(
        _ => {
          this.auth$.clean();
          this.router.navigate(['']);
        }
      );
  }

}
