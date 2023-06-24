import React, { useEffect, useState } from "react";
import Card from "../Components/Card"
import module from "../style/animal-container.module.css"

export const getStaticProps = async () => {
  
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    
    return {
        props:{
            arr: data 
        },
        revalidate: 5 }
}


const CatPage = (props) => {
    let arr_animals = props.arr
    const arr_dogs = arr_animals.filter(el => el.view === 'cat');
    const [data, setData] = useState(arr_dogs);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:5000/items')
                .then(res => res.json())
                .then(data => setData(data.filter(el => el.view === 'cat')))
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={module.container_for_animals}>
            {data.map((res, index) => 
                <div key={index}>
                    <Card name={res.name} image={res.image} id={res.id}/>
                </div>)}
        </div>
    )
}

export default CatPage;