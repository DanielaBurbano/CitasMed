import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authS: AuthService, private router: Router) { }

  @Input() per:any;
  pas_per:string;
  ema_per:string;


  ngOnInit(): void {

    this.per={
      ema_per:"",
      pas_per:""
    }

    this.pas_per=this.per.pas_per;
    this.ema_per=this.per.ema_per;

  }

  loginPersona(){
      this.onLogin();
  }

  async onLogin() {
    var fireemail = this.ema_per;
    var firepassword  = this.pas_per;
    try {
      const user = await this.authS.login(fireemail, firepassword);
    } catch (error) {
      console.log(error);
    }
  }

}