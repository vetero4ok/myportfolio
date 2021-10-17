import s from './Social.module.css';
import twitter from '../../common/img/logos/Twitter_logo.png'
import facebook from '../../common/img/logos/Facebook_logo.png'
import linkedin from '../../common/img/logos/Linkedin_logo.png'

export function Social() {
    return (
        <div className={s.social}>
            <a href="#"><img src={twitter} alt="twitter"/></a>
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="#"><img src={linkedin} alt="linkedin"/></a>
        </div>);

}