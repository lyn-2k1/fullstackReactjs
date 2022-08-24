import { BaseService } from "../base-service";

class Auth extends BaseService {
  getMe() {
    return this.http.get(`${this.basePath}/me`).then((res) => res.data);
  }
  login(input) {
    return this.http
      .post(`${this.basePath}/login`, input)
      .then((res) => res.data);
  }
  postUser(data) {
    return this.http.post(`${this.basePath}/register`, data);
  }
}

export const AuthService = new Auth("auth");
