import React, {useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import OfficeKitchen from "./OfficeKitchen";
import Partners from "./Partners";
import Footer from "./Footer";
import {Link} from "react-router-dom";

function FactoryCln(props) {
    const [t,i18n] = useTranslation('global')
    const [factoryImageChange,setFactoryImageChange] = useState(false)
    const handleFactoryImageChange=()=>{
        setFactoryImageChange(true)
    }
    const handleFactorySameImage=()=>{
        setFactoryImageChange(!setFactoryImageChange)
    }
    return (
        <div>
            <Header/>
            <section className={"factoryClnSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>{t("factoryCleaning.factoryClnTitle")}</h1>
                </div>
            </section>

            <section className={"officeCleaningInfo"}>
                <div className={factoryImageChange? "factoryClnImg11":"factoryClnImg22"}
                     onMouseOver={handleFactoryImageChange}
                     onMouseOut={handleFactorySameImage}
                >
                    <div className={"officePriceHour1"}>
                        <div className={"iconPrice"}>
                            <i className="fa fa-money" aria-hidden="true"></i>
                            <p>{t("offers.factoryClnService.factoryClnPrice")}</p>
                        </div>
                        <div className={"iconPrice"}>
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            <p>{t("offers.factoryClnService.factoryClnHour")}</p>
                        </div>
                    </div>
                </div>
                <div className={'infoOffice'}>
                    <h1 className={'titleOffice'}>{t("factoryCleaning.factoryClnTitle")}</h1>
                    <p className={'officeInfoTexts'}>{t("factoryCleaning.factoryClnInfo.text1")}</p>
                    <h1>{t("factoryCleaning.factoryClnInfo.title1")}</h1>
                    <p className={'officeInfoTexts'}>{t("factoryCleaning.factoryClnInfo.text2")}</p>
                    <h1>{t("factoryCleaning.factoryClnInfo.title2")}</h1>
                    <p className={'officeInfoTexts'}>{t("factoryCleaning.factoryClnInfo.text3")}</p>
                    <Link to={'/officeCleaningRegister'}>
                        <button className={'officeCleaningBtn'}>{t("officeCleaning.officeClnInfo.button")}</button>
                    </Link>
                </div>
            </section>
            <section className={'photoGallery'}>
                <h1 className={'photoTitle'}>{t("photoGallery.title")}</h1>
                <div className={"photosFactoryCln"}>
                    <div className={'photosFactory1'}></div>
                    <div className={'photosFactory2'}></div>
                    <div className={'photosFactory3'}></div>
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

export default FactoryCln;