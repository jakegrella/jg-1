import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
// import RichText from '@/components/RichText';
import Card from '@/components/Card'
import Link from 'next/link'

const payload = await getPayloadHMR({ config })

const Home = async () => {
  const { docs: posts } = await payload.find({
    collection: 'p',
    depth: 2,
    page: 1,
    limit: 3,
  })

  const { docs: projects } = await payload.find({
    collection: 'work',
    depth: 2,
    page: 1,
    limit: 3,
  })

  return (
    <main className="flex flex-col gap-8">
      <section>
        <h2>posts</h2>
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} subtitle={post.subtitle} href={`/posts/${post.slug}`}>
              {/* <RichText className='' content={post.body}/> */}
            </Card>
          ))}
          <Link href="/posts">
            <h5>view more posts...</h5>
          </Link>
        </div>
      </section>
      <section>
        <h2>work</h2>
        <div className="flex flex-col gap-2">
          {projects.map((work) => (
            <Card
              key={work.id}
              title={work.title}
              subtitle={work.subtitle}
              href={`/work/${work.slug}`}
            >
              {/* <RichText className='' content={post.body}/> */}
            </Card>
          ))}
          <Link href="/work">
            <h5>view more work...</h5>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
