import Head from 'next/head'
import Layout from '../layouts/index';


export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        
      
        <div className="container mx-auto">

        <div className="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
            About Page
        </div>

      </div>
      </Layout>

    </div>

  );
}