import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const payload = await getPayloadHMR({ config })

type Props = { params: { slug: string } }

const PostPage = async ({params}: Props) => {
    const { slug } = await params

    const post = await payload.findByID({
        collection: 'p',
        id: slug,
        depth: 2,
      })
    
    return (
        <main>
            <h1>{post.title}</h1>
        </main>
    )
}

export default PostPage
