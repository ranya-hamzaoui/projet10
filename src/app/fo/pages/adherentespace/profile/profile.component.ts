import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private internauteservice:InscriptionService,
              private activeroute:ActivatedRoute     
    ) { }
    
  id=this.activeroute.snapshot.params['id'];
  internaute;
  ngOnInit(): void {
    this.getinternate()
  }

  getinternate(){
    this.internauteservice.getInternauteById(this.id).subscribe(data=>{
      this.internaute=data;
      console.log(data)
    })
  }

}
