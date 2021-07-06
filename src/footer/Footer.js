import s from './Footer.module.css';
import {Social} from "./social/Social";


export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <h2>Igor Svyrydovskyi</h2>
                <Social/>
                <p>© 2021 beingeorge, All Rights Reserved.</p>
            </div>
        </div>);

}