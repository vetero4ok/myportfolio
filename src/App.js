import s from './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./projects/MyProjects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className={s.App}>
            <Header />
            <Main />
            <Skills />
            <MyProjects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;