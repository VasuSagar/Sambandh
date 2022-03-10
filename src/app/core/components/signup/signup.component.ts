import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  onSubmit(){
    this.authenticationService.signup(this.registerForm.value).subscribe(res=>{

    });
  }

}
