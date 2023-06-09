import FeedMidddle from "@/components/FeedMidddle"
import LeftSidebox from "@/components/LeftSidebox"
import Navbar from "@/components/Navbar"
import RightSide from "@/components/RightSide"
import Head from "next/head"
import {story, users} from '../components/datastorage/AllData';
import PostCreator from "@/components/feedcomponent/PostCreator"
import { useRef, useState } from "react"

const index = () => {

  const userImage = 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600';
  const name = 'Abinash sub'

  // hook for popup of the post creator 
  const [showPopup, setShowPopup] = useState(false);
  // ref hook for popup creator 
  const inputRef = useRef(null);


  function outsideClick(e) {
    if(inputRef.current && !inputRef.current.contains(e.target)){
      setShowPopup(!showPopup)
    }
  }

  return (
    <>
      <Head>
        <title>Twitter app clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      
      <main style={{minWidth:'100vw'}} className="flex flex-col relative ">
        {/* navbar section start  */}
        <Navbar userImage={userImage}/>

        {/* body section start  */}
        <div className="flex relative justify-between overflow-auto bg-gray-100 " style={{width:'100vw', height:'calc(100vh - 60px)'}}>
          {/* leftside section */}
          <LeftSidebox userImage={userImage}/>

          {/* middle feed section start  */}
          <FeedMidddle showPopup={showPopup} setShowPopup={setShowPopup} story={story} userImage={userImage}/>

          {/* right side section  */}
          <RightSide  users={users} userImage={userImage}/>
        </div>
        <div  onClick={outsideClick} className={`postPoup ${showPopup ? 'flex': 'hidden'} items-center justify-center z-10  w-[100%] fixed top-0 left-0 h-[100vh]`}>
          <PostCreator inputRef={inputRef} showPopup={showPopup} setShowPopup={setShowPopup} name={name} userImage={userImage}/>
        </div>
      </main>
    </>
  )
}

export default index