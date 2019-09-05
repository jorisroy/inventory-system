export class User {
  id: Number;
  email: String;
  api_token: String;
  company: String;
  role: String;

  constructor(userData) {
    this.id = userData.id;
    this.email = userData.email;
    this.api_token = userData.api_token;
    this.company = userData.companyName;
    this.role = userData.roleName;
  }
}
