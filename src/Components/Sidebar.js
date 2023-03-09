import truck from "../Assets/fi_truck.png"
import home from "../Assets/fi_home.png"
import square from "../Assets/square.png"
import './Sidebar.css'
import { useNavigate } from "react-router"

const Sidebar = () => {
const navigate = useNavigate()

const handleNavigateDashboard = () => {
    navigate('/dashboard')
}

const handleNavigateCarList = () => {
    navigate('/carlist')
}


    return (
        <div className="sidebar">
            <div><img src={square}/></div>
            <div onClick={handleNavigateDashboard} className="side-div">
                <img src={home}/>
                <h6>Dashboard</h6>
            </div>
            <div  onClick={handleNavigateCarList} className="side-div">
                <img src={truck}/>
                <h6>Cars</h6>
            </div>

        </div>
    )
}

export default Sidebar;