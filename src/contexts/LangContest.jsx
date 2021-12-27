// https://www.youtube.com/watch?v=OueflnXmo1U
import React, {useState} from "react";
import es from '../lang/es.json';
import en from '../lang/en.json';
import {IntlProvider} from 'react-intl'

export const langContext = React.createContext();

export var langNow = '';

export const LangProvider = ({children}) => {

    const [mensajes, establecerMensajes] = useState(es);
    const [locale, establecerLocale] = useState('es-ES');

    const establecerLenguaje = (lenguaje) => {
        console.log('Cambiamos en mensaje a', lenguaje);
        switch(lenguaje){
            case 'es-ES':
                establecerMensajes(es);
                establecerLocale('es-ES');
                langNow='es-ES';
                break;
            case 'en-UK':
                establecerMensajes(en);
                establecerLocale('en-UK');
                langNow='en-UK';
                break;
            default:
                establecerMensajes(es);
                establecerLocale('es-ES');
                langNow='es-ES';

        }
        
    }

    const changeLang = function (){
        if(locale==='es-ES'){
            establecerLenguaje('en-UK');
        }
        if(locale==="en-UK"){
            establecerLenguaje('es-ES');
        }
    }

    const checkLang = function(){
        if(locale==='es-ES'){
            establecerLenguaje('es-ES');
        }
        if(locale==="en-UK"){
            establecerLenguaje('en-UK');
        }
    }

    return(
        <langContext.Provider value={{establecerLenguaje: establecerLenguaje, changeLang: changeLang, checkLang: checkLang}}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
