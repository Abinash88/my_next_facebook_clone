import { ChevronDownIcon, FolderPlusIcon, PhotoIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"

const PostCreator = ({ userImage, name, showPopup, setShowPopup, inputRef }) => {

    // check if there is image in post box while creating post 
    const [checkimage, setCheckimage] = useState(false);
    
    // capturing a image in hook for show 
    const [postImage, setPostImage] = useState('');

    // hook for checking image and text 
    const [hasImageText, setHasImageText] = useState(false);

    // hook for checking if there is any post cmt or not 
    const changeText = useRef(null);

    // hook for putting the value of textarea 
    const [textValue, setTextValue] = useState('');

    // find a file of post creater  
    const findFile = useRef(null);


    const haveImage = useRef(null);

    // let getimages = ;
    const handleFileChange = () => {
        const file = findFile.current.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setPostImage(reader.result);
        };
        reader.readAsDataURL(file);
      };
    
  

    useEffect(() => {
        if (postImage !== '') {
            setCheckimage(true);
        } 
    }, [postImage]);

    function Clickfileopne() {
        findFile.current.click();
    }

    // function for on and of the file uploader 
    const [fileUploader, setFileUploader] = useState(false);

    // function for remove image and fileuploader 
    function removeimageinFile() {
        setPostImage('');
        setFileUploader(false);
        setCheckimage(false)
        if(!hasImageText) {
            setHasImageText(false);
        }
        changeTheText()
    }


    // function for checking if there is text and image or not for button disable and enable
    useEffect(() => {
        if(checkimage) {
            setHasImageText(true);
        }
    },[checkimage])

   
    // function for capturing the change of textarea 
     function changeTheText() {
        let ans = changeText.current.value;
        setTextValue(ans);
        if(ans !== ''){
            setHasImageText(true);
        }else if(ans === '' && setCheckimage === false){
            setHasImageText(false)
        }
     }

    //  function for posting the post 
    function PostThePost() {
        console.log('image and text has been posted');
    }


    return (
        <>
            <div ref={inputRef} className={`popup w-[500px] relative ${checkimage ? 'h-[600px]' : 'h-[auto]'}  relative z-20 bg-white rounded-lg`}>
                <div className="top flex justify-between p-4 border-b-2">
                    <span></span>
                    <h4 className="text-[20px] font-bold text-gray-700 ">Create Post</h4>
                    <XMarkIcon onClick={() => setShowPopup(!showPopup)} className="h-7 rounded-full  bg-gray-200 p-1 cursor-pointer" />
                </div>
                <div className="middle p-4 flex space-x-2 items-center">
                    <img src={userImage} className="h-10 rounded-full " alt="" />
                    <div className="name ">
                        <h4 className="font-semibold text-gray-600">{name}</h4>
                        <span className="flex items-center space-x-1 bg-gray-200 cursor-pointer rounded-xl p-1">
                            <UsersIcon className="h-4" />
                            <p className="text-[15px]">Friends</p>
                            <ChevronDownIcon className="h-4 " />
                        </span>
                    </div>
                </div>
                <div className={`marker:midbottom scrollbars p-4 ${checkimage ? 'h-[300px]' : 'h-auto'} overflow-auto w-[100%] relative`}>
                    <textarea ref={changeText} value={textValue} onChange={changeTheText} col='10' placeholder={`What's on your mind ${name}?`} className="scrollbars w-full h-15 text-[26px]  focus:outline-none overflow-auto">
                    </textarea>
                    <div  className={` w-full relative ${fileUploader ?'flex': 'hidden'}  ${checkimage ? 'auto' : 'h-[200px]'} bg-gray-300 rounded-lg p-2`}>
                        <div onClick={Clickfileopne} className="absolute w-full h-full"></div>
                        <XMarkIcon onClick={removeimageinFile} className="h-7 absolute z-10  right-4 bg-white rounded-full cursor-pointer top-4"/>
                        <img ref={haveImage} src={postImage} className="h-auto relative " alt="" />
                        <input onChange={handleFileChange} ref={findFile} type="file" className="hidden" />
                        <div className="relative">
                            <FolderPlusIcon/>
                        </div>
                    </div>
                </div>
                <div className="bottom w-full flex flex-col justify-around p-4 h-[140px] rounded-lg relative">
                    <div className="w-full hover:text-gray-300 cursor-pointer rounded-lg h-15 flex items-center justify-center p-4 border-2 ">
                        <PhotoIcon onClick={() => setFileUploader(true)} className="h-6  text-green-600" />
                    </div>
                    <button onClick={PostThePost} className={`block w-full py-2 mt-3 font-semibold  ${hasImageText ? 'bg-blue-500 hover:bg-blue-600 text-white  cursor-pointer':'bg-gray-200 cursor-not-allowed'}  rounded-lg`}  >Post</button>
                </div>
            </div>
        </>
    )
}

export default PostCreator