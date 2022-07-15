import { GetServerSideProps } from "next"
import Link from "next/link"
import { baseUrl } from "../../services/constant"
import { User } from "../../models/type"
import UserRequest from "../../services/user"

export const getServerSideProps: GetServerSideProps = async () => {
    // const res = await fetch(`${baseUrl}/users`)
    // const users  = await res.json()
    const { data: users}
    console.log(users.data)
    return { props: { users } }
}

function Users({ users }: { users: User[] }) {
    return (
        <section>
            <h1>Get All Users</h1>
            <p>{users.toString()}</p>
            {/* <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link
                            href={{
                                pathname: "/users/[uid]",
                                query: { uid: user.id },
                            }}
                        >
                            <a>{user.email}</a>
                        </Link>
                    </li>
                ))}
            </ul> */}
        </section>
    )
}

export default Users
