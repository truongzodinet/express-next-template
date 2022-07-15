import { User } from "../models/type";
import AxiosConfig from "./config";

class UserRequest {
    getAllUsers(){
        const url = "/users";
        return AxiosConfig.get(url)
    }
    getUserById(id: number) {
        const url = `/users/${id}`;
        return AxiosConfig.get(url)
    }
    createUser({ user }: { user: User }) {
        const url = "/users";
        return AxiosConfig.post(url, user)
    }
    updateUser({ user }: { user: User }, id: number) {
        const url = `/users/${id}`;
        return AxiosConfig.put(url, user)
    }
    delateUserById(id: number) {
        const url = `/users/${id}`;
        return AxiosConfig.delete(url)
    }
}

export default new UserRequest;
