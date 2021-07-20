import s from './Button.module.css'

export function Button(props) {
    return (
        <div className={s.buttonContainer}>
            <div className={s.button}>
                {props.nameButton}
            </div>
        </div>
    );

}