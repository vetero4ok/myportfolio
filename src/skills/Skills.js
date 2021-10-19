import s from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {TitleH2Component} from "../common/Components/TitleH2Component/TitleH2Component";
import js from '../common/img/skills-logo/js.png'
import html5 from '../common/img/skills-logo/html5.png'
import css from '../common/img/skills-logo/css.png'
import react from '../common/img/skills-logo/react.png'
import redux from '../common/img/skills-logo/redux.png'
import jest from '../common/img/skills-logo/jest.png'
import storybook from '../common/img/skills-logo/storybook_logo.png'
import restApi from '../common/img/skills-logo/rest.png'
import node from '../common/img/skills-logo/node.png'
import TS from '../common/img/skills-logo/ts.png'


export function Skills() {
    return (
        <div className={s.skillsBlock} id={'id_skills'}>
            <div className={`${styleContainer.container} ${s.skillsContainer} `}>
                <TitleH2Component title={'Skills'}/>
                <div className={s.skills}>
                    <Skill
                        img={html5}
                        title={'HTML'}
                        description={'Lorem ipsum dolor sit amet, sed do eiusmod tempor'}
                    />
                    <Skill
                        img={css}
                        title={'CSS'}
                        description={' consectetur adipisicing elit, s'}
                    />
                    <Skill
                        img={js}
                        title={'JS'}
                        description={'Lorem ipsum dolor, sed do eiusmod tempor'}
                    />
                    <Skill
                        img={TS}
                        title={'TypeScript'}
                        description={'Lorem ipsum dolor, sed do eiusmod tempor'}
                    />
                    <Skill
                           img={react}
                           title={'React'}
                           description={' consectetur adipisicing elit, s'}
                    />
                    <Skill
                           img={redux}
                           title={'Redux/ReduxToolkit'}
                           description={' consectetur adicxvxc fd pisicing elit'}
                    />
                    <Skill
                           img={node}
                           title={'Node JS'}
                           description={' consectetur adicxvxc fd pisicing elit'}
                    />
                    <Skill
                           img={jest}
                           title={'Unit/Jest/Testing'}
                           description={' conse  ctetur as  dipisicing elit'}
                    />
                    <Skill
                        img={storybook}
                        title={'Story Book'}
                        description={' conse  ctetur as  dipisicing elit'}
                    />
                    <Skill
                        img={restApi}
                        title={'Rest Api/Axios'}
                        description={' conse  ctetur as  dipisicing elit'}
                    />

                </div>
            </div>
        </div>
    );

}