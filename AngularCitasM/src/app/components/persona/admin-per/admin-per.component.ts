import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-admin-per',
  templateUrl: './admin-per.component.html',
  styleUrls: ['./admin-per.component.scss']
})
export class AdminPerComponent implements OnInit {


  constructor(private authS: AuthService, private service:SharedService) { }

  PersonaList:any=[];
  RolList:any=[];
  EstadoList:any=[];
  ModalTitle:string;
  ActivateAddEditPerComp:boolean=false;

  @Input() per:any;
  cod_per:string;
  ced_per:string;
  nom_per:string;
  fna_per:string;
  dir_per:string;
  ema_per:string;
  pas_per:string;
  fk_perrol:string;
  fk_perest:string;

  ngOnInit(): void {
    this.per={
      cod_per:0,
      ced_per:"",
      nom_per:"",
      fna_per:"",
      dir_per:"",
      ema_per:"",
      pas_per:"",
      fk_perrol:0,
      fk_perest:0
    }
    this.refreshPerList();
    this.refreshRolList();
    this.refreshEstList();
    this.cod_per=this.per.cod_per;
    this.ced_per=this.per.ced_per;
    this.nom_per=this.per.nom_per;
    this.fna_per=this.per.fna_per;
    this.dir_per=this.per.dir_per;
    this.ema_per=this.per.ema_per;
    this.pas_per=this.per.pas_per;
    this.fk_perrol=this.per.fk_perrol;
    this.fk_perest=this.per.fk_perest;
  }

  addPersona(){
    var val = {cod_per:this.cod_per,
                ced_per:this.ced_per,
                nom_per:this.nom_per,
                fna_per:this.fna_per,
                dir_per:this.dir_per,
                ema_per:this.ema_per,
                pas_per:this.pas_per,
                fk_perrol:this.fk_perrol,
                fk_perest:this.fk_perest};
    this.service.addPersona(val).subscribe(res=>{
      //alert(res.toString());
      this.onRegister();
      this.clear();
      this.refreshPerList();
    });
    
  }

  editClick(item){
    this.per=item;
    this.ModalTitle="Editar Persona";
    this.ActivateAddEditPerComp=true;
  }

  deleteClick(item){
    if(confirm('¿Estas seguro?')){
      this.service.deletePersona(item.cod_per).subscribe(data=>{
        //alert(data.toString());
        this.refreshPerList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPerComp=false;
    this.refreshPerList();
  }

  refreshPerList(){
    this.service.getPersonaList().subscribe(data=>{
      this.PersonaList=data;
    });
  }

  refreshRolList(){
    this.service.getRolList().subscribe(data=>{
      this.RolList=data;
    });
  }

  refreshEstList(){
    this.service.getEstadoList().subscribe(data=>{
      this.EstadoList=data;
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
    this.dir_per="";
    this.ema_per="";
    this.pas_per="";
  }
}