import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 rounded-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Sk Mas</a>
      </div>
      <div className="flex-none">
        <h3 className="mr-1">Lorem, ipsum dolor.</h3>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&t=st=1667283499~exp=1667284099~hmac=1c241ecfea2e7588f915d74c3bd2d88293350b56cc731d690b08a53d1c471e8a" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
