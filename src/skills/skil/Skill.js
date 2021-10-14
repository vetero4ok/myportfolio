import s from './Skill.module.css';


export function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}> </div>
            <div>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    );

}