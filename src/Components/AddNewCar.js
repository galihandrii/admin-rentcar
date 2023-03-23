import './AddNewCar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


const AddNewCar = () => {
    return(
        <div className="carsec">
            <div className="carsec-left">
                <div><h5>Cars</h5></div>
                <div><h6>List Cars</h6></div>
            </div>
            <div className="carsec-right">
                <div className="carsec-right-top">
                    <p>Cars  › List Car  › Add New Car  </p>
                    <h3>Add New Car</h3>
                </div>
                <div className="carsec-right-input">
                    <div className='input-form'>
                        <div className='input-names'><p>Nama/tipe Mobil</p></div>
                        <div className='input-file'><input placeholder='Input nama mobil' type='text' required/></div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Harga</p></div>
                        <div className='input-file'><input placeholder='Input harga' type='text' required/></div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Foto</p></div>
                        <div className='input-file'><input placeholder='Input Foto Mobil' type='file' required/></div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Kategori</p></div>
                        <div className='input-file'>
                            <DropdownButton id="dropdown-basic-button" title="Pilih Kategori">
                            <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Created At</p></div>
                        
                    </div>
                    <div className='input-form'>
                       <div className='input-names'><p>Updated At</p></div>
                        
                    </div>
                </div>
                <div className='carsec-right-btn-save'>
                    <div>
                        <Button variant="outline-primary">Cancel</Button>
                    </div>
                    <div>
                    <Button variant="primary">Save</Button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default AddNewCar;