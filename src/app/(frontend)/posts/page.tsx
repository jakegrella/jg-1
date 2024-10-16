import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Card from '@/components/Card'

const payload = await getPayloadHMR({ config })

const PostsPage = async () => {
  try {
    const { docs: posts } = await payload.find({
      collection: 'p',
      depth: 2,
      page: 1,
      limit: 10,
    })
    
    return (
      <main>
      <h1>work</h1>
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} subtitle={post.subtitle} href={`/posts/${post.slug}`}>
            {/* <RichText className='' content={post.body}/> */}
          </Card>
        ))}
      </div>
    </main>
  )
} catch (err) {
  console.log('err', err)
  return
}
}

export default PostsPage
