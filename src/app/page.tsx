import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';
import RichText from '@/components/RichText';

const payload = await getPayloadHMR({ config })

const Home = async () => {
  const { docs: posts } = await payload.find({
    collection: 'p',
    depth: 2,
    page: 1,
    limit: 3
  })

  return (
    <main className='flex flex-col gap-8'>
        <Header />
        <section>
          <h2>posts</h2>
          {posts.map(post => (
            <div key={post.id} className='bg-zinc-900'>
              <h3>{post.title}</h3>
              <h4>{post.subtitle}</h4>
              {/* <RichText className='' content={post.body}/> */}
            </div>
          ))}
        </section>
        <section>
          <h2>work</h2>
        </section>
        <Footer />
    </main>
  );
}

export default Home;
