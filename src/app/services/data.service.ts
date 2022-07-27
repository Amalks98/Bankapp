import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //database
  db: any = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000 },
    1002: { "acno": 1002, "username": "Laisha", "password": 1001, "balance": 5000 },
    1003: { "acno": 1003, "username": "Amal", "password": 1002, "balance": 3000 }
  }
  constructor() { }
  //login
  Login(acno: any, pswd: any) {

    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        return true

      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("User does not exist")
      return false
    }
  }


  //register
  register(username: any, acno: any, password: any) {
    let db = this.db

    if (acno in db) {
      return false
    }
    else {
      //insert in db
      db[acno] = {
        acno,
        username,
        password,
        "balance": 0
      }
      return true
    }

  }

  //deposit
  deposit(acno: any, password: any, amt: any) {
    var amount =parseInt(amt)
    let db = this.db
    if (acno in db) {

      if (password in db) {
         db[acno]["balance"]+=amount
         return db[acno]["balance"]

      }

      else {
        alert("Incorrect password......")
        return false
      }
    }
    else {
      alert("User does not exist......")
      return false

    }

  }

  //withdraw

  withdraw(acno:any,password:any,amt:any){
    var amount =parseInt(amt)
    let db = this.db
    if (acno in db) {

      if (password in db) {

         if(db[acno]["balance"]>amount) {
          db[acno]["balance"]-=amount
          return db[acno]["balance"]
         }
         else{
          alert("Insuffisient Balance")
          return false
         }
        
         db[acno]["balance"]+=amount
         return db[acno]["balance"]

      }

      else {
        alert("Incorrect password......")
        return false
      }
    }
    else {
      alert("User does not exist......")
      return false

    }
  }

}