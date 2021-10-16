import s from './Work.module.css';
import {Button} from "../../common/Button/Button";

export function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.image} style={{backgroundImage: `url(${props.img})`}}>
                <a className={s.viewBtn}>
                    <Button nameButton={props.nameButton} className={s.viewBtn}/>
                </a>
            </div>
            {/*<div className={s.descriptionMenu}>*/}
            {/*    <h3 className={s.workTitle}>{props.title}</h3>*/}
            {/*    <p>{props.description}</p>*/}
            {/*</div>*/}
        </div>
    );

}