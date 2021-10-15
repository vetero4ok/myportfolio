import s from './Skill.module.css';


export function Skill(props) {
    return (
        <div className={s.skill}>
            <img src={props.img} alt={props.title} className={s.icon}/>
            <div>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    );

}