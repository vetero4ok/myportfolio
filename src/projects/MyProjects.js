import s from './MyProjects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {TitleH2Component} from "../common/Components/TitleH2Component/TitleH2Component";

export function MyProjects() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.workContainer}`}>
                <TitleH2Component title = {'My projects'}/>
                <div className={s.works}>
                    <Work title = {'First works'}
                          nameButton = {'Look'}
                          img = {'#'}
                          description = {'Lorem ipsum dolor sit amet, consectetur adipisici aliqua Ut enim.'} />
                    <Work title = {'Second works'}
                          nameButton = {'Look'}
                          img = {'#'}
                          description = {'Lorem ipsu, consectetur adipisici aliqua Ut enim.'} />
                    <Work title = {'Second works'}
                          nameButton = {'Look'}
                          img = {'#'}
                          description = {'Lorem ipsu, consectetur adipisici aliqua Ut enim.'} />
                    <Work title = {'Second works'}
                          nameButton = {'Look'}
                          img = {'#'}
                          description = {'Lorem ipsu, consectetur adipisici aliqua Ut enim.'} />

                </div>
            </div>
        </div>
    );

}