import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";
import markdownToHtml from "../lib/markdownToHtml";
import { getPostBySlug, getAllPosts } from "../lib/api";

import PostBody from "../components/post-body";

export default function Index({ allPosts, hero }) {
  return (
    <>
      <Layout>
        <Head>
          <title>FATRACING</title>
        </Head>
        <Container>
          <Header />
          <article className='mb-32'>
            <PostBody content={hero.content} />
          </article>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const mainPost = getPostBySlug("fatracing", ["title", "content"]);
  const mainPostMD = await markdownToHtml(mainPost.content || "");
  const hero = {
    content: mainPostMD,
    title: mainPost.title
  };

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ]);

  return {
    props: { allPosts, hero }
  };
}
