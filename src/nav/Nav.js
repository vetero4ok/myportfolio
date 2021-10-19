import s from './Nav.module.css';
import {TitleH4Component} from "../common/Components/TitleH4Component/TitleH4Component";


export function Nav() {
    return (
        <div className={s.nav}>
            <a href={'#id_main'}>
                <TitleH4Component title = {'Main'}/>
            </a>
            <a href={'#id_skills'}>
                <TitleH4Component title = {'Skills'}/>
            </a>
            <a href={'#id_projects'}>
                <TitleH4Component title = {'Projects'}/>
            </a>
            <a href={'#id_contact'}>
                <TitleH4Component title = {'Contact'}/>
            </a>

        </div>);

}