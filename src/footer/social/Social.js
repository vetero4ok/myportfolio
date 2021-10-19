import s from './Social.module.css';
import telegram from '../../common/img/logos/telegram.png'
import linkedIn from '../../common/img/logos/link.png'
import codeWars from '../../common/img/logos/cw.png'
import GH from '../../common/img/logos/github.png'

export function Social() {
    return (
        <div className={s.social}>
            <a href={'https://t.me/IgorekSvyr'}><img src={telegram}/></a>
            <a href={'https://www.linkedin.com/in/igor-svyrydovskyi-7322b61a7/'}><img src={linkedIn}/></a>
            <a href={'https://www.codewars.com/users/vetero4ok'}><img src={codeWars}/></a>
            <a href={'https://github.com/vetero4ok'}><img src={GH}/></a>
        </div>);

}