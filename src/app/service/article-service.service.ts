import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http :HttpClient) { }

  
  fetchArticles(){
    return this.http.get("http://localhost:4500/articles");
  }


addArticles(data :any){
  return this.http.post("http://localhost:4500/articles",data);

}
updateArticle(id :any,data:any){
  return this.http.put("http://localhost:4500/articles/"+id,data);
}

getArticleById(id:any){
  return this.http.get("http://localhost:4500/articles/"+id);

}
}
