import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skil/Skill";
import {TitleH2Component} from "../common/Components/TitleH2Component/TitleH2Component";

export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <TitleH2Component title = {'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, sed do eiusmod tempor'}
                    />
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor, sed do eiusmod tempor'}
                    />
                    <Skill title={'React'}
                           description={' consectetur adipisicing elit, s'}
                    />
                    <Skill title={'Redux'}
                           description={' consectetur adicxvxc fd pisicing elit, s'}
                    />
                    <Skill title={'HTML'}
                           description={' conse  ctetur as  dipisicing elit, s'}
                    />
                </div>
            </div>
        </div>
    );

}