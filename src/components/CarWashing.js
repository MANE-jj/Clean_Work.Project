import React, {useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import OfficeKitchen from "./OfficeKitchen";
import Partners from "./Partners";
import Footer from "./Footer";
import {Link} from "react-router-dom";

function CarWashing(props) {
    const [t,i18n] = useTranslation('global')
    const [carImageChange,setCarImageChange] = useState(false)

    const handleCarImageChange=()=>{
        setCarImageChange(true)
    }
    const handleCarSameImage=()=>{
        setCarImageChange(!setCarImageChange)
    }

    return (
        <div>
            <Header/>
            <section className={"carWashSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>{t("carWashing.carWashTitle")}</h1>
                </div>
            </section>

            <section className={"officeCleaningInfo"}>
                    <div className={carImageChange? "carWashImg11":"carWashImg22"}
                         onMouseOver={handleCarImageChange}
                         onMouseOut={handleCarSameImage}
                    >
                        <div className={"officePriceHour1"}>
                            <div className={"iconPrice"}>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                <p>{t("offers.carWashingService.carWashPrice")}</p>
                            </div>
                            <div className={"iconPrice"}>
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                <p>{t("offers.carWashingService.carWashHour")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={'infoOffice'}>
                        <h1 className={'titleOffice'}>{t("carWashing.carWashTitle")}</h1>
                        <p className={'officeInfoTexts'}>{t("carWashing.carWashInfo.text1")}</p>
                        <h1>{t("carWashing.carWashInfo.title1")}</h1>
                        <p className={'officeInfoTexts'}>{t("carWashing.carWashInfo.text2")}</p>
                        <h1>{t("carWashing.carWashInfo.title2")}</h1>
                        <p className={'officeInfoTexts'}>{t("carWashing.carWashInfo.text3")}</p>
                        <Link to={'/officeCleaningRegister'}>
                            <button className={'officeCleaningBtn'}>{t("officeCleaning.officeClnInfo.button")}</button>
                        </Link>
                    </div>
            </section>

            <section className={'photoGallery'}>
                <h1 className={'photoTitle'}>{t("photoGallery.title")}</h1>
                <div className={"photosCarWash"}>
                    <div className={'photosCarWash1'}></div>
                    <div className={'photosCarWash2'}></div>
                    <div className={'photosCarWash3'}></div>
                </div>
            </section>
            <section className={'relatedServices'}>
                <h1 className={'relatedServicesTitle'}>{t("relatedServices.title")}</h1>
                <OfficeKitchen/>
            </section>
            <Partners/>
            <Footer/>
        </div>
    );
}

export default CarWashing;