import { client } from '../../lib/client';
import Link from 'next/link'

type Blog = {
  id: string
  title: string
}

async function getPosts() {
  const data = await client.get({ endpoint: 'blogs' });
  console.log(data)

  // if (!data.ok) {
  //   throw new Error("Failed to fetch posts");
  // }

  return data.contents;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1>記事</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
