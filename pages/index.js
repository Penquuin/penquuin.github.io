import Head from "next/head";
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import Title from "../components/title";
import PostProxy from "../components/post-proxy";

export default function Home({ posts }) {
  return (
    <div style={{"overflow": 'hidden'}}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="lockup bigtitle" style={{paddingTop: "8rem"}}>
        <Title className={"typewriter-5"} text={">Home"}></Title>
      </div>
      <div className="posts ghost-d-1">
        {
          posts.map((post, index) => (
            <PostProxy post={post} key={index}></PostProxy>
          ))
        }
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))


  const posts = files.map((filename,index) => {
    const slug = filename.replace('.md','')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
      index
    }
  })

  return {
    props: {
      posts: posts.sort((a,b)=>(new Date(b.frontmatter.date) - new Date(a.frontmatter.date))),
    },
  }
}
