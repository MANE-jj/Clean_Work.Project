import React, {useState} from 'react';
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import {useTranslation} from "react-i18next";

function OfficeKitchen(props) {
    const [t,i18n] = useTranslation('global')

    const [officeImageChange,setOfficeImageChange] = useState(false)
    const [kitchenImageChange,setKitchenImageChange] = useState(false)
    const handleOfficeImageChange=()=>{
        setOfficeImageChange(true)
    }
    const handleOfficeSameImage=()=>{
        setOfficeImageChange(!setOfficeImageChange)
    }
    const handleKitchenImageChange=()=>{
        setKitchenImageChange(true)
    }
    const handleKitchenSameImage=()=>{
        setKitchenImageChange(!setKitchenImageChange)
    }
    return (
        <section className={'offers12'}>
            <div className={'service12'}>
                <div className={officeImageChange? "officeClnImg1":"officeClnImg2"}
                     onMouseOver={handleOfficeImageChange}
                     onMouseOut={handleOfficeSameImage}
                >
                    <div className={"officePriceHour"}>
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
                <div className={"officeClnInfo"}>
                    <Link className={"officeCleaning"} to={'/officeCleaning'} >
                        {t("offers.officeClnService.officeCleaning")}
                    </Link>
                    <p className={'officeCleaningText'}>{t("offers.officeClnService.officeCleaningText")}</p>
                    <div className={'starsBtn'}>
                        <div className={'stars'}>
                            <StarRatings numberOfStars={5}
                                         rating={3}
                                         starDimension="20px"
                                         starSpacing="1px"
                                         starRatedColor="#4F83D1"
                            />
                        </div>
                        <Link to={'/officeCleaning'}>
                            <button className={"officeClnBtn"}>{t("offers.officeClnService.officeClnBtn")}</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={'service12Kitchen'}>
                <div className={kitchenImageChange? "kitchenClnImg1":"kitchenClnImg2"}
                     onMouseOver={handleKitchenImageChange}
                     onMouseOut={handleKitchenSameImage}
                >
                    <div className={"officePriceHour"}>
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
                <div className={"officeClnInfo"}>
                    <Link to={'/kitchenCleaning'} className={'officeCleaning'}>
                        {t("offers.kitchenClnService.kitchenCleaning")}
                    </Link>
                    <p className={'officeCleaningText'}>{t("offers.kitchenClnService.kitchenCleaningText")}</p>
                    <div className={'starsBtn'}>
                        <div className={'stars'}>
                            <StarRatings numberOfStars={5}
                                         rating={4}
                                         starDimension="20px"
                                         starSpacing="1px"
                                         starRatedColor="#4F83D1"
                            />
                        </div>
                        <Link to={'/kitchenCleaning'}>
                            <button className={"officeClnBtn"}>{t("offers.kitchenClnService.kitchenClnBtn")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfficeKitchen;