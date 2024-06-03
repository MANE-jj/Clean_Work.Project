import React, {useEffect, useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import Carousel from "nuka-carousel";
import {useTranslation} from "react-i18next";
import Partners from "./Partners";
import Footer from "./Footer";
import StarRatings from "react-star-ratings/build/star-ratings";
import OfficeKitchen from "./OfficeKitchen";
import CarFactory from "./CarFactory";
import AOS from "aos";


function Home(props) {
        // for translation
        const [t,i18n] = useTranslation('global')

        const [wordIndex, setWordIndex] = useState(0);
        const words = [t('changingWords.kitchen'), t('changingWords.house'), t('changingWords.office')];

        useEffect(() => {
            const interval = setInterval(() => {
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, 2000);

            return () => clearInterval(interval);
        }, [])

        // button hover
        const [changing,setChanging] = useState(false)
        const handleRunningLine=()=>{
            setChanging(true)

        }
        const handleButton=()=>{
            setChanging(!changing)
        }

    return (
            <div>
                <Header/>

                <section className={'homeSec1'}>
                    <Carousel wrapAround={true}
                              autoplay={true}
                              autoplayInterval={2500}
                              renderCenterLeftControls={false}
                              renderCenterRightControls={false}
                              renderBottomCenterControls={false}
                    >
                        <div className={'slide1'}>
                            <div className={'forOpacity'}>
                                <NavBar/>
                                <div className={'slide1Info'}>
                                    <h1 className={'slide1Title'}>
                                        {t('home.weCleanYour')} <span className={'changingWord'}>{words[wordIndex]}</span>
                                    </h1>
                                    <div className={'buttons'}>
                                        <a href={"#introduction"}>

                                        <button className={'btn1'}
                                                onMouseOver={handleRunningLine}
                                                onMouseOut={handleButton}
                                        >
                                            {changing?<marquee scrollamount={16}>{t('home.introduction')}</marquee>:<span>{t('home.introduction')}</span>}
                                        </button>
                                        </a>
                                        <a href={'#services'}>
                                            <button className={'btn2'}>{t('home.exploreServices')}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'slide2'}>
                            <div className={'forOpacity'}>
                                <NavBar/>
                                <div className={'slide1Info'}>
                                    <h1 className={'slide1Title'}>
                                        {t('home.weCleanYour')} <span className={'changingWord'}>{words[wordIndex]}</span>
                                    </h1>
                                    <div className={'buttons'}>
                                        <a href={"#introduction"}>

                                            <button className={'btn1'}
                                                    onMouseOver={handleRunningLine}
                                                    onMouseOut={handleButton}
                                            >
                                                {changing?<marquee scrollamount={16}>{t('home.introduction')}</marquee>:<span>{t('home.introduction')}</span>}
                                            </button>
                                        </a>
                                        <a href={'#services'}>
                                            <button className={'btn2'}>{t('home.exploreServices')}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'slide3'}>
                            <div className={'forOpacity'}>
                                <NavBar/>
                                <div className={'slide1Info'}>
                                    <h1 className={'slide1Title'}>
                                        {t('home.weCleanYour')} <span className={'changingWord'}>{words[wordIndex]}</span>
                                    </h1>
                                    <div className={'buttons'}>
                                        <a href={"#introduction"}>

                                            <button className={'btn1'}
                                                    onMouseOver={handleRunningLine}
                                                    onMouseOut={handleButton}
                                            >
                                                {changing?<marquee scrollamount={16}>{t('home.introduction')}</marquee>:<span>{t('home.introduction')}</span>}
                                            </button>
                                        </a>
                                        <a href={'#services'}>
                                            <button className={'btn2'}>{t('home.exploreServices')}</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={'wavy'}>
                    <path fill="#fff" d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,240C560,224,640,192,720,176C800,160,880,160,960,138.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>


                <section className={'homeSec2'} id={'introduction'}>

                    <div className={'sec2Part1'} >
                        <h1 className={'sec2Title'}>{t('section2.title')}</h1>
                        <p className={'sec2Text1'}>
                            <a href={'/'} className={'jsonLink'}>{t('menu.logoName')}</a>
                            {t('section2.text1')}
                        </p>
                        <p className={'sec2Text2'}>{t('section2.text2')}</p>
                    </div>

                    <div className={'imgHelp'}>
                        <div className={'sec2Img'}></div>
                        <div className={"forHelp"}>
                            <h1 className={'helpText'}>{t('section2.needHelp')}
                                <br/>
                                {t('section2.callUs')}</h1>
                            <h3 className={'iconNumber'}>
                                <i className="fa fa-phone" aria-hidden="true" id={'iconPhone'}></i> <span></span>
                                {t('header.phoneNumber')}
                            </h3>
                        </div>
                    </div>
                </section>

                <section className={'homeSec3'} id={'services'}>
                    <h1 className={'titleOffer'}>{t("offers.titleOffers")}</h1>
                    <div className={'offers'}>
                        <OfficeKitchen/>
                        <CarFactory/>
                    </div>
                </section>

                <section className={"customerOpinions"}>
                    <h1 className={"customersTitle"}>{t("opinions.happyCustomers")}</h1>
                    <div className={"opinions"}>
                        <div className={"opinions12"}>

                            <div className={"opinion1"}>
                                <div className={"customer1Info"}>
                                    <div className={"customer1Img"}></div>
                                    <div className={"nameRating"}>
                                        <h1 className={"customer1Name"}>{t("opinions.customer1.customer1Name")}</h1>
                                        <span>
                                            <StarRatings numberOfStars={5}
                                                         rating={4}
                                                         starDimension="20px"
                                                         starSpacing="1px"
                                                         starRatedColor="#4F83D1"
                                                         starEmptyColor="white"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p className={"customer1Text"}>{t("opinions.customer1.customer1Text")}</p>
                            </div>

                            <div className={"opinion2"}>
                                <div className={"customer1Info"}>
                                    <div className={"customer2Img"}></div>
                                    <div className={"nameRating"}>
                                        <h1 className={"customer1Name"}>{t("opinions.customer2.customer2Name")}</h1>
                                        <span>
                                            <StarRatings numberOfStars={5}
                                                         rating={3}
                                                         starDimension="20px"
                                                         starSpacing="1px"
                                                         starRatedColor="#4F83D1"
                                                         starEmptyColor="white"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p className={"customer1Text"}>{t("opinions.customer2.customer2Text")}</p>
                            </div>

                        </div>
                        <div className={"opinions34"}>
                            <div className={"opinion3"}>
                                <div className={"customer1Info"}>
                                    <div className={"customer3Img"}></div>
                                    <div className={"nameRating"}>
                                        <h1 className={"customer1Name"}>{t("opinions.customer3.customer3Name")}</h1>
                                        <span>
                                            <StarRatings numberOfStars={5}
                                                         rating={5}
                                                         starDimension="20px"
                                                         starSpacing="1px"
                                                         starRatedColor="#4F83D1"
                                                         starEmptyColor="white"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p className={"customer1Text"}>{t("opinions.customer3.customer3Text")}</p>
                            </div>
                            <div className={"opinion4"}>
                                <div className={"customer1Info"}>
                                    <div className={"customer4Img"}></div>
                                    <div className={"nameRating"}>
                                        <h1 className={"customer1Name"}>{t("opinions.customer4.customer4Name")}</h1>
                                        <span>
                                            <StarRatings numberOfStars={5}
                                                         rating={5}
                                                         starDimension="20px"
                                                         starSpacing="1px"
                                                         starRatedColor="#4F83D1"
                                                         starEmptyColor="white"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p className={"customer1Text"}>{t("opinions.customer4.customer4Text")}</p>
                            </div>
                        </div>
                        <div className={"opinions56"}>
                            <div className={"opinion5"}>
                                <div className={"customer1Info"}>
                                    <div className={"customer5Img"}></div>
                                    <div className={"nameRating"}>
                                        <h1 className={"customer1Name"}>{t("opinions.customer5.customer5Name")}</h1>
                                        <span>
                                            <StarRatings numberOfStars={5}
                                                         rating={3}
                                                         starDimension="20px"
                                                         starSpacing="1px"
                                                         starRatedColor="#4F83D1"
                                                         starEmptyColor="white"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p className={"customer1Text"}>{t("opinions.customer5.customer5Text")}</p>
                            </div>
                            <div className={"opinion6"}>
                                <div className={"customer1Info"}>
                                    <div className={"customer6Img"}></div>
                                    <div className={"nameRating"}>
                                        <h1 className={"customer1Name"}>{t("opinions.customer6.customer6Name")}</h1>
                                        <span>
                                            <StarRatings numberOfStars={5}
                                                         rating={4}
                                                         starDimension="20px"
                                                         starSpacing="1px"
                                                         starRatedColor="#4F83D1"
                                                         starEmptyColor="white"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p className={"customer1Text"}>{t("opinions.customer6.customer6Text")}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Partners/>
                <Footer/>
            </div>
        );
}
export default Home;