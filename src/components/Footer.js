import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
    const [t,i18n] = useTranslation('global')
    const handleChangeLang = (lang)=>{
        i18n.changeLanguage(lang)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <footer>
            <div className={'logoLinks'}>
                <div className={'logo'}>
                    <div className={'logoImg'}></div>
                </div>
                <div className={'links'}>

                    <NavLink to={'/aboutus'} className={'navItemFooter'}>{t('menu.about')}</NavLink>
                    <NavLink to={'/contact'} className={'navItemFooter'}>{t('menu.contact')}</NavLink>
                    {/*<NavLink to={'/getstarted'} className={'navItemButtonFooter'}>{t('menu.getStarted')}</NavLink>*/}
                    <select id="languageSelector"
                            className={'selectLang'}
                            onChange={(event) => handleChangeLang(event.target.value)}>
                        <option value="en">EN</option>
                        <option value="arm">ARM</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </div>
            <div className={"footerInfo"}>
                <div className={"services"}>
                    <h2 className={"footerInfoTitles"}>{t("footer.services.ourServices")}</h2>
                    <div className={"footerServices"}>
                        <ScrollToTop smooth />
                        <Link to={'/kitchenCleaning'} className={'houseCln'}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <p className={"footerServiceName"}>{t('footer.services.house')}</p>
                        </Link>
                        <Link to={'/officeCleaning'} className={'officeCln'}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <p className={"footerServiceName"}>{t('footer.services.officeCln')}</p>
                        </Link>
                        <Link to={'/carWashing'} className={'carWash'}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <p className={"footerServiceName"}>{t('footer.services.carWash')}</p>
                        </Link>
                        <Link to={'/factoryCleaning'} className={'factory'}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <p className={"footerServiceName"}>{t('footer.services.factory')}</p>
                        </Link>
                    </div>
                </div>
                <div className={"office"}>
                    <h2 className={"footerInfoTitles"}>{t("footer.office.officeTitle")}</h2>
                    <div className={"officeInfo"}>
                        <div className={"location"}>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <p className={"locationMap"}>{t("footer.office.location")}</p>
                        </div>
                        <div className={"location"}>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <p className={"locationMap"}>{t("footer.office.phone")}</p>
                        </div>
                        <div className={"location"}>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <p className={"locationMap"}>{t("footer.office.mail")}</p>
                        </div>
                        <div className={"socialMedias"}>
                            <div className={"twitter"}>
                                <i className="fa fa-twitter" aria-hidden="true" id={'twitterIcon'}></i>
                            </div>
                            <div className={"twitter"}>
                                <i className="fa fa-facebook" aria-hidden="true" id={'facebookIcon'}></i>
                            </div>
                            <div className={"twitter"}>
                                <i className="fa fa-instagram" aria-hidden="true" id={"instagramIcon"}></i>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"serviceHours"}>
                    <h2 className={"footerInfoTitles"}>{t("footer.hours.serviceHours")}</h2>
                    <div className={"hoursInfo"}>
                        <h3>{t("header.weekDays")}</h3>
                        <p>{t('header.hours')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;