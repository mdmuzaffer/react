import React from "react";
import slide1 from'./img/service1.jpg';

const Cart = (props) =>{
    const style = {
        width: '18rem'
      };

    return(
        <>
            <div class="col-sm-4 customClass">
                <div class="card">
                    <img src={props.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cart;