import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  get f() { return this.registerForm.controls; }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.api.login(this.registerForm.value).subscribe((data)=>{
      console.log(data);
    });
  }

}
