import Link from 'next/link';
import styles from './Home.module.css';
import styles from './Blog.module.css';
import styles from './Post.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.welcome}>Welcome to My Blog</h1>
      <Link href="/blog">Go to Blog</Link>
    </div>
  );
}
