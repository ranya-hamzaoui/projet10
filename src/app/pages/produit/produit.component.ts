import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/Produit.service';

@Component({
  selector: 'app-Produit',
  templateUrl: './Produit.component.html',
  styleUrls: ['./Produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  produits:any;
  produitform={_id:"",nom:"",price:"",categorie:"",type:""};

  constructor(
    public Produitservice:ProduitService,
    public route:ActivatedRoute,
    public router:Router
    
    ) { }

  ngOnInit() {
    this.getProduits();
  }

  getProduits(){
    this.Produitservice.getProduits()
        .subscribe(produits=>{
          this.produits = produits;
        })
  }
  deleteproduit(id){
    this.Produitservice.destoryProduit(id)
      .subscribe(()=>{
        this.getProduits();
      });
  }

  addProduit(){
    this.Produitservice.addProduit(this.produitform)
        .subscribe(()=>
          // this.goBack() 
          console.log(this.produitform)
        )
  }


   goBack(){
    this.router.navigate(['/dash/produits'])
  }

}
