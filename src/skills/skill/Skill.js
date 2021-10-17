import s from './Skill.module.scss';


export function Skill(props) {
    return (
        <div className={s.skill}>
            <img src={props.img} alt={props.title} className={s.icon}/>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );

}