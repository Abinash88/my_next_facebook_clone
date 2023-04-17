import { EllipsisHorizontalIcon, HandThumbUpIcon, ShareIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline"

const PostBox = ({ data }) => {
  return (
    <>
      <div className="bg-white rounded-lg mb-6 shadow-lg ">
        <div className="space-y-1 p-4">
          <div className="name flex justify-between">
            <div className="space-x-3 flex items-center">
              <img className="w-10 h-10 rounded-full" src={data.userimage} alt="user photo" />
              <div className="grid space-y-0">
                <span className="text-gray-600 font-semibold">{data.name}</span>
                <span className="text-gray-600 text-[13px]">1hr</span>
              </div>
            </div>
            <div className="space-x-3 flex items-center">
              <EllipsisHorizontalIcon className="h-7 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full" />
              <XMarkIcon className="h-7 text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="cmt text-gray-600 font-semibold">{data.postcmt}</div>
        </div>
        <div className="post grid place-items-center text-gray-200 w-full 
        ">
          <img src={data.postimage} alt="" />
        </div>
        <div className="cmt mx-5 py-2 ">
          <div className="top flex items-center justify-between pb-3">
            <span className="like">0 likes</span>
            <span className="cmt">0 comments</span>
          </div>
          <div className="  flex justify-around items-center border-t-2 pt-3">
            <span className="flex space-x-2 text-gray-600 cursor-pointer items-center hover:bg-gray-100 rounded-lg px-2 py-3">
              <HandThumbUpIcon className="h-6" />
              <p>Likes</p>
            </span>
            <span className="flex space-x-2 text-gray-600 cursor-pointer items-center hover:bg-gray-100 rounded-lg px-2 py-3">
              <ChatBubbleLeftIcon className="h-6" />
              <p>Comment</p>
            </span>
            <span className="flex space-x-2 text-gray-600 cursor-pointer items-center hover:bg-gray-100 rounded-lg px-2 py-3">
              <ShareIcon className="h-6" />
              <p>Share</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostBox