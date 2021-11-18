import React,{useState} from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { IMAGES_DOG } from '../../model/ImageModels';

const DogIndex = () => {
    const [dogData,setdogData] = useState( IMAGES_DOG )
    return (
        <div>
          {dogData.length !==0 ?
          <div  style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
            gridTemplateColumns:"repeat(3,20rem)"
          }}>
            
            {dogData.map((res,i)=>{
              return  <Card
    hoverable
    style={{ width: 240 }}
    key={i}
    cover={<img alt="example" 
    src= {res.imagePath} />}
  >
    <Meta title={res.name} description="www.instagram.com" />
  </Card>
            })}
          </div> :<div></div>}
         
        </div>
    )
}

export default DogIndex
