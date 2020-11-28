import React from 'react';
import styles from "./brands.module.scss";
import { Input } from 'antd';


// ======== components ========
import Brand from './subComponents/brand/Brand';
// import SearchElem from './subComponents/searchElement/SearchElem';
// ======== components ========

const { Search } = Input;

const brands = [
    ["https://placeimg.com/150/150/an", 'РЖД'],
    ["https://placeimg.com/150/150/an", 'Вимбильдан'],
    ["https://placeimg.com/150/150/an", 'Добрый'],
    ["https://placeimg.com/150/150/an", 'ErichKrause'],
    ["https://placeimg.com/150/150/an", 'Пятерочка'],
    ["https://placeimg.com/150/150/an", 'Верный'],
    ["https://placeimg.com/150/150/an", 'Магнит'],
    ["https://placeimg.com/150/150/an", 'Maxima'],
    ["https://placeimg.com/150/150/an", 'Eni'],
    ["https://placeimg.com/150/150/an", 'Motul']
]

export default class Brands extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            brands: []
        }
    }

    async componentDidMount () {
    }

    render()
    {
        return (
            <div className="wrapper">
                <Search placeholder="Начните вводить блоггера" enterButton className="searchInput"/>
    
                <div className={styles.brandsWrapper}>
                    {brands.map( (elem, i) => {
                        // console.log(elem[0], elem[1]);
                        return <Brand key={`${i}`} imageURL={`${elem[0]}`} brandName={`${elem[1]}`}/>
                    })}
                </div>
            
            </div>
        )
    }
    
}