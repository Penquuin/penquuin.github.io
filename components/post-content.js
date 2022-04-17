import { marked } from "marked";
import Title from "./title";
import Styles from "../styles/PostContent.module.css";
import Image from "next/image";

export default function PostContent({ frontmatter: { title, date, cover_image },content }) {
  return (
    <div className="ghost-d-1">
      <div className="bigtitle">
        <Title text={title}/>
      </div>
      <div className="bigtitle">
        <footer>Posted on <code>{date}</code></footer>
      </div>
      <div className={Styles.center}>
        <div className={ Styles.sorter }>
          <div className={Styles.imageholder}>
            <img
              className={Styles.coverimage}
              width={"100%"}
              style={{borderRadius: "50%"}}
              layout={"responsive"}
              src={cover_image}
              alt={cover_image}>
            </img>
          </div>
          <div className={Styles.postbody} style={{fontSize: "120%"}}>
            <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}