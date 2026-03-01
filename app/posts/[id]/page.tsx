import { getPostCommentsById } from "@/api/post.api";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const postComments = await getPostCommentsById(id);

  console.log("postComments", postComments)

  return <div>
    <h1>Post Comments for Post ID: {id}</h1>
    <ul>
      {postComments.map((comment: any) => (
        <li key={comment.id} className="p-4 m-2 bg-blue-900 text-white rounded">
          <h2 className="font-bold">{comment.name}</h2>
          <p>{comment.body}</p>
          <p className="text-sm text-gray-500">By: {comment.email}</p>
        </li>
      ))}
    </ul>
  </div>;
}