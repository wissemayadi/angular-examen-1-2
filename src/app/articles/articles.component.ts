import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
article!:any;
  constructor(private s:ArticleServiceService,private router :Router) { }

  ngOnInit(): void {
    this.s.fetchArticles().subscribe(
      (d)=>{
      this.article=d;
      }
    )
  }
  }
    

