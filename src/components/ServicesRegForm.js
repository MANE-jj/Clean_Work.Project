import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegForm from "./RegForm";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function ServicesRegForm(props) {
    const [t,i18n] = useTranslation('global')
    const [date, setDate] = useState(new Date());


    return (
        <div>
            <Header/>
            <section className={"officeClnSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>Registration</h1>
                </div>
            </section>
            <section className={'regForm'}>
                <h1 className={'regFormTitle'}>{t('contact.inputsField.regTitle')}</h1>
                <RegForm/>
            </section>

            {/*<section className={'calendar'}>*/}
            {/*    <h1>Our free days</h1>*/}
            {/*    <div className={'freeDays'}>*/}
            {/*        <Calendar*/}
            {/*            value={valuedate}*/}
            {/*            // tileContent={({ date }) =>*/}
            {/*            //     savedDates.find((d) => d === date.toDateString()) ? <p>Checked</p> : null*/}
            {/*            // }*/}
            {/*            // onChange={setDate}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}
            <Footer/>
        </div>
    );
}

export default ServicesRegForm;