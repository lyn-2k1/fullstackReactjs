import {  Space, Table, Tag  } from "antd";

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Ticket Name',
    dataIndex: 'ticketName',
    key: 'ticketName',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Customer name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Ticket Type',
    dataIndex: 'ticketType',
    key: 'ticketType',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Creater',
    dataIndex: 'creater',
    key: 'creater',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    id: '1',
    ticketName: 'HD bn xe - City Do',
    customerName: 'Nguyen Van A', 
    ticketType: 'Mua xe',
    date: '10/08/2011',
    status: 'Contract',
    creater: 'staff_1',
    tags: ['nice', 'developer'],
  },
   {
    key: '2',
    id: '2',
    ticketName: 'Mua nha chung cu - HVT',
    customerName: 'Nguyen Van B', 
    ticketType: 'Mua nha',
    date: '11/08/2011',
    status: 'SoHDCC',
    creater: 'staff_2',
    tags: ['nice', 'developer'],
  },
   {
    key: '3',
    id: '3',
    ticketName: 'HD Mua O to- Santafe',
    customerName: 'Nguyen Van C', 
    ticketType: 'Mua oto',
    date: '11/08/2011',
    status: 'SoHDCC',
    creater: 'staff_2',
    tags: ['nice', 'developer'],
  },
];

const TableData: React.FC = () => <Table  columns={columns} dataSource={data} />;

export default TableData;


// ReactDOM.render(<ComponentDemo />, mountNode);