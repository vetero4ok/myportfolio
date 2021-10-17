import s from './TitleH4Component.module.css';
export const  TitleH4Component = (props) => {
    return <>
        <div className={s.title}>
            <h4>{props.title}</h4>
        </div>
    </>
 }