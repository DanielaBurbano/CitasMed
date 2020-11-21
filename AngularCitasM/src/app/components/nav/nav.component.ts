import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authS: AuthService, private router: Router) { }

  async ngOnInit() {
    const user = await this.authS.getCurrentUser();
    if(user){
      console.log('User=>', user);
    }
  }

}
