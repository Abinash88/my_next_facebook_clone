import { useEffect, useState } from "react";
import Leftitem from "./leftsidebox/Leftitem";
import { UserGroupIcon, FlagIcon, UsersIcon, BuildingStorefrontIcon, VideoCameraIcon, ClockIcon, BookmarkIcon, CalendarIcon, MicrophoneIcon, ChartBarIcon, GlobeAltIcon, PowerIcon, StarIcon, HeartIcon, PuzzlePieceIcon, ArrowPathRoundedSquareIcon, ChatBubbleOvalLeftEllipsisIcon, InboxIcon, PhotoIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import UserProfName from "./userProfile/UserProfName";


const LeftSidebox = ({ userImage }) => {

  const [Hideshow, setHideshow] = useState(false);
  const workShowHide = () => {
    setHideshow(!Hideshow)
  }

  // running date 
  let newDate = new Date().getFullYear();
  const [dates, setDatas] = useState(newDate);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDatas(newDate);
    }, 1000);

    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className="leftSidebar flex pb-10 flex-col justify-center w-[355px] fixed  " style={{ height: `calc(100vh - ${60}px)` }}>
        <div className="w-full h-full relative ">
        <UserProfName userImage={userImage} name={'Abinash subedi'}/>

          <div className="inner_box flex  border-bottom-md flex-col">
            <Leftitem Icon={UsersIcon} Text={"Friends"} />
            <Leftitem Icon={FlagIcon} Text={"Pages"} />
            <Leftitem Icon={UserGroupIcon} Text={"Group"} />
            <Leftitem Icon={UserGroupIcon} Text={"Group"} />
            <Leftitem Icon={BuildingStorefrontIcon} Text={"Market"} />
            <Leftitem Icon={VideoCameraIcon} Text={"Watch"} />
            <Leftitem Icon={ClockIcon} Text={"Memories"} />
            <Leftitem Icon={BookmarkIcon} Text={"Saved"} />
            <Leftitem Icon={CalendarIcon} Text={"Events"} />
            <div className={` ${Hideshow ? 'inline' : 'hidden'}`}>
              <Leftitem Icon={MicrophoneIcon} Text={"Ads Center"} />
              <Leftitem Icon={ChartBarIcon} Text={"Ads Manager"} />
              <Leftitem Icon={GlobeAltIcon} Text={"Climage Science Center"} />
              <Leftitem Icon={PowerIcon} Text={"Crisis Response"} />
              <Leftitem Icon={StarIcon} Text={"Favourites"} />
              <Leftitem Icon={HeartIcon} Text={"Fundraisers"} />
              <Leftitem Icon={PuzzlePieceIcon} Text={"Gaming Video"} />
              <Leftitem Icon={ArrowPathRoundedSquareIcon} Text={"Live videos"} />
              <Leftitem Icon={ChatBubbleOvalLeftEllipsisIcon} Text={"Messenger"} />
              <Leftitem Icon={InboxIcon} Text={"Orders and Payments"} />
              <Leftitem Icon={PuzzlePieceIcon} Text={"Play Games"} />
              <Leftitem Icon={PhotoIcon} Text={"Recent Ad Activity"} />
            </div>
            {
              Hideshow ?
                <span onClick={workShowHide}>
                  <Leftitem Icon={ChevronUpIcon} showHide Text={"Show less"} />
                </span>
                :
                <span onClick={workShowHide}>
                  <Leftitem Icon={ChevronDownIcon} showHide Text={"Show more"} />
                </span>

            }
          </div>
          <div className="pagesbox py-4 ">
            <div className="flex items-center justify-between">
            <h3 className="font-bold ml-4 text-lg text-gray-500">Your Shortcuts</h3>
            <button className="editPage text  right-5 hidden p-2 absolute hover:bg-gray-100 opacity-80  text-blue-600 " style={{fontWeight:'600'}}>Edit</button>
            </div>
            <UserProfName userImage={userImage} name={'Programmer Unite'}/>
            <div className="fotter pl-4 ">
                <a href="#">privacy</a>.
                <a href="#">Terms</a>.
                <a href="#">Advertising</a>.
                <a href="#">Ad Choice</a>.
                <a href="#">Cookies</a>.
                <a href="#">More </a>
                <p className="text-sm text-gray-700 ">Meta c {dates.toString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebox;
