import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  constructor(private service:SharedService) { }

  EstadoList:any=[];

  ModalTitle:string;
  ActivateAddEditEstComp:boolean=false;
  est:any;


  ngOnInit(): void {
    this.refreshEstadoList();
  }

  addClick(){
    this.est={
      cod_est:0,
      des_est:""
    }
    this.ModalTitle="Agregar Estado";
    this.ActivateAddEditEstComp=true;

  }

  editClick(item){
    this.est=item;
    this.ModalTitle="Editar Estado";
    this.ActivateAddEditEstComp=true;
  }

  deleteClick(item){
    if(confirm('¿Estas seguro?')){
      this.service.deleteEstado(item.cod_est).subscribe(data=>{
        //alert(data.toString());
        alert("eliminado con exito");
        this.refreshEstadoList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEstComp=false;
    this.refreshEstadoList();
  }


  refreshEstadoList(){
    this.service.getEstadoList().subscribe(data=>{
      this.EstadoList=data;
    });
  }

}