import s from './Footer.module.scss';
import {Social} from "./social/Social";


export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <Social/>
                <h2>Igor Svyrydovskyi</h2>
                <p>© 2021 All Rights Reserved.</p>
            </div>
        </div>);

}