import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //properties
aim= "Perfec Banking Partner"
accno="Enter your Account Number"
acno=""
pswd=""

//dependency injuction

  constructor(private router:Router,private ds:DataService ) { }

  ngOnInit(): void {
  }

//  //user defined function
// acnochange(event:any){
//   this.accno=event.target.value
//   console.log(this.accno);
  
// }
// pswdchange(event:any){
//   this.pswd=event.target.value
//   console.log(this.pswd);
  
// }

 //two way binding

  Login(){
  var acno=this.acno
  var pswd=this.pswd
 const result= this.ds.Login(acno,pswd)
 
 if (result){ 
      alert("Login Sucessfull")
      this.router.navigateByUrl('dashboard')
     }
  }
   }


//template


//   Login(a:any,p:any){
//     console.log(a.value);
    
//   var acno=a.value
//   var pswd=p.value
//   let db=this.db
  
//   if (acno in db){
//     if(pswd==db[acno]["password"]){
//       alert("Login Sucessfull")
//     }
//     else{
//       alert("incorrect password")
//     }
//   }
//   else{
//     alert("User does not exist")
//   }
//    }
// }