import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>FATRACING</title>
        </Head>
        <Container>
          <Header />
          <Link href="/tipacyclo">
            <a>ТИПА ЦИКЛОКРОСС</a>
          </Link>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
