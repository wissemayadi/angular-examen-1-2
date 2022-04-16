import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  article!:any;
  title:any;
  description:any;
  constructor(private s:ArticleServiceService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.s.getArticleById(this.id).subscribe(
   (d)=>{
     this.article=d;
     this.title=this.article.title;
     this.description=this.article.description;
     

   }

    )
  }
  update(data :any){
  this.s.updateArticle(this.id,data).subscribe(
    ()=>{
      this.router.navigate(['home'])
    }
  )
  }
  }


