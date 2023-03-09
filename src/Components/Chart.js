import './Chart.css'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import ReactApexChart from "react-apexcharts";
import chartData from '../const/chartData';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Table, Pagination } from "antd";
import moment from 'moment/moment';
import 'moment/locale/id'


const Chart =() => {
    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
      };
      const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };
      const items = [
        {
          label: 'Januari',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Februari',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: 'Maret',
          key: '3',
          icon: <UserOutlined />,
          
        },
        {
          label: 'April',
          key: '4',
          icon: <UserOutlined />,
         
        },
        {
            label: 'Mei',
            key: '5',
            icon: <UserOutlined />,
           
          },
          {
            label: 'June',
            key: '6',
            icon: <UserOutlined />,
           
          },
          {
            label: 'July',
            key: '7',
            icon: <UserOutlined />,
            
          },
          {
            label: 'Agustus',
            key: '8',
            icon: <UserOutlined />,
            
          },
          {
            label: 'September',
            key: '9',
            icon: <UserOutlined />,
            
          },
          {
            label: 'Oktober',
            key: '10',
            icon: <UserOutlined />,
           
          },
          {
            label: 'November',
            key: '11',
            icon: <UserOutlined />,
            
          },
          {
            label: 'Desember',
            key: '12',
            icon: <UserOutlined />,
            
          },
      ];
      
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };

      function dotCurrency(number) {
        const currency = number;
        return new Intl.NumberFormat('de-DE').format(currency)
    }

  const [orderList, setOrderList] = useState([]);
  const [info, setInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    axios
      .get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=${currentPage}&pageSize=${pageSize}`,
        config
      )
      .then((res) => {
        const orders = res.data.orders;
        const newOrders = orders.map((item) => {
          return {
            id: item.id,
            email: item.User.email,
            name: item?.Car?.name ?? "",
            start_rent_at:moment(item?.start_rent_at).format('LL'),
            finish_rent_at: moment(item.finish_rent_at).format('LL'),
            price: dotCurrency(item?.Car?.price ?? ""),
            category: item?.Car?.category ?? "",
          };
          
        });
        const infoPage = {
          count: res.data.count,
          page: res.data.page,
          pageCount: res.data.pageCount,
          pageSize: res.data.pageSize,
        };
        console.log(res);
        setOrderList(newOrders);
        setInfo(infoPage);
      });
  }, [currentPage, pageSize]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Car",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Rent",
      dataIndex: "start_rent_at",
      key: "start_rent_at",
    },
    {
      title: "Finish Rent",
      dataIndex: "finish_rent_at",
      key: "finish_rent_at",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];


    return(
        <div className='chart'>
            <div className='chart-left'>
                <div><h6>DASHBOARD</h6></div>
                <div className='db-btm'><p>Dashboard</p></div>
            </div>
            <div className='chart-right'>
                <div className='chart-db'>
                    <p>Dashboard /<span> Dashboard</span></p>
                </div>
                <div className='chart-db'>
                    <h6>Rented Car Visualization</h6>
                </div>
                <div className='chart-db'>
                    <div><p>Month</p></div>
                    <div>
                        <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                            Pick Month
                            <DownOutlined />
                            </Space>
                        </Button>
                        </Dropdown>
                    </div>
                    <div className='chart-live'>
                    <ReactApexChart
                      options={chartData}
                      series={chartData.series}
                      width="96%"
                      height="376px"
                    />
                    </div>
                    
                </div>
                <div className='table-live'>
                <Table
                  className="coba-table"
                  pagination={false}
                  columns={columns}
                  dataSource={orderList}
                />

                <Pagination
                  size="small"
                  total={info.count}
                  showSizeChanger
                  showQuickJumper
                  onChange={(e, i) => {
                    setCurrentPage(e);
                    setPageSize(i);
                  }}
                />
                </div>
                
            </div>

        </div>
    )
}

export default Chart;