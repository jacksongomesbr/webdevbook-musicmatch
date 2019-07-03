import { Component, OnInit } from '@angular/core';
import { ValidacaoFormUtilService } from 'src/app/shared/services/validacao/validacao-form-util.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { LoginService } from '../../shared/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = null;
  password = null;

  constructor(private validacao$: ValidacaoFormUtilService,
    private auth$: AuthService,
    private login$: LoginService,
    private router: Router) { }

  ngOnInit() {
    if (this.auth$.get()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(form) {
    this.login$.login(this.username, this.password)
      .subscribe(
        data => {
          this.auth$.set(data);
          this.validacao$.erro = false;
          this.router.navigate(['admin']);
        },
        err => this.validacao$.erro = true
      );
  }

}
