import React, { useState } from "react"
import AuthRequest from "../../services/auth"
// import { User } from "../../models/type"

type User = {
    email: string;
    password: string;
}
const signup: React.FC = () => {
    const payload = {
        email: "",
        password: "",
    }
    const [user, setUser] = useState<User>(payload)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const { data } = await AuthRequest.signupUser(user)
    }
    return (
        <section className="signup_container">
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign up</button>
            </form>
        </section>
    )
}

export default signup
