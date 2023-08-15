import Link from 'next/link';
import blogData from '/data/blogData.json';
import styles from '../pages/Home.module.css';
import blogStyles from '../pages/Blog.module.css';
import postStyles from '../pages/Post.module.css';


export default function Blog() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
