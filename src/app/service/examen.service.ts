import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http :HttpClient) {


   }

   fetchAnnonce(){
    return this.http.get("http://localhost:4500/annonces");
  }


addAnnonce(data :any){
  return this.http.post("http://localhost:4500/annonces",data);

}
deleteAnnonce(id :any){
  return this.http.delete("http://localhost:4500/annonces/"+id);
}


updateAnnonce(id :any,data:any){
  return this.http.put("http://localhost:4500/annonces/"+id,data);
}

getAnnonceById(id:any){
  return this.http.get("http://localhost:4500/annonces/"+id);

}
}
