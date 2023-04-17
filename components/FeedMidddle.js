import {
  BookOpenIcon,
  CameraIcon,
  FaceSmileIcon,
  FilmIcon,
  PhotoIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import UserProfName from "./userProfile/UserProfName";
import FeedPostBox from "./feedPostBox";
import PostButton from "./Postingbutton/PostButton";
import Stories from "./Stories";

const FeedMidddle = ({ userImage, story, setShowPopup,showPopup }) => {
  const PostData = [
    {
      id: 1,
      name: "abinash subedi",
      userimage:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
      postimage:
        "https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg?auto=compress&cs=tinysrgb&w=600",
      postcmt: "Nice picture",
    },
    {
      id: 2,
      name: "rajesh gautam",
      userimage:
        "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=400",
      postimage:
        "https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&w=400",
      postcmt: "great work",
    },
    {
      id: 3,
      name: "rajesh gautam",
      userimage:
        "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=400",
      postimage:
        "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=400",
      postcmt: "that is me ",
    },
    {
      id: 4,
      name: "rajesh gautam",
      userimage:
        "https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=400",
      postimage:
        "https://images.pexels.com/photos/696941/pexels-photo-696941.jpeg?auto=compress&cs=tinysrgb&w=400",
      postcmt: "wow great view",
    },
  ];

  return (
    <>
      <div
        className="ml-[489px] w-[590px] mt-7
     h-auto"
      >
        <div className="rounded-lg shadow-lg bg-white h-[290px] relative">
          <div className="flex items-center h-[20%] justify-between py-1 px-5 border-b-2 relative">
            <button className="w-[50%] mx-1 justify-center py-3 rounded-md hover:bg-gray-100 flex space-x-2">
              <BookOpenIcon className="h-7 text-gray-500" />
              <p>Stories</p>
            </button>
            <button className="w-[50%] mx-1 justify-center py-3 rounded-md hover:bg-gray-100 flex space-x-2">
              <FilmIcon className="h-7 text-gray-500" />
              <p>Reels</p>
            </button>
          </div>

          {/* feed stores section postion  */}
          <div className="stories flex overflow-hidden items-center h-[80%]  relative">
            <div className="flex items-center h-full ">
              {/* posting button for stories  */}
              <div className="w-[120px] h-[200px] storyPost relative cursor-pointer overflow-hidden ml-3 rounded-lg">
                <div className=" w-full h-[75%] ">
                  <img src={userImage} className="storyImage h-full" alt="user image" />
                </div>
                <div className="h-[25%] w-full relative">
                  <div style={{border:'4px solid white'}} className=" absolute top-[-18px] left-9 text-white w-[40px] h-[40px] bg-blue-600 rounded-full  flex items-center justify-center">
                    <PlusIcon className="storyIcon h-10 "/>
                  </div>
                <p className="text-gray-600 font-bold text-[13px] relative top-6 left-5">Create Story</p>
                </div>
                <div className="backgrounds  absolute top-0 left-0 right-0 bottom-0"></div>
              </div>
              {
                story && story.map((item) => {
                  return <Stories key={item.id} item={item} />
                })
              }
            </div>

          </div>
        </div>

        <div className="w-[100%]  py-[1px] px-4 h-[120px] rounded-lg bg-white shadow-lg my-[20px]">
          <div className="top  border-b-2 pb-2 flex items-center h-[50%] w-full space-x-1">
            <UserProfName userImage={userImage} />
            <button onClick={() => setShowPopup(!showPopup)} className="w-[90%] text-left py-2 px-3 rounded-full  bg-gray-100 hover:bg-gray-200 font-sans text-gray-600 text-lg">
              What's on your mind? {"Abinash"}
            </button>
          </div>
          <div className=" flex w-full  h-[50%]">
            <PostButton Text={"Live Video"} camara Image={CameraIcon} />
            <PostButton Text={"Photo/Video"} photo Image={PhotoIcon} />
            <PostButton Text={"Felling/Activity"} smile Image={FaceSmileIcon} />
          </div>
        </div>

        <div className="mainpost overflow-auto">
          <FeedPostBox PostData={PostData} />
        </div>
        
      </div>
    </>
  );
};

export default FeedMidddle;
