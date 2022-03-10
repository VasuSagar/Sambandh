import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm:FormGroup;
  constructor(private fb:FormBuilder,private authenticationService:AuthenticationService) { 

  }

  ngOnInit(): void {
    this.signInForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  onSubmit(){
    // this.authenticationService.login(this.signInForm.value).subscribe(res=>{
    //   console.log(res);
    // });
  }

}
