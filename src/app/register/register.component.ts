import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
usname=""
acno=""
pswd=""

//form group
registerform= this.fb.group({
  acno:'',
  pswd:'',
  usname:''
})

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
  var usname=this.usname
  var acno=this.acno
  var pswd=this.pswd

 const result= this.ds.register(usname,acno,pswd)

 if(result){
  alert("sucessfully Registerd")
  this.router.navigateByUrl("")
 }
 else{
  alert("Already Existing Customer...Please Login")
 }
  }

}
