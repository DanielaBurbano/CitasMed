import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-cit',
  templateUrl: './edit-cit.component.html',
  styleUrls: ['./edit-cit.component.scss']
})
export class EditCitComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string;

  @Input() cit:any;
  cod_cit:string;
  fec_cit:string;
  hor_cit:string;
  obs_cit:string;
  fk_citper:string;
  cfk_citper:string;
  cfk_citdoc:string;
  fk_citdoc:string;
  fk_citest:string;

  ngOnInit(): void {

    this.cod_cit=this.cit.cod_cit;
    this.fec_cit=this.cit.fec_cit;
    this.hor_cit=this.cit.hor_cit;
    this.obs_cit=this.cit.obs_cit;
    this.fk_citper=this.cit.fk_citper.nom_per;
    this.cfk_citper=this.cit.fk_citper.cod_per;
    this.cfk_citdoc=this.cit.fk_citdoc.fk_docper.ced_per;
    this.fk_citdoc=this.cit.fk_citdoc.fk_docper.nom_per;
    this.fk_citest="0";
  }

  updateCita(){
    var val = {cod_cit:this.cod_cit,
      fec_cit:this.fec_cit,
      hor_cit:this.hor_cit,
      obs_cit:this.obs_cit,
      fk_citper:this.cfk_citper,
      fk_citdoc:this.cfk_citdoc,
      fk_citest:this.fk_citest};

    this.service.updateCita(val).subscribe(res=>{//Agrega el Doctor
      //alert(res.toString());
      alert("Cita actualizada");
    });

    
  }

}