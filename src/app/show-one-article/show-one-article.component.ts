import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-one-article',
  templateUrl: './show-one-article.component.html',
  styleUrls: ['./show-one-article.component.css']
})
export class ShowOneArticleComponent implements OnInit {
  @Input()art!:any;
  @Output()sendid=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendidto(i:any){
    this.sendid.emit(i);
   
   
   }

}
