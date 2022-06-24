import Head from 'next/head';
import Image from 'next/image';
import Sidebar from './Sidebar';

export default function Layout({ title, breadcrums, children }) {
  return (
    <div className="d-flex" id="wrapper">
      <Head>
        <title>Abatino | {title}</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Abatino website for Sports betting" />
        <meta name="author" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="navbar-toggler" id="sidebarToggle">
              <span className="navbar-toggler-icon"></span>
            </button>

            <h3>{breadcrums}</h3>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
}
