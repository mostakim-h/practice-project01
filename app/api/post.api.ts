export const getAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // OR use revalidate
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export const getPostCommentsById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: 'no-store', // OR use revalidate
  });

    if (!res.ok) {
        throw new Error('Failed to fetch post comments');
    }

    return res.json();
}