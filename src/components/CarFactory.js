import React, {useState} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function CarFactory(props) {
    const [t,i18n] = useTranslation('global')

    const [carImageChange,setCarImageChange] = useState(false)
    const [factoryImageChange,setFactoryImageChange] = useState(false)
    const handleFactoryImageChange=()=>{
        setFactoryImageChange(true)
    }
    const handleFactorySameImage=()=>{
        setFactoryImageChange(!setFactoryImageChange)
    }
    const handleCarImageChange=()=>{
        setCarImageChange(true)
    }
    const handleCarSameImage=()=>{
        setCarImageChange(!setCarImageChange)
    }
    return (
            <section className={'offers34'}>
                {/*<h1 className={'photoTitle'}>{t("relatedServices.title")}</h1>*/}

                    <div className={'service34'}>
                        <div className={carImageChange? "carWashImg1":"carWashImg2"}
                             onMouseOver={handleCarImageChange}
                             onMouseOut={handleCarSameImage}
                        >
                            <div className={"officePriceHour"}>
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
                        <div className={"officeClnInfo"}>
                            <Link to={'/carWashing'} className={'officeCleaning'}>
                                {t("offers.carWashingService.carWashing")}
                            </Link>
                            <p className={'officeCleaningText'}>{t("offers.carWashingService.carWashText")}</p>
                            <div className={'starsBtn'}>
                                <div className={'stars'}>
                                    <StarRatings numberOfStars={5}
                                                 rating={5}
                                                 starDimension="20px"
                                                 starSpacing="1px"
                                                 starRatedColor="#4F83D1"
                                    />
                                </div>
                                <Link to={'/carWashing'}>
                                    <button className={"officeClnBtn"}>{t("offers.carWashingService.carWashBtn")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={'service34'}>
                        <div className={factoryImageChange? "factoryClnImg1":"factoryClnImg2"}
                             onMouseOver={handleFactoryImageChange}
                             onMouseOut={handleFactorySameImage}
                        >
                            <div className={"officePriceHour"}>
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
                        <div className={"officeClnInfo"}>
                            <Link to={'/factoryCleaning'} className={'officeCleaning'}>
                                {t("offers.factoryClnService.factoryCleaning")}
                            </Link>
                            <p className={'officeCleaningText'}>{t("offers.factoryClnService.factoryClnText")}</p>
                            <div className={'starsBtn'}>
                                <div className={'stars'}>
                                    <StarRatings numberOfStars={5}
                                                 rating={4}
                                                 starDimension="20px"
                                                 starSpacing="1px"
                                                 starRatedColor="#4F83D1"
                                    />
                                </div>
                                <Link to={'/factoryCleaning'}>
                                    <button className={"officeClnBtn"}>{t("offers.factoryClnService.factoryClnBtn")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </section>
    );
}

export default CarFactory;