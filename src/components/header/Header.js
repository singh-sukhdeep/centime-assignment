import './Header.css';
import logo from '../../logo.svg';
import LanguageSelector from '../language-selector/LanguageSelector';
import { selectAppLanguage, changeAppLanguage } from '../../redux/app-slice';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';


export default function Header() {

    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    const language = useSelector(selectAppLanguage);


    useEffect(()=>{
        i18n.changeLanguage(language);
    },[language]);

    function handleLanguageChange(lang) {
        i18n.changeLanguage(lang);
        dispatch(changeAppLanguage(lang))
    }

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <LanguageSelector lang={language} handleLanguageChange={handleLanguageChange} />
        </div>
    )
}