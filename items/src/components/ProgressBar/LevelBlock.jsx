import { ProgressBar } from "./ProgressBar";
import './LevelBlock.scss';


const LevelBlock = ({progress}) =>{
    return(
        <div className="userprogress">
            <a href="#" className="userlink w-inline-block">
                <img src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ad849bf1d931d270a26167_crown%201.svg" 
                loading="lazy" 
                width="50" 
                alt="" 
                className="crown"/>
                <ProgressBar progress={progress}/>
            </a>
    
        </div>
    );
}

export default LevelBlock