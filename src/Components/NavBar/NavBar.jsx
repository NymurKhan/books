import { NavLink } from "react-router-dom";


const NavBar = () => {

    const links = <>
    <li className="border-solid border-2 rounded-lg border-lime-500 "><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to='/Listed Books'>Listed Books</NavLink></li>
        <li><NavLink to="/Pages to Read">Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost font-extrabold text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn border-solid border-2 bg-lime-500">Button</a>
    <a className="btn border-solid border-2 bg-sky-500">Button</a>
  </div>
</div>
    );
};

export default NavBar;