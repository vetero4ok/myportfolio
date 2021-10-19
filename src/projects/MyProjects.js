import s from './MyProjects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {TitleH2Component} from "../common/Components/TitleH2Component/TitleH2Component";
import todo from '../common/img/works/todolist.jpg'
import counter from '../common/img/works/counter.jpg'
import social from '../common/img/works/social.jpg'
import cards from '../common/img/works/cards.jpg'
export function MyProjects() {
    return (
        <div className={s.worksBlock} id={'id_projects'}>
            <div className={`${styleContainer.container} ${s.workContainer}`}>
                <TitleH2Component title = {'My projects'}/>
                <div className={s.works}>
                    <Work title = {'Todo List'}
                          nameButton = {'Look'}
                          img = {todo}
                          description = {'Lorem ipsum dolor sit amet, '} />
                    <Work title = {'Social Network'}
                          nameButton = {'Look'}
                          img = {social}
                          description = {'Lorem ipsu, consectetur am.'} />
                    <Work title = {'Cards training game'}
                          nameButton = {'Look'}
                          img = {cards}
                          description = {'Lorem ipsu, consectetur adipim.'} />
                    <Work title = {'Counter'}
                          nameButton = {'Look'}
                          img = {counter}
                          description = {'Lorem ipsu, consectetur adipisici.'} />

                </div>
            </div>
        </div>
    );

}