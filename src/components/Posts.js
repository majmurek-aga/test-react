import { useEffect, useState } from "react";

const Posts = ({id}) => {
  const [posts, setPosts] = useState([
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
  ]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setPosts([...data]))
      .catch((e) =>
        setPosts([
          {
            userId: 2,
            id: 11,
            title: "Error",
            body: "",
          },
        ])
      );
  }, [id]);

  return (
    <>
      <h1>Posts for user nr {id}</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <h5>{post.body}</h5>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
