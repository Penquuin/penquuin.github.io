import Image from "next/image";
import Link from "next/link";
import styles from '../styles/PostProxy.module.css';

export default function PostProxy({post}) {
  return (
    <div className={styles.card}>
      <div className={styles.fakecard}>
        <div className={styles.image}>
          <img
            src={post.frontmatter.cover_image}
            width={'100%'}
            layout={'responsive'}
            style={{
              borderRadius: "50%"
            }}
            alt='no alt'>
          </img>
        </div>

        <div className={styles.postdata }>
          <div className={styles.posttitle}><h3>{(post.index + 1) + ". " + post.frontmatter.title}</h3></div>
          <div className={styles.postdate}><footer>Posted on {post.frontmatter.date}</footer></div>
          <hr style={{width: "100%"}}/>
          <div className={styles.excerpt}>{post.frontmatter.excerpt}</div>
          <Link href={"/blog/" + post.slug} passHref><button className={styles.linkbutton}>Learn more</button></Link>
        </div>
      </div>
    </div>
  )
}