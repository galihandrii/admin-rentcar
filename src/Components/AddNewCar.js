import './AddNewCar.css'
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { handleAddCar } from '../Redux/Actions/listcarAction';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AddNewCar = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(rootReducers => rootReducers)


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const onHandleAddCar = () => {
        const formData = new FormData();
        formData.append("name",name)
        formData.append("category",category)
        formData.append("price",price)
        formData.append("image",image)

        dispatch(handleAddCar(formData))
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if(state.listCar.message !== ""){
                navigate("/carlist")
            }
        }, 1000);
    }

    useEffect(() => {
        if(state.listCar.message !== ""){
            alert(state.listCar.message)
        }
        handleRedirect()
        // eslint-disable-next-line
    }, [state.listCar.message])


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
                        <div className='input-file'><input onChange={handleName} placeholder='Input nama mobil' type='text' required/></div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Harga</p></div>
                        <div className='input-file'><input onChange={handlePrice} placeholder='Input harga' type='text' required/></div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Foto</p></div>
                        <div className='input-file'><input onChange={handleImage} placeholder='Input Foto Mobil' type='file' required/></div>
                    </div>
                    <div className='input-form'>
                        <div className='input-names'><p>Kategori</p></div>
                        <div className='input-file'>
                        <select placeholder='Kategori' onChange={handleCategory}>
                                <option value="small">
                                    2- 4 orang
                                </option>
                                <option value="Medium">
                                    4 -6 orang
                                </option>
                                <option value="large">
                                    6-8 orang
                                </option>
                            </select>
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
                        <Link to='/carlist'>
                        <Button variant="outline-primary">Cancel</Button>
                        </Link>
                        
                    </div>
                    <div>
                    <Button onClick={onHandleAddCar} variant="primary">Save</Button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default AddNewCar;