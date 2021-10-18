import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`  ${styleContainer.container} `}>
                <div className={`${s.mainContainer}`}>
                    <div className={s.photo}> </div>
                    <div className={s.text}>
                        <h3> I'm Igor Svyrydovskyi</h3>
                        <h2>Front - End Developer </h2>
                        <div className={s.info}>
                            <p>
                                Hello, I'm a person who really wants to became a good programmer. I have an experience
                                in
                                creating SPA with React / Redux / TypeScript. Now I'm improving my skills in this direction
                                and
                                expanding them with new technologies. I'm in process of improving my level of Node.js,
                                because
                                my purpose is to become a advanced Full-Stack Developer. I spend my free time on
                                Codewars or
                                with technical documentation. I'll do all my best to achieve my goals. I'm open for your
                                suggestions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

}