import React from "react";

const UserProfName = ({ userImage, name, present }) => {
  return (
    <>
      <div
        className={`flex items-center  ${name && "left_hover"} space-x-2 mt-3`}
      >
        <div className="w-[40px] h-[40px] relative z rounded-full ">
          <img src={userImage} className="relative rounded-full" alt="user image" />
        </div>
        <p className="font-bold text-gray-700 relative ">
          {name ? name : undefined}
        </p>
      </div>
    </>
  );
};

export default UserProfName;
