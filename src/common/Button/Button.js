import s from './Button.module.scss'

export function Button(props) {
   const onClickHandler = () => {}
    return (
        <div className={s.buttonContainer}>
            <div className={s.button} onClick={onClickHandler}>
                {props.nameButton}
            </div>
        </div>
    );

}