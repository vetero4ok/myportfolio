import s from './MyProjects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";

export function MyProjects() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.workContainer}`}>
                <h2>My projects</h2>
                <div className={s.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );

}