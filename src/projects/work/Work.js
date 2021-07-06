import s from './work.module.css';


export function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.image}>
                <a href={props.img} alt = {props.title} ></a>
            </div>
            <h4>{props.title}</h4>
            <div>{props.description}</div>
        </div>
    );

}