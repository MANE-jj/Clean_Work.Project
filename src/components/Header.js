import React from 'react';
import {useTranslation} from "react-i18next";

function Header(props) {
    const [t,i18n] = useTranslation('global')

    return (
        <header>
            <div className={'nameHour'}>
                <div className={'serviceName'}>
                    <i className="fa fa-home" aria-hidden="true" id={'icon'}></i>
                    <p className={'name'}>{t('header.companyName')}</p>
                </div>
                <div className={'hours'}>
                    <i className="fa fa-clock-o" aria-hidden="true" id={'icon'}></i>
                    <p className={'days'}>{t('header.weekDays')}</p>
                    <p className={'hoursHours'}>{t('header.hours')}</p>
                </div>
            </div>

            <div className={'phoneNumber'}>
                <i className="fa fa-whatsapp" aria-hidden="true" id={'icon'}></i>
                <p className={'phNumber'}>{t('header.phoneNumber')}</p>
            </div>


        </header>
    );
}

export default Header;