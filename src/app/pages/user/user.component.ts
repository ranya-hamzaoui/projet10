import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userform={id:"",email:"",password:"",role:""} 
  users:any;
  private userDelete;
  userData: any;
  userDataEdit = { id: "", email: "", password: "", role: "" }
  userview:any;

  constructor(private loginservice:LoginService,
              private toast:ToastrService,
              private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.loadusers()
  }

loadusers(){
    this.loginservice.getUsers().subscribe(data=>{
      console.log(data)  
      this.users=data     
    })
   } 

add(newuser){
  this.loginservice.addUser(newuser).subscribe(data=>{
    console.log('element ajouter avec success')
    console.log(this.userform) 
    this.loadusers() 
    this.toast.success("utilisateur a été ajouter avec succée")
  })
}


getUsers(){
  this.loginservice.getUsers().subscribe(data=>{
    console.log(data) 
    this.users=data      
  })
}



delete(content,user)
{
this.userDelete = user;  
this.modalService.open(content) 
}

deleteuser() {
  console.log("+++ userDelete +++", this.userDelete);
  this.loginservice.deleteUser(this.userDelete._id).subscribe(data => {
    this.getUsers();
    console.log("remove user")
  })
}


view(content,user)
{
this.userview = user;  
this.modalService.open(content) 
this.userDataEdit.email = user.email;
this.userDataEdit.password = user.password;
this.userDataEdit.role = user.role;
} 


edit(content,user){
this.modalService.open(content)
this.userDataEdit.id = user._id;
this.userDataEdit.email = user.email;
this.userDataEdit.password = user.password;
this.userDataEdit.role = user.role;

}


update(){
  this.loginservice.updateUser(this.userDataEdit.id,this.userDataEdit).subscribe(data=>{
    this.loadusers()
  })
}


}