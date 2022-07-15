import { GetServerSideProps } from "next"
import Link from "next/link"
import { baseUrl } from "../../services/constant"
import { User } from "../../models/type"

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${baseUrl}/users`)
    const users = await res.json()
    return { props: { users } }
}

function Users({ users }: { users: User[] }) {
    return (
        <section>Get All Users</section>
        // <ul>
        //   {posts?.map((post) => (
        //     <li key={post.id}>
        //       <Link
        //         href={{
        //           pathname: "/blogs/[pid]",
        //           query: { pid: post.id },
        //         }}
        //       >
        //         <a>{post.title}</a>
        //       </Link>
        //     </li>
        //   ))}
        // </ul>
    )
}

export default Users
