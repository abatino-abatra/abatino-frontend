import Link from 'next/link';
const Sidebar = () => {
  return (
    <div className="border-end bg-warning" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom">ABATINO</div>
      <div className="list-group list-group-flush">
        <Link href="/">
          <a className="list-group-item list-group-item-action p-3">
            Dashboard
          </a>
        </Link>

        <Link href="/football">
          <a className="list-group-item list-group-item-action p-3">Football</a>
        </Link>

        <Link href="/basketball">
          <a className="list-group-item list-group-item-action p-3">
            Basketball
          </a>
        </Link>

        <Link href="/tennis">
          <a className="list-group-item list-group-item-action p-3">Tennis</a>
        </Link>

        <Link href="/boxing">
          <a className="list-group-item list-group-item-action p-3">Boxing</a>
        </Link>

        <Link href="/golf">
          <a className="list-group-item list-group-item-action p-3">Golf</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
