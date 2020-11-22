import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-rol',
  templateUrl: './add-edit-rol.component.html',
  styleUrls: ['./add-edit-rol.component.scss']
})
export class AddEditRolComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() rol:any;
  cod_rol:string;
  des_rol:string;

  ngOnInit(): void {
    this.cod_rol=this.rol.cod_rol;
    this.des_rol=this.rol.des_rol;
  }

  addRol(){
    var val = {cod_rol:this.cod_rol,
                des_rol:this.des_rol};
    this.service.addRol(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateRol(){
    var val = {cod_rol:this.cod_rol,
      des_rol:this.des_rol};
    this.service.updateRol(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}