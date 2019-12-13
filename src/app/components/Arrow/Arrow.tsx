import React, {FunctionComponent} from 'react'
import arrow from "../../assets/img/arrow.svg"
import Svg from "../Svg/Svg";

const Arrow: FunctionComponent = () => (
    <div className="arrow animated">
        <div className="circle circle-top"></div>
        <div className="circle circle-main"></div>
        <div className="circle circle-bottom"></div>
        <Svg svg={arrow} />
    </div>
)

export default Arrow
