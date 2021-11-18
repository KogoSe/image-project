import React,{useState} from 'react'
import { Card } from 'antd';
import { IMAGES_CAT } from '../../model/ImageModels';
const { Meta } = Card;

const CatIndex = () => {
    const [catData,setcatData] = useState(IMAGES_CAT)
    return (
        <div>
            {catData.length !==0 ?
            <div style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3rem",
                gridTemplateColumns:"repeat(3,20rem)"}}>
                
                {catData.map((res,i)=>{
                    return <Card
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

export default CatIndex

