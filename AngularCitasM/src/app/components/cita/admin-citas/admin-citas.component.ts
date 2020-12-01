import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-admin-citas',
  templateUrl: './admin-citas.component.html',
  styleUrls: ['./admin-citas.component.scss']
})
export class AdminCitasComponent implements OnInit {

  constructor(private service:SharedService) { }

  CitaList:any=[];

  ngOnInit(): void {
    this.refreshCitList();
  }

  refreshCitList(){
    this.service.getCitasList().subscribe(data=>{
      this.CitaList=data;
    });
  }

}