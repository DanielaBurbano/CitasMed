import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  constructor(private service:SharedService) { }

  DoctorList:any=[];
  PersonaList:any=[];
  CitaList:any=[];

  @Input() cit:any;
  cod_cit:string;
  fec_cit:string;
  hor_cit:string;
  obs_cit:string;
  fk_citper:string;
  fk_citdoc:string;
  fk_citest:string;

  ngOnInit(): void {
    
    this.cit={
      cod_cit:0,
      fk_citest:4,
      hor_cit:"",
      fec_cit:"",
      fk_citper:"",
      fk_citdoc:"0",
      obs_cit:"Ninguna"
    }

    this.cod_cit=this.cit.cod_cit;
    this.hor_cit=this.cit.hor_cit;
    this.fec_cit=this.cit.fec_cit;
    this.obs_cit=this.cit.obs_cit;
    this.fk_citper=this.cit.fk_citper;
    this.fk_citdoc=this.cit.fk_citdoc;
    this.fk_citest=this.cit.fk_citest;


    this.refreshDoctoresList();
    this.datosPersona();
    this.refreshCitasList();
    
    
    //let dato = localStorage.getItem("email");
    //console.log("Usuario: "+dato);
  }

  refreshDoctoresList(){
    this.service.getDoctorList().subscribe(data=>{
      this.DoctorList=data;
    });
  }

  datosPersona(){
    this.service.getPersonaEmailList(localStorage.getItem("email")).subscribe(data=>{
      this.PersonaList=data;
    });
  }

  addCita(){
    
    var val = {cod_cit:this.cod_cit,
      fec_cit:this.fec_cit,
      hor_cit:this.hor_cit,
      obs_cit:this.obs_cit,
      fk_citper:localStorage.getItem("paciente"),
      fk_citdoc:this.fk_citdoc,
      fk_citest:this.fk_citest};

      this.service.addCita(val).subscribe(data=>{
        alert("Cita registrada con exito");
        this.refreshCitasList();
      });
  }


  refreshCitasList(){
    this.service.getPersonaEmailList(localStorage.getItem("email")).subscribe(data=>{
      this.PersonaList=data;//Arreglo con datos de persona
      let v = Object.values(this.PersonaList[0]);//arreglo con datos de arreglo persona
      let codigop = v[0];//dato1 del arreglo = codigo persona
      //console.log("Variable::    "+cedula);
      this.service.getCitaPerList(codigop).subscribe(data=>{
        this.CitaList=data;
      });
    });
  }

}