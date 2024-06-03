import React from 'react';
import { NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Links(props) {
    const [t,i18n] = useTranslation('global')

    const handleChangeLang = (lang)=>{
        i18n.changeLanguage(lang)
    }

    return (
        <div className={'navItems'}>
            <NavLink to={'/'}  className={'navItem'}>{t('menu.home')}</NavLink>
            <NavLink to={'/aboutus'} className={'navItem'}>{t('menu.about')}</NavLink>
            <NavLink to={'/contact'} className={'navItem'}>{t('menu.contact')}</NavLink>
            <select id="languageSelector" onChange={(event) => handleChangeLang(event.target.value)}
                    className={'selectLang'}
            >
                <option value="en">EN</option>
                <option value="arm">ARM</option>
                <option value="ru">RU</option>
            </select>
        </div>
    );
}

export default Links;