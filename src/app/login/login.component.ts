import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
import { User } from '../entity/user.model';
import { NgForm } from '@angular/forms/';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  exportAs: 'ngForm'
})
export class LoginComponent implements OnInit {
  // coffeeOrder: any;
  userForm:User;
  
  constructor(private firebase:FirebaseService) {}
  

  ngOnInit(): void {
  }
// When register button is clicked, this method starts
Register(regForm: NgForm) {

  this.userForm = regForm.form.value;
  this.save();


}


save() {
 
  this.firebase.createUser(this.userForm);
}

}
