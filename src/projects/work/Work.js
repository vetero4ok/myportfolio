import s from './Work.module.css';
import {Button} from "../../common/Button/Button";


export function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.image}>
                <a href={props.img} alt = {props.title} >
                    <Button nameButton = {props.nameButton}/>
                </a>
            </div>
            <h4>{props.title}</h4>
            <div>{props.description}</div>
        </div>
    );

}