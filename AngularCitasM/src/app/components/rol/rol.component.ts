import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  constructor(private service:SharedService) { }

  RolList:any=[];

  ModalTitle:string;
  ActivateAddEditRolComp:boolean=false;
  rol:any;


  ngOnInit(): void {
    this.refreshRolList();
  }

  addClick(){
    this.rol={
      cod_rol:0,
      des_rol:""
    }
    this.ModalTitle="Agregar Rol";
    this.ActivateAddEditRolComp=true;

  }

  editClick(item){
    this.rol=item;
    this.ModalTitle="Editar Rol";
    this.ActivateAddEditRolComp=true;
  }

  deleteClick(item){
    if(confirm('¿Estas seguro?')){
      this.service.deleteRol(item.cod_rol).subscribe(data=>{
        alert(data.toString());
        this.refreshRolList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditRolComp=false;
    this.refreshRolList();
  }


  refreshRolList(){
    this.service.getRolList().subscribe(data=>{
      this.RolList=data;
    });
  }

}