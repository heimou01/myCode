import { Form, Input, Button, Layout,Alert } from 'antd';
import React, { Component } from 'react';
var $ = require('jquery')


class AddPage extends Component {
    constructor(props) {
        super(props)
    }
    formRef = React.createRef();
    onReset = () => {
        this.formRef.current.resetFields();
      };
    

    addFun(name, phoneNum, address) {
        $.ajax({
            url: 'http://localhost:3001/addPerson',
            type: 'post',
            data: { name: name, phoneNum: phoneNum, address: address },
            success: function (result) {
                console.log(result)
                if(result=="新增联系人成功"){
                    return (
                        <Alert
                        message=""
                        type='success'
                        description="添加联系人成功"></Alert>
                    )
                }
            }
        })
    }
    goBack(){
        this.props.history.push('/')
    }

    render() {
        const layout = {
            labelCol: {
                span: 8,
       
            },
            wrapperCol: {
                span: 12,
               
            },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 16 },
        };

        return (
            <Layout style={{ margin: '0 auto', textAlign: 'center' }}>
                <Form
                     ref={this.formRef} 
                    style={{ magin: '0 auto' }}
                    {...layout}
                    layout='vertical'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={(value) => {
                        var { name, phoneNum, address } = value
                        this.addFun(name, phoneNum, address)
                        this.onReset()
                    }}
                >
                    <Form.Item
                        style={{ magin: '0 auto' }}
                        label="姓名"
                        name="name"
                        rules={[{ required: true, message: '联系人姓名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        style={{ magin: '0 auto' }}
                        label="联系电话"
                        name="phoneNum"
                        rules={[{ required: true, message: '联系人号码' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        style={{ magin: '0 auto' }}
                        label="地址"
                        name="address"
                        rules={[{ required: true, message: '联系人地址' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" size='large' style={{ width: 100 }} block='true' >
                            添加
                    </Button>
                   
                    </Form.Item>
                    <Form.Item >
                    <Button type='primary' size='large' style={{ width: 140,marginLeft:5 }} block='true' onClick={()=>{this.goBack()}}>回到联系人列表</Button>
                    </Form.Item>
                    
                </Form>
            </Layout>

        )
    }
}

export default AddPage