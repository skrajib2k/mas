import React from 'react';

const MillAvatar = () => {
  let image =
    'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&t=st=1667283499~exp=1667284099~hmac=1c241ecfea2e7588f915d74c3bd2d88293350b56cc731d690b08a53d1c471e8a';
  return (
    <div className="avatar-group -space-x-6">
      <div className="avatar">
        <div className="w-12">
          <img src={image} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={image} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={image} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={image} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={image} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default MillAvatar;
