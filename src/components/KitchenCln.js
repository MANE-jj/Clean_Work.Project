import React, {useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import StarRatings from "react-star-ratings/build/star-ratings";
import Partners from "./Partners";
import Footer from "./Footer";
import CarFactory from "./CarFactory";
import {Link} from "react-router-dom";

function KitchenCln(props) {
    const [t,i18n] = useTranslation('global')
    const [kitchenImageChange,setKitchenImageChange] = useState(false)

    const handleKitchenImageChange=()=>{
        setKitchenImageChange(true)
    }
    const handleKitchenSameImage=()=>{
        setKitchenImageChange(!setKitchenImageChange)
    }

    return (
        <div>
            <Header/>
            <section className={"aboutSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>{t("kitchenCleaning.kitchenClnTitle")}</h1>
                </div>
            </section>

            <section className={"officeCleaningInfo"}>
                <div className={kitchenImageChange? "kitchenClnImg11":"kitchenClnImg22"}
                     onMouseOver={handleKitchenImageChange}
                     onMouseOut={handleKitchenSameImage}
                >
                    <div className={"officePriceHour1"}>
                        <div className={"iconPrice"}>
                            <i className="fa fa-money" aria-hidden="true"></i>
                            <p>{t("offers.kitchenClnService.kitchenCleaningPrice")}</p>
                        </div>
                        <div className={"iconPrice"}>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            <p>{t("offers.kitchenClnService.kitchenCleaningHour")}</p>
                        </div>
                    </div>
                </div>
                <div className={'infoOffice'}>
                    <h1 className={'titleOffice'}>{t("kitchenCleaning.kitchenClnTitle")}</h1>
                    <p className={'officeInfoTexts'}>{t("kitchenCleaning.kitchenClnInfo.text1")}</p>
                    <h1>{t("kitchenCleaning.kitchenClnInfo.title1")}</h1>
                    <p className={'officeInfoTexts'}>{t("kitchenCleaning.kitchenClnInfo.text2")}</p>
                    <h1>{t("kitchenCleaning.kitchenClnInfo.title2")}</h1>
                    <p className={'officeInfoTexts'}>{t("kitchenCleaning.kitchenClnInfo.text3")}</p>
                    <Link to={'/officeCleaningRegister'}>
                        <button className={'officeCleaningBtn'}>{t("officeCleaning.officeClnInfo.button")}</button>
                    </Link>
                </div>
            </section>

            <section className={'photoGallery'}>
                <h1 className={'photoTitle'}>{t("photoGallery.title")}</h1>
                <div className={"photosKitchen"}>
                    <div className={'photoKitchen1'}></div>
                    <div className={'photoKitchen2'}></div>
                    <div className={'photoKitchen3'}></div>
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

export default KitchenCln;