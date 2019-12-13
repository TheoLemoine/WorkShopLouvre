import React, {FunctionComponent} from 'react';

type SvgProps = {
    className: string | null
    Element: string
    style: object | null
    svg: string
}

const Svg : FunctionComponent<SvgProps> = ({
                                                className = null,
                                                Element = 'span',
                                                style = null,
                                                svg= '',
                                            }) => ( <Element className={`svg` + (className ? ` ${className}` : '')} dangerouslySetInnerHTML={{ __html: svg }}/>);

export default Svg;
