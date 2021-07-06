import s from './work.module.css';


export function Work() {
    return (
        <div className={s.work}>
            <div className={s.image}>
                <a href={'#'} alt = 'project' ></a>
            </div>
            <h4>Title project</h4>
            <div>description</div>
        </div>
    );

}