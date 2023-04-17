
const PostButton = ({Text, Image, camara, photo, smile}) => {
  return (
    <>
        <div className="flex w-full items-center justify-center cursor-pointer rounded-lg hover:bg-gray-100 space-x-2">
            <Image className={`h-7  ${camara && 'text-red-500'} ${photo && 'text-green-500'} ${smile&&'text-yellow-500'}`}/>
            <p className="text-gray-500">{Text}</p>
        </div>   
    </>
  )
}

export default PostButton