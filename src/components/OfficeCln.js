import React, {useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import StarRatings from "react-star-ratings/build/star-ratings";
import Partners from "./Partners";
import Footer from "./Footer";
import CarFactory from "./CarFactory";
import {Link} from "react-router-dom";

function OfficeCln(props) {
    const [t,i18n] = useTranslation('global')

    const [officeImageChange,setOfficeImageChange] = useState(false)

    const handleOfficeImageChange=()=>{
        setOfficeImageChange(true)
    }
    const handleOfficeSameImage=()=>{
        setOfficeImageChange(!setOfficeImageChange)
    }
    return (
        <div>
            <Header/>
            <section className={"officeClnSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>{t("officeCleaning.officeClnTitle")}</h1>
                </div>
            </section>

            <section className={"officeCleaningInfo"}>
                <div className={officeImageChange? "officeClnImg11":"officeClnImg22"}
                     onMouseOver={handleOfficeImageChange}
                     onMouseOut={handleOfficeSameImage}
                >
                    <div className={"officePriceHour1"}>
                        <div className={"iconPrice"}>
                            <i className="fa fa-money" aria-hidden="true"></i>
                            <p>{t("offers.officeClnService.officeCleaningPrice")}</p>
                        </div>
                        <div className={"iconPrice"}>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            <p>{t("offers.officeClnService.officeCleaningHour")}</p>
                        </div>
                    </div>
                </div>
                <div className={'infoOffice'}>
                    <h1 className={'titleOffice'}>{t("officeCleaning.officeClnTitle")}</h1>
                    <p className={'officeInfoTexts'}>{t("officeCleaning.officeClnInfo.text1")}</p>
                    <h1>{t("officeCleaning.officeClnInfo.title1")}</h1>
                    <p className={'officeInfoTexts'}>{t("officeCleaning.officeClnInfo.text2")}</p>
                    <h1>{t("officeCleaning.officeClnInfo.title2")}</h1>
                    <p className={'officeInfoTexts'}>{t("officeCleaning.officeClnInfo.text3")}</p>
                    <Link to={'/officeCleaningRegister'}>
                        <button className={'officeCleaningBtn'}>{t("officeCleaning.officeClnInfo.button")}</button>
                    </Link>
                </div>
            </section>

            <section className={'photoGallery'}>
                <h1 className={'photoTitle'}>{t("photoGallery.title")}</h1>
                <div className={"photosOffice"}>
                    <div className={'photosOffice1'}></div>
                    <div className={'photosOffice2'}></div>
                    <div className={'photosOffice3'}></div>
                </div>
            </section>
            <section className={'relatedServices'}>
                <h1 className={'relatedServicesTitle'}>{t("relatedServices.title")}</h1>
                <CarFactory/>
            </section>
            <Partners/>
            <Footer/>

        </div>
    );
}

export default OfficeCln;