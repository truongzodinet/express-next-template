import { ParsedUrlQuery } from "querystring";
import { baseUrl } from "../../services/constant";
import { User } from "../../models/type";
function User({ user }: { user: User }) {
  return (
    // <div>
    //   <p>PostId : {post.id}</p>
    //   <p>Title : {post.title}</p>
    //   <p>Body : {post.body}</p>
    // </div>
    <section>Get User by ID</section>
  );
}

export async function getServerSideProps(context: { params: ParsedUrlQuery }) {
  const id = context.params.id;
  const res = await fetch(`${baseUrl}/users/${id}`);
  const user = await res.json();

  return {
    props: { user },
  };
}

export default User;
