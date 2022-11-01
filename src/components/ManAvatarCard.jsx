import React from 'react';

const ManAvatarCard = () => {
  return (
    <div className="navbar bg-base-100 rounded-xl">
      <div className="navbar-start">
        <div className="avatar ">
          <div className="w-14 rounded-full">
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&t=st=1667283499~exp=1667284099~hmac=1c241ecfea2e7588f915d74c3bd2d88293350b56cc731d690b08a53d1c471e8a" />
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <p className="text-lg font-medium">
          <span className="countdown font-mono">
            <span style={{ '--value': 10 }}></span>h
            <span style={{ '--value': 24 }}></span>m
            <span style={{ '--value': 30 }}></span>s
          </span>
        </p>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
    </div>
  );
};

export default ManAvatarCard;
