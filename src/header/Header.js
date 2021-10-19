import s from './Header.module.scss';
import {Nav} from "../nav/Nav";


export function Header() {
    return (
        <div className={s.header} id = {'id_main'}>
            <Nav/>
        </div>);

}