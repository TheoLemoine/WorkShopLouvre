import React, {FunctionComponent, useEffect, useState} from 'react'
import { useSpring, animated } from 'react-spring'

type ImageProps = {
    filter: string
}

const Image: FunctionComponent<ImageProps> = ({ filter }) => {
    const [isReady, setReady] = useState(false)

    const props = useSpring({
        opacity: isReady ? 1 : 0,
        transition: '1.6s opacity'
    })
    useEffect(() => {
        if(!isReady) {
            setReady(true);
        }
    }, [isReady]);
    return (
        <animated.div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backdropFilter: filter,
                ...props
            }}>
        </animated.div>
    )
}

export default Image
