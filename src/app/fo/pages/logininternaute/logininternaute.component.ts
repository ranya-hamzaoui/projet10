import { Component, OnInit } from '@angular/core';
import { AdherentService } from 'src/app/services/adherent.service';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-logininternaute',
  templateUrl: './logininternaute.component.html',
  styleUrls: ['./logininternaute.component.css']
})
export class LogininternauteComponent implements OnInit {
  adherents;
  adherent={email:"",phone:""}
  constructor(private adherentservice:InscriptionService,
              private router:Router) { }

  ngOnInit(): void {
    this.adherents=this.adherentservice.getInternautes()
  }

  login(){ 

    this.adherentservice.getInternautes().subscribe(data=>{
     
     this.adherents=data
 
     for(let item of this.adherents) {
 
       if((item.email == this.adherent.email) 
       &&(item.password == this.adherent.phone))
       
       {
          
          alert('Vous etes bienvenus')
          this.router.navigate(['profile/{{item._id}}']); 

         break;
       }
     
     }
    })
   
   } 

}
