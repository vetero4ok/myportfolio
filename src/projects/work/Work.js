import s from './Work.module.css';
import {Button} from "../../common/Button/Button";
    export function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.image} style={{backgroundImage: `url(${props.img})`}}>
                <Button nameButton={props.nameButton}/>
            </div>
            {/*<div className={s.descriptionMenu}>*/}
            {/*    <h3 className={s.workTitle}>{props.title}</h3>*/}
            {/*    <p>{props.description}</p>*/}
            {/*</div>*/}

        </div>
    );

}