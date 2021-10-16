import s from './InputComponents.module.css';


export function InputComponents(props) {
   const inputForm = ((props.type === 'name') || (props.type === 'email'))
   const textareaForm  = (props.type === 'textarea')
    return (
        <div className={s.inputBlock}>
            {
                inputForm &&
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={s.input}
                    // autoFocus
                />
            }
            {
                textareaForm &&
                <textarea type={props.type}
                          name={props.name}
                          placeholder={props.placeholder}
                          className={`${s.input} ${s.textarea}`}
                />
            }
        </div>
    );
}