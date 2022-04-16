import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private s : ArticleServiceService,private router :Router) { }

  ngOnInit(): void {
  }

  saveAnnonce(f:any){
    this.s.addArticles(f).subscribe(
    ()=>{
      this.router.navigate(['home']);
    }
    )
    }

}
