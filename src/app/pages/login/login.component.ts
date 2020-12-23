import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 

export class LoginComponent implements OnInit {
  
   users 
   tab:any=[]
   logindata={email:"",password:""}
    constructor(private router:Router ,
                private loginservice:LoginService) { }

  ngOnInit(): void
   {
     this.loadusers()
    } 
  
  loadusers(){
   this.loginservice.getUsers().subscribe(data=>{
     console.log(data) 
     console.log(this.logindata)
     
   })
  }

 login(){ 

   this.loginservice.getUsers().subscribe(data=>{
    
    this.tab=data

    for(let item of this.tab) {

      if((item.email == this.logindata.email) 
      &&(item.password == this.logindata.password))
      
      {
         this.router.navigate(['dash']);
         alert('Vous etes bienvenus')
        break;
      }
    
    }
   })
  
  } 

 
  // login1(){
  //   this.ok=(this.loginservice.logIn(this.logdata)) 
  //   if(this.ok){
  //     this.route.navigateByUrl("dash");
  //   }
  // }


}
