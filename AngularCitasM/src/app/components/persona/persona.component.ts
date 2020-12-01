import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  constructor(private authS: AuthService, private service:SharedService) { }

  @Input() per:any;
  cod_per:string;
  ced_per:string;
  nom_per:string;
  fna_per:string;
  usu_per:string;
  pas_per:string;
  ema_per:string;
  dir_per:string;
  fk_perrol:string;
  fk_perest:string;



  ngOnInit(): void {

    this.per={
      cod_per:0,
      ced_per:"",
      nom_per:"",
      fna_per:"",
      usu_per:"",
      pas_per:"",
      ema_per:"",
      dir_per:"",
      fk_perrol:3,
      fk_perest:1
    }

    this.cod_per=this.per.cod_per;
    this.ced_per=this.per.ced_per;
    this.nom_per=this.per.nom_per;
    this.fna_per=this.per.fna_per;
    this.usu_per=this.per.usu_per;
    this.pas_per=this.per.pas_per;
    this.ema_per=this.per.ema_per;
    this.dir_per=this.per.dir_per;
    this.fk_perrol=this.per.fk_perrol;
    this.fk_perest=this.per.fk_perest;

  }

  addPersona(){
    var val = {cod_per:this.cod_per,
              ced_per:this.ced_per,
              nom_per:this.nom_per,
              fna_per:this.fna_per,
              usu_per:this.usu_per,
              pas_per:this.pas_per,
              ema_per:this.ema_per,
              dir_per:this.dir_per,
              fk_perrol:this.fk_perrol,
              fk_perest:this.fk_perest};
      this.service.addPersona(val).subscribe(res=>{
        
        this.onRegister();
        this.clear();
      });

      
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

  clear(){
    this.cod_per="";
    this.ced_per="";
    this.nom_per="";
    this.fna_per="";
    this.usu_per="";
    this.pas_per="";
    this.ema_per="";
    this.dir_per="";
  }

}