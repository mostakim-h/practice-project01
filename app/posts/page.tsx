import { getAllPosts } from "@/app/api/post.api";
import Link from "next/link";

export default async function Posts() {

  const productsArray = await getAllPosts() // This will return a promise, we need to await it

  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {productsArray.map((product: any) => (
          <li
            className="p-5 m-4 bg-orange-500"
            key={product.id}
           >
            <Link href={`/posts/${product.id}`}>
              {product.title}
            </Link>
            {product.body.split('\n').map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}