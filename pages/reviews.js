import React from "react";
import Card from "../Components/Card"

const Reviews = ( reviews ) => {
    let data_response = reviews.reviews


    return (
        <div>
            {data_response.map((res, index) =>
             <div key={index}>
               <Card res={res.name}/> 
               </div>)}
        </div>
    )
}

export async function getServerSideProps(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();
    
    return {
        props:{
            reviews: data.slice(0, 20)
        
        }
    }
}

export default Reviews;