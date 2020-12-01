import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-doc-citas',
  templateUrl: './doc-citas.component.html',
  styleUrls: ['./doc-citas.component.scss']
})
export class DocCitasComponent implements OnInit {

  constructor(private service:SharedService) { }

  CitaList:any=[];
  DoctorList:any=[];
  PersonaList:any=[];
  ModalTitle:string;
  ActivateAddEditCitComp:boolean=false;

  @Input() cit:any;
  cod_cit:string;
  fec_cit:string;
  hor_cit:string;
  obs_cit:string;
  fk_citper:string;
  fk_citdoc:string;
  fk_citest:string;

  
  ngOnInit(): void {
    this.refreshDoctoresList();
    this.refreshCitasList();
  }

  refreshCitasList(){
    this.service.getPersonaEmailList(localStorage.getItem("email")).subscribe(data=>{
      this.PersonaList=data;//Arreglo con datos de persona
      let v = Object.values(this.PersonaList[0]);//arreglo con datos de arreglo persona
      let cedula = v[1];//dato1 del arreglo = cedula persona
      //console.log("Variable::    "+cedula);
      this.service.getCitaDocList(cedula).subscribe(data=>{
        this.CitaList=data;
      });
    });
  }

  refreshDoctoresList(){
    this.service.getPersonaEmailList(localStorage.getItem("email")).subscribe(data=>{
      this.DoctorList=data;
    });
  }


  editClick(item){
    this.cit=item;
    this.ModalTitle="Editar Cita";
    this.ActivateAddEditCitComp=true;
  }


  closeClick(){
    this.ActivateAddEditCitComp=false;
    this.refreshCitasList();
  }

}