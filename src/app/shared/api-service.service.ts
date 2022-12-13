import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl : string = environment.baseUrl;

  postStudent(data:any){
    return this.http.post<any>(this.baseUrl+'/students', data);
  }

  getAllStudent(){
    return this.http.get<any>(this.baseUrl+'/students');
  }

  deleteStudent(id:any){
    return this.http.delete<any>(this.baseUrl+'/students/'+ id);
  }

  updateStudent(data:any, id:number){
    return this.http.put<any>(this.baseUrl+'/students/'+id, data);
  }

}