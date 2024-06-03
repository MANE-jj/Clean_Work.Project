import React, {useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import Partners from "./Partners";
import Footer from "./Footer";
import {Link} from "react-router-dom";


function AboutUs(props) {
    const [t,i18n] = useTranslation('global')

    return (
        <div>
            <Header/>
            <section className={"aboutSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>{t("aboutUs.aboutUsTitle")}</h1>
                </div>
            </section>
            <section className={"aboutSec2"}>
                <img src={'../imgs/team/cleaning-concept-with-man-showing-business-card.jpg'} className={"aboutUsImg"}/>
                <div className={'aboutUsInfo'}>
                    <h1 className={'aboutSec2Titles'}>{t("aboutUs.aboutUsSec2.title1")}
                        <br/>
                        {t("aboutUs.aboutUsSec2.title2")}
                    </h1>
                    <p className={'aboutSec2Texts'}>
                        {t("aboutUs.aboutUsSec2.text1")}
                        <br/>
                        <br/>
                        {t("aboutUs.aboutUsSec2.text2")}
                    </p>
                    <Link to={'/contact'}>
                        <button className={'aboutSec2Btn'}>{t('aboutUs.aboutUsSec2.button')}</button>
                    </Link>
                </div>
            </section>
            <section className={'teamMembers'}>
                <h1 className={'meetPeopleTitle'}>{t('aboutUs.teamMembers.title')}</h1>
                <div className={'infoAboutMembers'}>

                    <div className={'member1'}>
                        <img src={'imgs/team/young-cleaning-man-wearing-casual-clothes.jpg'} className={'member1Img'}/>
                        <div className={'square1'}></div>
                        <div className={'member1Info'}>
                            <h1>{t("aboutUs.teamMembers.member1.name1")}</h1>
                            <p className={'member1Text1'}>{t("aboutUs.teamMembers.member1.text1")}</p>
                            <hr/>
                            <div className={'iconNumberMember1'}>
                                <i className="fa fa-whatsapp" aria-hidden="true" id={'phoneIcon'}></i>
                                <p>{t("aboutUs.teamMembers.member1.phNumber1")}</p>
                            </div>
                        </div>
                    </div>

                    <div className={'member2'}>
                        <img src={'imgs/team/happy-young-woman-wiping-kitchen-counter-wearing-yellow-gloves.jpg'} className={'member1Img'}/>
                        <div className={'square2'}></div>
                        <div className={'member2Info'}>
                            <h1>{t("aboutUs.teamMembers.member2.name2")}</h1>
                            <p className={'member1Text1'}>{t("aboutUs.teamMembers.member2.text2")}</p>
                            <hr/>
                            <div className={'iconNumberMember1'}>
                                <i className="fa fa-whatsapp" aria-hidden="true" id={'phoneIcon'}></i>
                                <p>{t("aboutUs.teamMembers.member2.phNumber2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partners/>
            <Footer/>
        </div>
    );
}

export default AboutUs;




