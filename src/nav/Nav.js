import s from './Nav.module.scss';
import {TitleH4Component} from "../common/Components/TitleH4Component/TitleH4Component";


export function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.title} href={'#id_main'}>
                <TitleH4Component title = {'Main'}/>
            </a>
            <a className={s.title} href={'#id_skills'}>
                <TitleH4Component title = {'Skills'}/>
            </a>
            <a className={s.title} href={'#id_projects'}>
                <TitleH4Component title = {'Projects'}/>
            </a>
            <a className={s.title} href={'#id_contact'}>
                <TitleH4Component title = {'Contact'}/>
            </a>

        </div>);

}