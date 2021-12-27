import React, {useContext} from 'react';
import { langContext } from '../contexts/LangContest';

export const Lang=()=>{
    
    const idioma = useContext(langContext);
    console.log(idioma);

        return(
            <div className="lang">
                    <select name="select-lang" onChange={() => idioma.changeLang()}>
                        <option selected>Español</option>
                        <option>English</option>
                    </select>
            </div>
        );
    
}