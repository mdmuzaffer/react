import React from "react";
import Cart from "./Cart";

import cartImg1 from'./img/service0.jpg';
import cartImg2 from'./img/service2.jpg';
import cartImg3 from'./img/service3.jpg';
import cartImg4 from'./img/service4.jpg';
import cartImg5 from'./img/service5.jpg';
import cartImg6 from'./img/service6.jpg';
const Service = (props) =>{
    document.title = props.title;

    const Sdata =[
        {
        imgUrl: cartImg1,
        title : "Azure SQL",
        description: "Some quick  txt to build on the card title and make up the bulk of the card's content."
        },
        {
        imgUrl: cartImg2,
        title : "Azure Function",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
        imgUrl: cartImg3,
        title : "CosmosDB",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
        imgUrl: cartImg4,
        title : "DevOps",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
        imgUrl: cartImg5,
        title : "Azure Backup",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
        imgUrl: cartImg6,
        title : "Logic Apps",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },

];

    return(
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center mt-n1 text-info">Our services</h1>
                </div>
                <div className="row">
                    {
                    Sdata.map((vel, ind)=>{
                            return <Cart title={vel.title} description={vel.description} img={vel.imgUrl}/>
                        })
                    }   
                </div>
            </div>
        </>
    );
}
export default Service;