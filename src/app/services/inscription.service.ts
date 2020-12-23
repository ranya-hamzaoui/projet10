import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  constructor(private http:HttpClient) { } 
  private apiurl="http://localhost:3000/api/internautes";


addInternaute(newInternaute){
 return this.http.post(this.apiurl,newInternaute)
}

getInternautes(){
  return this.http.get(this.apiurl)
}

getInternauteById(id){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryInternaute(id){
  return this.http.delete(this.apiurl+"/"+id)
} 

updateInternaute(id,updateInternaute){
  return this.http.put("http://localhost:3000/api/internautes/"+id,updateInternaute)
}


}
