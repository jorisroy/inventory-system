import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../api/api.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  credentials = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  form;
  ngOnInit() {
    let user = localStorage.getItem("user");

    if (user != null) {
      this.router.navigate(["/dashboard"]);
    }
    this.registerForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.api.login(this.registerForm.value).subscribe(data => {
      if (data.error) {
        this.credentials = true;
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(["/dashboard"]);
      }
    });
  }
}
