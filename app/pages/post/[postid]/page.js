import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Simulating fetched data (replace with real API or data)
const posts = [
  { id: "1", title: "First Post", content: "This is the first post." },
  { id: "2", title: "Second Post", content: "This is the second post." },
  { id: "3", title: "Third Post", content: "This is the third post." },
];

const Post = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve 'id' from the route params
  const [post, setPost] = useState(null);

  // Fetch post data based on the post id (can be replaced with an API call)
  useEffect(() => {
    if (id) {
      const foundPost = posts.find((post) => post.id === id);
      if (foundPost) setPost(foundPost);
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
};

export default Post;
