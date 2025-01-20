import Markdown from "react-markdown";

const PostList = ({ data }) => {
  const posts = data.sanity.allPost;

  return (
    <>
      <h1>Post List</h1>
      {posts.map((post) => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          <h2>{post.description}</h2>
          <p>
            {post.startDate} ~ {post.endDate}
          </p>
          {post.image && <img src={post.image.asset.url} alt={post.title} />}
          <Markdown>{post.content}</Markdown>
          {/* <PortableText value={post.bodyRaw} /> */}
        </article>
      ))}
      {posts.map((post) => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          <h2>{post.description}</h2>
          <p>
            {post.startDate} ~ {post.endDate}
          </p>
          {post.image && <img src={post.image.asset.url} alt={post.title} />}
          <Markdown>{post.content}</Markdown>
          {/* <PortableText value={post.bodyRaw} /> */}
        </article>
      ))}
      {posts.map((post) => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          <h2>{post.description}</h2>
          <p>
            {post.startDate} ~ {post.endDate}
          </p>
          {post.image && <img src={post.image.asset.url} alt={post.title} />}
          <Markdown>{post.content}</Markdown>
          {/* <PortableText value={post.bodyRaw} /> */}
        </article>
      ))}
    </>
  );
};

export default PostList;
