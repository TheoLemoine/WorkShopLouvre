import React, {FunctionComponent} from 'react'
import Image from "../Scenes/Image";
import phryne from "../../assets/img/home/phryne.png";

type MobilePageProps = {}

const MobilePage: FunctionComponent<MobilePageProps> = () => (
    <div className="mobile">
        <div>
            <h1 className="mobile__title">Oups...</h1>
            <div className="mobile__subtitle">
                Cette application n'est disponible que sur grand écran.
            </div>
        </div>
        <div className="mobile__bg">
            <Image src={phryne} style={{position: 'relative', height: '100vh'}}/>
        </div>
    </div>
)

export default MobilePage
