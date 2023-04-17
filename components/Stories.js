
const Stories = ({item}) => {
  return (
    <>
        <div  className=" stories w-[120px] h-[200px] overflow-hidden rounded-lg relative bg-gray-500 mx-1 cursor-pointer">
            <img id="storyImage" className="storyImage w-full h-full rounded-lg " src={item.stories} alt="" />
            <div className="absolute  z-10 w-11 h-11 rounded-full border-4 top-2 left-5">
                <img src={item.userimage} className="w-full h-full rounded-full" alt="" />
            </div>
            <h5 className="absolute bottom-2  z-10 text-white text-[14px] font-semibold left-2">{item.name}</h5>
            <div className="blackBlur absolute h-full w-full top-0 " ></div>
            <div className="background  absolute top-0 left-0 right-0 bottom-0"></div>
        </div>   
    </>
  )
}

export default Stories