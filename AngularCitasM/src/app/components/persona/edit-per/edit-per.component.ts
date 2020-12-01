import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-per',
  templateUrl: './edit-per.component.html',
  styleUrls: ['./edit-per.component.scss']
})
export class EditPerComponent implements OnInit {
  PersonaList:any=[];
  DoctorList:any=[];
  RolList:any=[];
  EstadoList:any=[];
  ModalTitle:string;

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
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.per.fk_perrol = 0;
    this.per.fk_perest = 0;

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
    this.datosPer();
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

  datosPer(){
    //trae los datos de la persona           
    this.service.getPersonaCedList(this.ced_per).subscribe(data=>{
      this.PersonaList=data;
    });
  }

  updatePer(){
    var val = {cod_per:this.cod_per,
                ced_per:this.ced_per,
                nom_per:this.nom_per,
                fna_per:this.fna_per,
                dir_per:this.dir_per,
                ema_per:this.ema_per,
                pas_per:this.pas_per,
                fk_perrol:this.fk_perrol,
                fk_perest:this.fk_perest};

    var vald = {cod_doc:this.ced_per,
                fk_docper:this.cod_per};

      this.service.deleteDoctor(this.ced_per).subscribe(res=>{//Eliminar Doctor
        alert(res.toString());
      });

      if(this.fk_perrol == "2"){
          //La Persona NO es Doctor pero el Rol seleccionado SI es Doctor
          this.service.addDoctor(vald).subscribe(res=>{//Agrega el Doctor
            //alert(res.toString());
            //alert("Doctor creado");
          });
      }

    this.service.updatePersona(val).subscribe(res=>{//Actualizar los datos
      //alert(res.toString());
      alert("Persona actualizada");
    });
  }

}