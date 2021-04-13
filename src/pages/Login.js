import { List, Card } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import { loginUser } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('')
  const [password,setPassword] = useState('')

  const onFinish = (values) => {
    console.log(values)
    dispatch(loginUser(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<Demo />, mountNode);
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

export default function Login(){
    return <div>
        <Header style={{color:'white'}}>Login</Header>
        <LoginForm/>
    </div>
}


