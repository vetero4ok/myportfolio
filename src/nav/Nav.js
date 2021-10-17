import s from './Nav.module.css';
import {TitleH4Component} from "../common/Components/TitleH4Component/TitleH4Component";


export function Nav() {
    return (
        <div className={s.nav}>
            <a href="">
                <TitleH4Component title = {'Main'}/>
            </a>
            <a href="">
                <TitleH4Component title = {'Skills'}/>
            </a>
            <a href="">
                <TitleH4Component title = {'Projects'}/>
            </a>
            <a href="">
                <TitleH4Component title = {'Contact'}/>
            </a>

        </div>);

}