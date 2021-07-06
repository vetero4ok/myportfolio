import s from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {InputComponents} from "./InputComponents/InputComponents";


export function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div className={s.submitForm}>
                    <InputComponents type={'name'} name={'User name'} placeholder={'User name'}/>
                    <InputComponents type={'email'} name={'email'} placeholder={'E-mail'}/>

                    <textarea name={"description"} rows={"7"} placeholder={'Your message'}></textarea>

                    <div>
                        <button>send message</button>
                    </div>

                </div>
            </div>
        </div>
    );

}