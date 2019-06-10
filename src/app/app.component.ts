import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webdevbook-musicmatch';

  constructor(private login$: LoginService, private auth$: AuthService) { }

  ngOnInit() {
    this.login$.login('admin', 'admin123*')
      .subscribe(
        data => {
          this.auth$.set(data);
        }
      );
  }
}
