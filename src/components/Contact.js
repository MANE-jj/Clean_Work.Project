import React, {useState} from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import Footer from "./Footer";

function Contact(props) {
    const [t,i18n] = useTranslation('global')
    const [userInfo, setUserInfo] = useState([]);

    const [valueName,setValueName] = useState('')
    const [valueMail,setValueMail] = useState('')
    const [valueService,setValueService] = useState('')
    const [valueComment, setValueComment] = useState('');

    const handleSubmit1 = (ev) => {
        ev.preventDefault();

        userInfo.push({
            id:new Date().getTime(),
            valueName,
            valueMail,
            valueService,
            valueComment
        })

        const updatedData = [...userInfo];
        localStorage.setItem('key', JSON.stringify(updatedData));
        setUserInfo(updatedData);

        setValueName('');
        setValueMail('');
        setValueService('');
        setValueComment('');
    };

    return (
        <div>
            <Header/>
            <section className={"contactSec1"}>
                <div className={'forOpacityAboutUs'}>
                    <NavBar/>
                    <h1 className={'aboutUsTitle'}>{t("contact.contactTitle")}</h1>
                </div>
            </section>
            <section className={'contactInfo'}>
                <h1 className={'contactTitle'}>{t("contact.contactInfo.title")}</h1>
                <p className={'contactText'}>{t("contact.contactInfo.text")}</p>
                <div className={'infoAndInputs'}>
                    <div className={'contactInfos'}>
                        <h1>{t("contact.contactInformation")}</h1>
                        <div className={'iconText'}>
                            <i className="fa fa-map-marker" aria-hidden="true" id={'iconSocialMedia'}></i>
                            <p className={'contactInfoText'}>{t('footer.office.location')}</p>
                        </div>
                        <div className={'iconText'}>
                            <i className="fa fa-phone" aria-hidden="true" id={'iconSocialMedia'}></i>
                            <p className={'contactInfoText'}>{t('footer.office.phone')}</p>
                        </div>
                        <div className={'iconText'}>
                            <i className="fa fa-envelope" aria-hidden="true" id={'iconSocialMedia'}></i>
                            <p className={'contactInfoText'}>{t('footer.office.mail')}</p>
                        </div>
                    </div>

                    <div className={'formField'}>
                        <h1 className={'titleInputs'}>{t('contact.inputsField.title')}</h1>
                        <form className={'inputs'} onSubmit={handleSubmit1}>
                            <input  type={'text'}
                                    className={'nameSurname'}
                                    placeholder={'John Walker'}
                                    value={valueName}
                                    onChange={(ev) => setValueName(ev.target.value)}
                            />
                            <input type={'text'}
                                   className={'nameSurname'}
                                   placeholder={'yours@gmail.com'}
                                   value={valueMail}
                                   onChange={(ev) => setValueMail(ev.target.value)}
                            />
                            <select className={'serviceSelection'}
                                    value={valueService}
                                    onChange={(ev) => setValueService(ev.target.value)}
                            >
                                <option>{t("contact.inputsField.serviceType.title")}</option>
                                <option>{t("contact.inputsField.serviceType.factory")}</option>
                                <option>{t("contact.inputsField.serviceType.house")}</option>
                                <option>{t("contact.inputsField.serviceType.office")}</option>
                                <option>{t("contact.inputsField.serviceType.car")}</option>
                            </select>
                            <textarea rows={5}
                                      cols={60}
                                      placeholder={'Comment(Optional)'}
                                      value={valueComment}
                                      onChange={(ev) => setValueComment(ev.target.value)}
                            ></textarea>
                            <button className={'submitBtn'}>{t("contact.inputsField.submitButton")}</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>

        </div>
    );
}

export default Contact;