import React from 'react';
import styles from "./brand.module.scss";

import { Card } from 'antd';

const { Meta } = Card;

export default function Brand (props) {
    return(
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt={`${props.brandName}`} src={`${props.imageURL}`} />}
        >
            <Meta title={`${props.brandName}`} description="www.instagram.com" />
        </Card>
    )
}