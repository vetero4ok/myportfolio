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
                          path={'https://vetero4ok.github.io/Todolist/#/'}
                          nameButton = {'See more'}
                          img = {todo}
                          description = {''} />
                    <Work title = {'Social Network'}
                          path={'https://vetero4ok.github.io/mynetwork/'}
                          nameButton = {'See more'}
                          img = {social}
                          description = {''} />
                    <Work title = {'Cards training game'}
                          path={'https://nick-gansta.github.io/Cards-front-1-0/#/login'}
                          nameButton = {'See more'}
                          img = {cards}
                          description = {''} />
                    <Work title = {'Counter'}
                          path={'https://vetero4ok.github.io/coutnter/'}
                          nameButton = {'See more'}
                          img = {counter}
                          description = {''} />

                </div>
            </div>
        </div>
    );

}