import { useEffect } from 'react';
import './LanguageSelector.css';



const languages = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' }
]

export default function LanguageSelector({ lang, handleLanguageChange }) {

   

    useEffect(() => {

    },[])


    function onLanguageChange(changedValue) {
        handleLanguageChange(changedValue.target.value);
    }

    return (
        <div className="language-selector">
            <label className='form-field__label sr-only' htmlFor="languageSelector" >Language</label>
            <select className='form-field__input' name="languageSelector" value={lang} id="languageSelector" onChange={onLanguageChange}>
                {
                    languages.map((transactionType) => {
                        return (<option key={transactionType.value} value={transactionType.value}>{transactionType.label}</option>)
                    })
                }

            </select>
        </div>
    )
}