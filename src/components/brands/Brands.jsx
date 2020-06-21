import React from 'react';
import styles from "./Brands.module.css";

// ======== components ========
import Brand from './subComponents/brand/Brand';
import SearchElem from './subComponents/searchElement/SearchElem';
// ======== components ========

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
]

export default function Brands () {
    return (
        <div className={`${styles.brandsPageWrapper}`}>
            <SearchElem page="brands" placeholder="Введите название бренда"/>

            <div className={styles.brandsWrapper}>
                {brands.map( (elem, i) => {
                    // console.log(elem[0], elem[1]);
                    return <Brand key={`${i}`} imageURL={`${elem[0]}`} brandName={`${elem[1]}`}/>
                })}
            </div>
        
        </div>
    )
}