import s from './TitleH2Component.module.css';
export const  TitleH2Component = (props) => {
    return <>
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    </>
 }