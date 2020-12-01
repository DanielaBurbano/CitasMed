
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";//Ruta django

constructor(private http:HttpClient) { }

  getRolList():Observable<any[]>{//metodos para usar en el front-end
    return this.http.get<any[]>(this.APIUrl + '/rol/');//ruta de django que se va a consumir
  }

  addRol(val:any){
    return this.http.post(this.APIUrl + '/rol/',val);
  }

  updateRol(val:any){
    return this.http.put(this.APIUrl + '/rol/'+val.cod_rol+'/',val);
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
    return this.http.put(this.APIUrl + '/estado/'+val.cod_est+'/',val);
  }

  deleteEstado(val:any){
    return this.http.delete(this.APIUrl + '/estado/'+val);
  }



  getPersonaList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personas/');
  }

  addPersona(val:any){
    return this.http.post(this.APIUrl + '/persona/',val);
  }

  updatePersona(val:any){
    return this.http.put(this.APIUrl + '/persona/'+val.cod_per+'/',val);
  }

  deletePersona(val:any){
    return this.http.delete(this.APIUrl + '/persona/'+val);
  }




  getDoctorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/doctores/');
  }

  addDoctor(val:any){
    return this.http.post(this.APIUrl + '/doctor/',val);
  }

  updateDoctor(val:any){
    return this.http.put(this.APIUrl + '/doctor/'+val.cod_per+'/',val);
  }

  deleteDoctor(val:any){
    return this.http.delete(this.APIUrl + '/doctor/'+val);
  }



  getCitasList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/citas/');
  }

  addCita(val:any){
    return this.http.post(this.APIUrl + '/cita/',val);
  }

  updateCita(val:any){
    return this.http.put(this.APIUrl + '/cita/'+val.cod_cit+'/',val);
  }

  deleteCita(val:any){
    return this.http.delete(this.APIUrl + '/cita/'+val);
  }


  // Filtros
  getPersonaEmailList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personas/?ema_per='+val);
  }

  getPersonaRolList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personas/?fk_perrol='+val);
  }

  getPersonaCedList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personas/?ced_per='+val);
  }


  getDoctorCodList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/doctores/?fk_docper='+val);
  }


  getCitaDocList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/citas/?fk_citdoc='+val);
  }

  getCitaPerList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/citas/?fk_citper='+val);
  }

  getCitaCodList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/citas/?cod_cit='+val);
  }
}