import s from './InputComponents.module.css';


export function InputComponents(props) {
    return (
        <div className={s.inputBlock}>
            <form action="#"></form>
            <input
                type={props.type}
                name={props.name}
                placeholder = {props.placeholder}
                className={s.input}
                autoFocus
            />

        </div>
    );

}