import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Header.css'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import hamburger from "../Assets/fi_menu.png"
import Rectangle2 from "../Assets/Rec2.png"


const Header = () => {
   

    const items = [
        {
          key: '1',
          label: <p>Sign Out</p>,
        },
      ];

     

    return(
        <header>
            <div className="header-left">
                <div><img src={Rectangle2}/></div>
                <div><img src={hamburger}/></div>
            </div>
            <div className='header-right'>
                <div>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Search"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-primary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
                </div>
                <div className='profile-logo'><h4 className='logo-name'>A</h4></div>
                <div className='d-down'>
                <Dropdown
                    menu={{  
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['3'],
                    }}
                >
                    <Typography.Link>
                    <Space>
                        <p className='mail-name'>
                        mail name
                        <span className='mail-name-arrow'><DownOutlined /></span>
                        
                        </p>
                    </Space>
                    </Typography.Link>
                </Dropdown>
                </div>
                
            </div>
        </header>
    )
}
export default Header;