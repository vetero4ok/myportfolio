import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>Igor Svyrydovskyi</h1>
                    <p>Frontend Developer</p>

                </div>
                <div className={s.photo}></div>
            </div>
        </div>);

}