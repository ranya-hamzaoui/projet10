import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/Produit.service';
import { MyproduitService } from 'src/app/services/myproduit.service';

@Component({
  selector: 'app-myproduit',
  templateUrl: './myproduit.component.html',
  styleUrls: ['./myproduit.component.css']
})
export class MyproduitComponent implements OnInit {
  myproduits;
  constructor(private myproduitservice:MyproduitService) { }

  ngOnInit(): void {
   this.myproduits= this.myproduitservice.getproduits()
  }
  
  remove(id){
    this.myproduitservice.romove(id)
  }



}
