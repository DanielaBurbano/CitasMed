import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

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

  addPersona(){
      this.onRegister();
  }

  async onRegister() {
    var fireemail = this.ema_per;
    var firepassword  = this.pas_per;
    try {
      const user = await this.authS.register(fireemail, firepassword);

    } catch (error) {
      console.log(error);
    }
  }

}