import React, {useState, useEffect} from 'react';
import './Terrain.css';
import Wood  from './Terrains/0.png'
import Wool  from './Terrains/1.png'
import Wheat from './Terrains/2.png'
import Clay  from './Terrains/3.png'
import Stone from './Terrains/4.png'
const Terrain = props => {
    const [image, setImage] = useState()

    useEffect(()=>{
        switch (props.terrain){
            case 0:
                setImage(Wood)
                break
            case 1:
                setImage(Wool)
                break
            case 2:
                setImage(Wheat)
                break
            case 3:
                setImage(Clay)
                break
            case 4:
                setImage(Stone)
                break
            case 5:
                setImage(Clay)
                break
            default:
                setImage(Clay)
                break
        }
    }, [props.terrain])

    return(
        <div className={`p${props.class}`}>
            <div className={'terrain'}>
                <img src={image} alt={props.terrain}/>
                <div>{props.number}</div>
            </div>

        </div>
    )
}
//
export default Terrain;