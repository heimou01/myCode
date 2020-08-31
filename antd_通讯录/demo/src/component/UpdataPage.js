import { Form, Input, Button, Layout } from 'antd';
import React, { Component } from 'react';
var $ = require('jquery')


class UpdataPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null
        }
    }
    formRef = React.createRef();
    onReset = () => {
        this.formRef.current.resetFields();
    };

    getDataFun(id) {
        $.ajax({
            url: 'http://localhost:3001/findone',
            type: 'post',
            data: { id: id },
            success: (result) => {
                this.setState(
                    {
                        result: result
                    }

                )

            }
        })
    }
    updateFun(id, obj2) {
        $.ajax({
            url: 'http://localhost:3001/changePerson',
            type: 'post',
            data: { id, ...obj2 },
            success: (result) => {
                console.log(result)
            }
        })
    }
    goBack() {
        this.props.history.push('/')
    }
    componentWillMount() {
        var id = this.props.match.params.id
        this.getDataFun(id)
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
        console.log(this.state.result)
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
                        console.log(value)
                        this.updateFun(this.state.result[0]._id, value)
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
                        <Button type="primary" htmlType="submit" size='large' style={{ width: 100 }} block='true' id={this.props.match.params.id}
                        >
                            修改
                        </Button>

                    </Form.Item>
                    <Form.Item >
                        <Button type='primary' size='large' style={{width: 140,marginLeft:5 }} block='true' onClick={() => { this.goBack() }}>回到联系人列表</Button>
                    </Form.Item>

                </Form>
            </Layout>

        )
    }
}

export default UpdataPage