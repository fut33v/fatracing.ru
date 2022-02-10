import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import Link from 'next/link'
// import markdownToHtml from '../lib/markdownToHtml'
// import { getAllPosts } from '../lib/api'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>FATRACING</title>
        </Head>
        <Container>
          <Header />

          {/* <article className="mb-32">
            <Head>
              <title>
                {post.title}
              </title>
            </Head>
            <PostBody content={post.content} />
          </article> */}


        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ params }) {
//   const post = getPostBySlug("fatracing", [
//     'title',
//     'content',
//   ])
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   }
// }


// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
