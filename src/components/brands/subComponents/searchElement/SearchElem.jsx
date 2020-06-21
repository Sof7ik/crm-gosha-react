import React from 'react';
import styles from "./SearchElem.module.css";

import OptionElem from './OptionElem/OptionElem';

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
    ["https://placeimg.com/150/150/an", 'Motul'],
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

export default function SearchElem (props) {
    return(
        <React.Fragment>
            <input type="search" name="" id="" list={`searchElem-${props.page}`} placeholder={`${props.placeholder}`}/>
            <datalist id={`searchElem-${props.page}`}>
                {
                    brands.map((elem, id) => {
                        return <OptionElem key={`${id}`} value={`${elem[1]}`}/>
                    })
                }
            </datalist> 

        </React.Fragment>
    )
}