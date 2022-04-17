import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import PostContent from "../../components/post-content";

export default function PostPage({frontmatter, content, slug}) {
  return (
    <div className="postpage" style={{overflow: "hidden"}}>
      <Head>
        <title>blog/{slug}</title>
      </Head>
      <div className="lockup bigtitle" style={{ paddingTop: "8rem" }}>
        <h2 className="typewriter-4">{'>'}Blog</h2>
      </div>
      <div className="lockup">
        <hr/>
        <PostContent frontmatter={frontmatter} content={content}></PostContent>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({params: {slug}}) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + '.md'), 'utf-8')

  const {data:frontmatter, content} = matter(markdownWithMeta)

  console.log(slug)
  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}