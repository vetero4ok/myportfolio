import s from './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./projects/MyProjects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className={s.App}>
                <Header/>
                <Main/>
                <Skills/>
                <MyProjects/>
                <Contacts/>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;