import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {
  list!:any; 
  constructor(private s : AnnonceService) { }

  ngOnInit(): void {
    this.s.fetchAnnonce().subscribe(
    (r)=>{
     this.list=r;
    }

    );
  }

}
