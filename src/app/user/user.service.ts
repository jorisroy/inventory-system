import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User;
  constructor() {
    this.user = new User(JSON.parse(localStorage.getItem("user")));
  }
}
