
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getRolList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/rol/');
  }

  addRol(val:any){
    return this.http.post(this.APIUrl + '/rol/',val);
  }

  updateRol(val:any){
    return this.http.put(this.APIUrl + '/rol/',val);
  }

  deleteRol(val:any){
    return this.http.delete(this.APIUrl + '/rol/'+val);
  }



  
  getEstadoList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/estado/');
  }

  addEstado(val:any){
    return this.http.post(this.APIUrl + '/estado/',val);
  }

  updateEstado(val:any){
    return this.http.put(this.APIUrl + '/estado/',val);
  }

  deleteEstado(val:any){
    return this.http.delete(this.APIUrl + '/estado/'+val);
  }



  
}