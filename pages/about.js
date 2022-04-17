import Head from "next/head";
import Title from "../components/title";

export default function About() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <title>About</title>
      </Head>
      <div className="lockup bigtitle" style={{paddingTop: "8rem"}}>
        <Title className={"typewriter-5"} text={">About"}></Title>
      </div>
      <div className="lockup ghost-d-1" style={{fontSize: "120%"}}>
        <p>
          <i>
          How many times have you given up on building a static website on Github? I don&apos;t know, either.
          What I know for sure, though, is that this one is better than my previous one, and the successor of it will be even better.
          </i>
        </p>
        <p>
          Hello and welcome to my website. You may know me or you may not, but what remains the same is the fact that you&apos;ve visited here!
          I&apos;m Penquuin, an amateur programmer who wants to experience as many fields in computer science and the tech industry as possible.
          This being said, however, I consider myself more specialized in computer graphics and algorithms. With regard to programming languages,
          (<b>Arrogant Programmer Time</b>) I can program in a variety of languages varying from strictly typed languages, such as C to dynamically
          typed languages, such as Lua.
        </p>
        <p>
          Here&apos;s a friendly reminder for you: This website is not a portfolio; hence, don&apos;t expect it to look incredible or informative.
        </p>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  return {
    props: {},
  }
}
