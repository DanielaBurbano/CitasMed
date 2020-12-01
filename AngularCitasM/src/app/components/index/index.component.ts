import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  DoctoresList:any=[];
  cantidad: any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.cantidad = 0;
    this.refreshDocList();
  }

  refreshDocList(){
    this.service.getDoctorList().subscribe(data=>{
      this.DoctoresList=data;
      if(this.DoctoresList.length > 0){
        this.cantidad = 1;
      }
    });
  }

}
