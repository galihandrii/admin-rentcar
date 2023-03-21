//import axios from "axios"
import Button from 'react-bootstrap/Button';
import './Thecars.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listCar } from "../Redux/Actions/listcarAction";
import moment from "moment/moment";


const Thecars = () => {
const dispatch = useDispatch();
const state = useSelector((rootReducer)=> rootReducer)

function dotCurrency(number) {
    const currency = number;
    return new Intl.NumberFormat('de-DE').format(currency)
}

const getCars = () => {
    const token = localStorage.getItem('token')
    const config ={
        headers : {
            access_token : token,
        }
    }
    dispatch(listCar(config))
}

useEffect(()=>{
    getCars()
},[])













    return (
        <div className="carsec">
            <div className="carsec-left">
                <div><h5>Cars</h5></div>
                <div><h6>List Cars</h6></div>
            </div>
            <div className="carsec-right">
                <div className="carsec-right-top">
                    <p>Cars › List Car</p>
                </div>
                <div className="carsec-right-mid">
                    <div><h5>List Cars</h5></div>
                    <div className="carsec-right-mid-cat">
                        <div className="carsec-right-mid-cat-left">
                        <div className="catss"><p>All Cars</p></div>
                        <div className="catss"><p>2-4 Orang</p></div>
                        <div className="catss"><p>4-6 Orang</p></div>
                        <div className="catss"><p>6-8 Orang</p></div>
                        </div>
                        <div className="carsec-right-mid-cat-right">
                        <Button variant="primary"> + Add New Car</Button>
                        </div>
                    </div>
                    <div className="carsec-right-bottom">
                        {
                            state.listCar.carsData.length && state.listCar.carsData.map(function(item){
                                return (
                                    <div className="car-cards">
                                        <div className='car-cards-img'><img src={item.image} alt='cars'/></div>
                                        <div className='car-cards-desc'>
                                            <h4>{item.name}</h4>
                                            <h6>Rp {dotCurrency(item.price)} / hari</h6>
                                            <p>
                                            {(() => {
                                                if (item.category === "small") {
                                                return <p>2-4 Orang</p>
                                            } else if (item.category === "Medium") {
                                                return <p>4-6 Orang</p>
                                            } else if (item.category === "large") {
                                                return <p>6-8 Orang</p>
                                            } else {
                                                return '-'
                                                }
                                            })
                                            () }  
                                            </p>
                                            <p>{moment(item.updateAt).format("LL")}</p>
                                        </div>
                                        <div className='card-button'>
                                            <div>
                                            <Button variant="outline-danger">Delete</Button>
                                            </div>
                                            <div>
                                                <Link>
                                                <Button variant="outline-success">Edit</Button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Thecars;