
const TopBarMenu = ({Text, Icon, active, hide}) => {


  return (
    <>
        <div className={`hoverEffect ${active && ' md:hidden flex'} ${hide && 'hidden lg:flex'}  mx-1 cursor-pointer`}>
            <Icon className='TopIcon h-7 text-gray-700 text-bold'/>    
            <span  className={`px-5 text-[13px] py-1 rounded-lg text-center hidden bg-gray-700 absolute top-16  text-white`}>{Text}</span>
        </div>   
    </>
  )
}

export default TopBarMenu