import React from 'react';
import Image from 'next/image'
import module from '../style/card.module.css' 
import Link from 'next/link'
const Card = (props) => {

    return (
        <div className={module.wrap}>
         <Link href={`/more-details/${props.id}`}>
        <h4>
            {props.name}
        </h4>
        <div className={module.card_animal}>
            <Image src={`${props.image}`} alt='animal' width={500} height={500}/>
        </div>
        </Link>
        </div>
    )
}

export default Card;