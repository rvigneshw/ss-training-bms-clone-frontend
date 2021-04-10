import { List, Card, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

function ListData(){
    return <List
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
        <Button>Select</Button>
      </List.Item>
    )}/>;
}

export default function Payment(){
    return <div>
        <Header style={{color:'white'}}>Payment Details</Header>
        <ListData/>
    </div>
}
