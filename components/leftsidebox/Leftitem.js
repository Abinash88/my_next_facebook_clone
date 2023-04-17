
const leftitem = ({ Text, Icon, showHide }) => {


  return (
    <>
      <div  className={`left_hover flex items-center space-x-3`}>
      <Icon className={`h-[30px] ${showHide && 'p-2 bg-gray-200 rounded-full'} text-blue-500`} />
      <p className="font-bold text-gray-700">{Text}</p>
    </div >
    </>
  )
}

export default leftitem;