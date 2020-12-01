import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-estado',
  templateUrl: './add-edit-estado.component.html',
  styleUrls: ['./add-edit-estado.component.scss']
})
export class AddEditEstadoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() est:any;
  cod_est:string;
  des_est:string;

  ngOnInit(): void {
    this.cod_est=this.est.cod_est;
    this.des_est=this.est.des_est;
  }

  addEstado(){
    var val = {cod_est:this.cod_est,
                des_est:this.des_est};
    this.service.addEstado(val).subscribe(res=>{
      //alert(res.toString());
      alert("Estado creado con exito");
    });
  }

  updateEstado(){
    var val = {cod_est:this.cod_est,
      des_est:this.des_est};
    this.service.updateEstado(val).subscribe(res=>{
    //alert(res.toString());
    alert("Estado actualizado con exito");
    });
  }

}