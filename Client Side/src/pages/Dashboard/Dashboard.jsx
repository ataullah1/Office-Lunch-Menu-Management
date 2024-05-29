import React from 'react';
import { FaFirstOrder, FaHome, FaUsersCog } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { MdDashboardCustomize, MdOutlineMenuBook } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const { logOutAcc } = useAuth();
  const logout = () => {
    logOutAcc();
    Swal.fire({
      title: 'Logged Out',
      text: 'Your account has been successfully logged out.',
      icon: 'success',
    });
  };
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col items-center p-4">
        <div className="mb-10">
          <h2 className="text-2xl font-bold">Dashboard Logo</h2>
        </div>
        <nav className="w-full">
          <ul className="list-none p-0">
            <li className="w-full mb-2">
              <NavLink className="w-full px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <MdDashboardCustomize />
                </span>
                Dashboard
              </NavLink>
            </li>
            <li className="w-full mb-2">
              <NavLink className="w-full px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <FaFirstOrder />
                </span>
                Today Orders
              </NavLink>
            </li>
            <li className="w-full mb-2">
              <NavLink className="w-full px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <FaUsersCog />
                </span>
                All Employees
              </NavLink>
            </li>
            <hr />
            <li className="w-full mb-2">
              <Link
                to={'/'}
                className="w-full px-4 py-2 hover:bg-gray-700 flex items-center gap-2"
              >
                <span>
                  <FaHome />
                </span>
                Home
              </Link>
            </li>
            <li className="w-full mb-2">
              <Link
                to={'/today-menu'}
                className="w-full px-4 py-2 hover:bg-gray-700 flex items-center gap-2"
              >
                <span>
                  <MdOutlineMenuBook />
                </span>
                Today Menus
              </Link>
            </li>
            <li className="w-full mb-2">
              <button
                onClick={logout}
                className="w-full px-4 py-2 hover:bg-gray-700 flex items-center gap-2"
              >
                <span>
                  <LuLogOut />
                </span>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
