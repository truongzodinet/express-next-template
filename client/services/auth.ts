import { User } from "../models/type";
import AxiosConfig from "./config";

class AuthRequest {
  signupUser( {user} : { user: User }){
    const url = "/signup";
    return AxiosConfig.post(url, user)
  }
  loginUser({ user }: { user: User }) {
    const url = "/login";
    return AxiosConfig.post(url, user)
  }
  logoutUser() {
    const url = "/logout";
    return AxiosConfig.post(url)
  }
}

export default new AuthRequest;
