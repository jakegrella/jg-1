import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Card from '@/components/Card'

const payload = await getPayloadHMR({ config })

const WorkPage = async () => {
  const { docs: projects } = await payload.find({
    collection: 'work',
    depth: 2,
    page: 1,
    limit: 10,
  })

  return (
    <main>
      <h1>work</h1>
      <div className="flex flex-col gap-2">
        {projects.map((work) => (
          <Card
            key={work.id}
            title={work.title}
            subtitle={work.subtitle}
            href={`/work${work.slug}`}
          >
            {/* <RichText className='' content={post.body}/> */}
          </Card>
        ))}
      </div>
    </main>
  )
}

export default WorkPage
