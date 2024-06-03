import React from 'react';
import {useTranslation} from "react-i18next";

function Partners(props) {
    const [t,i18n] = useTranslation('global')

    return (
        <div className={"partners"}>
            <div className={"partnersTitle"}>
                <h2>{t("partners.partnersTitle")}</h2>
            </div>
            <div className={"companiesLogos"}>
                <div className={"comp1Logo1"}>
                    <img src={"../imgs/partners/toprak-leasing.svg"} className={"compLogo1"}/>
                </div>
                <div className={"comp1Logo1"}>
                    <img src={"../imgs/partners/glorix.svg"} className={"compLogo2"}/>
                </div>
                <div className={"comp1Logo1"}>
                    <img src={"../imgs/partners/woocommerce.svg"} className={"compLogo3"}/>
                </div>
                <div className={"comp1Logo1"}>
                    <img src={"../imgs/partners/rolf-leasing.svg"} className={"compLogo4"}/>

                </div>
                <div className={"comp1Logo1"}>
                    <img src={"../imgs/partners/unilabs.svg"} className={"compLogo5"}/>

                </div>
            </div>
        </div>
    );
}

export default Partners;