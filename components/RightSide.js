import { CameraIcon, EllipsisHorizontalIcon, GiftIcon, MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid"
import UserProfName from "./userProfile/UserProfName"
import Users from './Users';


const RightSide = ({ userImage, users }) => {
  return (
    <>
      <div style={{height:'calc(100vh - 60px)'}} className="rightSide overflow-auto w-[368px]   fixed right-4 ">
        <div className="h-full">
          <div className="top border-b-2 pb-2">
            <div className=" flex items-center justify-between px-3">
              <h3 className="text-gray-600 font-semibold text-[17px]">Your Pages and Profiles</h3>
              <div className="p-4">
                <EllipsisHorizontalIcon className="h-7 hover:bg-gray-200 rounded-full w-7 cursor-pointer" />
              </div>
            </div>
            <UserProfName userImage={userImage} name={'Programmer Unite'} />
            <span className="flex space-x-1 left_hover">
              <MicrophoneIcon className="text-gray-600 h-5" />
              <p className="text-gray-600 text-[13px]">Create promotion</p>
            </span>
          </div>

          <div className="top border-b-2 pb-2">
            <div className=" flex items-center justify-between px-3">
              <h3 className="text-gray-600 font-semibold text-[17px]">Birthdays</h3>
            </div>
            <div className="left_hover flex space-x-2 items-center">
              <GiftIcon className="h-10 text-blue-500" />
              <p><span className="font-semibold">Sushma Kunwar</span>'s birthday is Today</p>
            </div>
          </div>

          <div className="top border-b-2 pb-2">
            <div className=" flex items-center justify-between px-3">
              <h3 className="text-gray-600 font-semibold text-[17px]">Contacts</h3>
              <div className="p-4 flex space-x-4 items-center">
                <CameraIcon className="h-5 hover:bg-gray-200 rounded-full w-7 cursor-pointer text-gray-600" />
                <MagnifyingGlassIcon className="h-5 hover:bg-gray-200 rounded-full w-7 cursor-pointer text-gray-600" />
                <EllipsisHorizontalIcon className="h-7 hover:bg-gray-200 rounded-full w-7 cursor-pointer text-gray-600" />
              </div>
            </div>
            <div className="">
              {
                users.map((item) => {
                  return <Users key={item.id} item={item} />
                })
              }
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default RightSide