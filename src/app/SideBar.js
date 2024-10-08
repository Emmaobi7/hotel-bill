import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link href="/">Dashboard</Link>
      <Link href="/employees">Employees</Link>
      <Link href="/billing">Billing</Link>
      <Link href="/attendance">Attendance</Link>
    </nav>
  );
};

export default Sidebar;
