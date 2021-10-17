import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import my from '../common/img/my.jpg'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} `}>
                <div className={s.photo}>
                    <img src={my} alt={''}/>
                </div>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <div className={s.titleName}>
                        <h4> I am Igor Svyrydovskyi</h4>
                    </div>
                    <h2>Front-end Developer</h2>
                </div>
            </div>
        </div>);

}