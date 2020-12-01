import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  public user$: Observable<any> = this.authS.afAuth.user;

  constructor(private authS: AuthService, private router: Router) { }

  async ngOnInit() {

  }

  async onLogout(){
    
    try {
      await this.authS.logout();
      this.router.navigate(['index']);
    } catch (error) {
      console.log(error);
    }
  }

}