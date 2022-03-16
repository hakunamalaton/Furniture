import React, { useState } from "react";
import Header from "../Header/Js/Header";
import SP from "./images/sp1.jpg";
import { ReactComponent as Minus} from "./icons/minus-solid.svg";
import { ReactComponent as Plus} from "./icons/plus-solid.svg";
import { FaMinusCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const Goods = (props) => {
    const [quantity, setQuantity] = useState(1);
    const price = 300
    const [total, setTotal] = useState(price*quantity);
    function GetTotal(){
      return total;
    }
    const Minus = () =>{
    
      setQuantity(quantity-1)
      setTotal(total-price)
      props.Price(props.total-price)
    }
    const Plus = () =>{
      setQuantity(quantity+1)
      setTotal(total+price)
      props.Price(props.total+price)
    }
    return (
      
        <div class="card p-4">
                  
                  <div class="row">
                    <div class="col-md-4 col-9 bg-light d-flex justify-content-center align-items-center shadow product_img">
                      <img
                        src={SP}
                        class="img-fluid"
                        alt="cart img"
                      
                      />
                    </div>

                    <div class="col-md-7 col-11 px-4 mt-2">
                      <div class="row">
                        <div class="col-6 card-title">
                          <h1 class="mb-4 product_name">Sofa No.1</h1>
                          <p class="mb-2">ID: SF001</p>
                          <p class="mb-2">TYPE: Factory Design</p>
                          <p class="mb-2">PRICE: {price} $</p>
                          
                        </div>

                        <div class="col-6">
                          <ul class="pagination justify-content-end set_quantity">
                            <li class="page-item">
                              <button onClick={Minus}
                                class="page-link "
                                
                              >
                                <FaMinusCircle />
                                
                              </button>
                            </li>
                            <li class="page-item">
                              <input
                                type="text"
                                name=""
                                class="page-link"
                                value={quantity}
                                id="textbox"
                                size={1}
                              />
                            </li>
                            <li class="page-item">
                              <button onClick={Plus}
                                class="page-link"
                                
                              >
                                {" "}
                                <FaPlusCircle/>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-8 d-flex justify-content-between remove_wish pt-4">
                          <p>
                          <FaTrashAlt/> REMOVE ITEM
                          </p>
                         
                        </div>
                        <div class="col-4 d-flex justify-content-end price_money pt-4">
                          <h3>
                            $<span id="itemval">{total} </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


            
        
    );
};

export default Goods;