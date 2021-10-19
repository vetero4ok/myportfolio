import s from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {InputComponents} from "./InputComponents/InputComponents";
import {Button} from "../common/Button/Button";
import {TitleH2Component} from "../common/Components/TitleH2Component/TitleH2Component";


export function Contacts() {

    return (
        <div className={s.contactsBlock} id={'id_contact'}>
            <div className={`${s.contactsContainer} ${styleContainer.container} `}>
                <TitleH2Component title = {'Contacts'}/>
                <form className={s.submitForm}>
                    <InputComponents type={'name'} name={'User name'} placeholder={'User name'}/>
                    <InputComponents type={'email'} name={'email'} placeholder={'E-mail'}/>
                    <InputComponents type={'textarea'} name={'description'}  placeholder={'Your message'}/>
                    <Button
                        nameButton={'Send'}
                    />
                </form>
            </div>
        </div>
    );

}