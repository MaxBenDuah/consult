import { Link } from "react-router-dom";
import { Phone } from "@phosphor-icons/react";

function NavBar() {
  return (
    <div className="navbar bg-base-100 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-30"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="capitalize">About us</Link>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link className="capitalize">our services</Link>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link>Faqs</Link>
            </li>
            <li>
              <Link className="capitalize">netgate</Link>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link className="capitalize">media</Link>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tech Consultancy</a>
      </div>
      <div className="navbar-center hidden lg:flex z-30">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-[#5e83e3] rounded-lg hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary className="capitalize hover:bg-[#5e83e3] rounded-lg hover:text-white">
                About us
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="capitalize hover:bg-[#5e83e3] rounded-lg hover:text-white">
                our services
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-[#5e83e3] rounded-lg hover:text-white">
            <a>Faqs</a>
          </li>
          <li>
            <details>
              <summary className="capitalize hover:bg-[#5e83e3] rounded-lg hover:text-white">
                netgate
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="capitalize hover:bg-[#5e83e3] rounded-lg hover:text-white">
                Media
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary capitalize group">
          <span>
            <Phone
              size={32}
              color="#336AEA"
              className="group-hover:fill-white group-hover:stroke-white hidden lg:block"
            />
          </span>
          <span className="group-hover:text-white">Contact us</span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
