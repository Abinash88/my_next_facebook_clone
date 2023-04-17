import PostBox from "./PostBox"



const feedPostBox = ({PostData}) => {
  return (
    <>
        <div className="">
            {PostData ? PostData.map((data) => {
              return <PostBox key={data.id} data={data}/>
            }): []}
        </div>
    </>
  )
}

export default feedPostBox