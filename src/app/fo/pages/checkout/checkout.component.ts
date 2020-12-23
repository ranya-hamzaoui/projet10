import { Component, OnInit } from '@angular/core';
import { MyproduitService } from 'src/app/services/myproduit.service';
import { AdherentService } from 'src/app/services/adherent.service';
import { ToastrService } from 'ngx-toastr';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  adherentform={nom:"",prenom:"",email:"",password:"",
  adresseline1:"",adresseline2:"",
  company:"",
  phone:"",
  country:"",city:"",
  note:""} 

  newcommande={ 
    total: "",
    date : "",
    datelivraison : "",
    type : "",
    id_user:"",
    id_produit:"",
    qte:""} 
  myproduits;
  newuser;
  constructor(private myproduitservice:MyproduitService,
              private adherentservice:AdherentService,
              private toast:ToastrService,
              private commandeservice:CommandeService
              
    
    ) { }

  ngOnInit(): void {
    this.myproduits=this.myproduitservice.getproduits()
  }

  
  add(x){
    this.adherentservice.addAdherent(x).subscribe(
      data=>{
      this.toast.success('Vous etes deja inscrit bienvenue')   
      this.newcommande.id_produit=this.myproduits
      this.newcommande.date=String(new Date())
      this.newcommande.datelivraison=String(new Date())
      this.newcommande.type="especes"
      this.newuser=data;
      this.newcommande.id_user=this.newuser._id
      this.commandeservice.addCommande(this.newcommande).subscribe(data=>{
        this.toast.success('commande envoye')
      })
    })

    

  }
 
    


}
