
const RightLogin = ({ Icon, active,Text}) => {
  return (
    <div>
      <div className="roundHover  mx-1 cursor-pointer">
            <Icon className={`TopIcon   ${active && 'rotate-[10deg]'} h-6 text-gray-700 text-bold`}/>   

            <span  className={`px-5 text-[13px] py-1 rounded-lg text-center hidden bg-gray-700 absolute top-16  text-white`}>{Text}</span>
      </div>
    </div>
  )
}

export default RightLogin;