import axios from "axios"
import Button from 'react-bootstrap/Button';
import './Thecars.css';


const Thecars = () => {
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
                        <div className="catss"><p>All</p></div>
                        <div className="catss"><p>2-4 Orang</p></div>
                        <div className="catss"><p>4-6 Orang</p></div>
                        <div className="catss"><p>6-8 Orang</p></div>
                        </div>
                        <div className="carsec-right-mid-cat-right">
                        <Button variant="primary"> + Add New Car</Button>
                        </div>
                    </div>
                    <div className="carsec-right-bottom">
                        <h1>Ini Car List</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Thecars;