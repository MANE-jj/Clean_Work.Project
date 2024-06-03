import React, {  useState } from 'react';
import Links from "./Links";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavBar(props) {
    const [t, i18n] = useTranslation('global');
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    const handleChangeLang = (lang)=>{
        i18n.changeLanguage(lang)
    }

    return (
        <div>
            {menuOpen ? (
                <nav >
                    <Link className={'logoName'} to={'/'}>
                        <div className={'logo'}>
                            <div className={'logoImg'}></div>
                        </div>
                        <h1 className={'companyName'}>{t('menu.logoName')}</h1>
                    </Link>
                    <Links />
                    <button onClick={toggleMenu} className={'mobileIcons'}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </nav>
            ) :
                <nav className="navbarOpen">
                    <div className={'logoToggle'}>
                        <Link className={'logoName'} to={'/'}>
                            <div className={'logo'}>
                                <div className={'logoImg'}></div>
                            </div>
                            <h1 className={'companyName'}>{t('menu.logoName')}</h1>
                        </Link>
                        <Links />
                        <button onClick={toggleMenu} className={'mobileIcons'}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div className={'navItemsMobile'}>
                        <span className={'linksInMobile'}>
                            <Link to={'/'} className={'linksColor'}>{t('menu.home')}</Link>
                        </span>
                        <span className={'linksInMobile'}>
                            <Link to={'/aboutus'} className={'linksColor'}>{t('menu.about')}</Link>
                        </span>
                        <span className={'linksInMobile'}>
                            <Link to={'/contact'} className={'linksColor'}>{t('menu.contact')}</Link>
                        </span>
                        <span className={'linksInMobile'}>
                            <select id="languageSelector"
                                    onChange={(event) => handleChangeLang(event.target.value)}
                                    className={'selectLang'}
                            >
                                <option value="en">EN</option>
                                <option value="arm">ARM</option>
                                <option value="ru">RU</option>
                            </select>
                        </span>
                    </div>

                </nav>

            }
        </div>
    );
}

export default NavBar;
