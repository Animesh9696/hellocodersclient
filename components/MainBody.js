import Image from "next/image"

const MainBody = ({data}) => {
return (
  <div>
    {data.data.map((element)=>{
      return <div key={element.id}>
        <Image
        layout="responsive"
        src={element.tutorialImgurl}
        height={100}
        width={500}
        />
        <h1>Tutorial Name : {element.tutorialTitle}</h1>
        <h1>Tutorial Description : {element.tutorialImgurl}</h1>
        </div>
    })}
  </div>
)
}

export default MainBody