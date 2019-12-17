import React, { FunctionComponent } from 'react'

type ImageProps = {
    filter: string
}

const Image: FunctionComponent<ImageProps> = ({ filter }) => (
    <div
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backdropFilter: filter,
        }}
    />
)

export default Image
