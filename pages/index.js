import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={'Games'} breadcrums={'Home'}>
      <>
        <div class="container-fluid">
          <h2 class="mt-4">Abatino</h2>
          <div class="m-auto text-center">
            <img src="/abatino01.jpeg" alt="Abatino" />
          </div>
        </div>
      </>
    </Layout>
  );
}
