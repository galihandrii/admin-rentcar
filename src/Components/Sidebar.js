import truck from "../Assets/fi_truck.png"
import home from "../Assets/fi_home.png"
import square from "../Assets/square.png"
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div><img src={square}/></div>
            <div className="side-div">
                <img src={home}/>
                <h6>Dashboard</h6>
            </div>
            <div className="side-div">
                <img src={truck}/>
                <h6>Cars</h6>
            </div>

        </div>
    )
}

export default Sidebar;