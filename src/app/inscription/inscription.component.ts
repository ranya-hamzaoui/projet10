import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private internauteservice:InscriptionService,
              private toast :ToastrService
    
    ) { }

  inscriptionuser = this.fb.group({
    nom: ['',[Validators.required,
              Validators.maxLength(6)
             ]],
    prenom: [''],
    email: [''],
    password: [''],
    address: this.fb.group({
      city: [''],
      adresse: [''],
      poste: ['']
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  }); 

  
  
  get hobbies() {
    return this.inscriptionuser.get('hobbies') as FormArray;
  } 

  addHobbies() {
    this.hobbies.push(this.fb.control(''));
  }
  
  RemoveHobbies(i) {
    this.hobbies.removeAt(i);
  }


  ngOnInit(): void {}


  onsubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.inscriptionuser.value); 
    this.internauteservice.addInternaute(this.inscriptionuser.value).subscribe(data=>{
      this.toast.success('vous etes inscrit avec success')
    })
  } 



   onReset(){
     this.inscriptionuser.reset();
   }
}
