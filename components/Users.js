
const Users = ({item}) => {
  return (
    <>
        <div className="left_hover flex space-x-2 items-center">
            <div className="h-10 w-10 rounded-full relative">
                <img className=" w-full h-full rounded-full " src={item.image} alt="user image" />
        <span className="w-[10px] h-[10px] rounded-full bg-green-500 absolute right-0 bottom-0 border-2"></span>
            </div>
            <h4 className="text-gray-700 text-[15px] font-semibold ">{item.name}</h4>
        </div>
    </>
  )
}

export default Users