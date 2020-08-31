import React, { Component } from 'react';
import { Avatar, Descriptions,Button } from 'antd';
var $ = require('jquery')

class Infomation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    seachData(obj) {
        $.ajax({
            url: 'http://localhost:3001/details',
            type: 'post',
            data: { ...obj },
            success: (result) => {
                console.log(result)
                this.setState({
                    data: result
                })
            }
        })
    }
    goBack(){
        this.props.history.push('/')
    }
    componentWillMount() {
        this.seachData({ id: this.props.match.params.id })
    }
    render() {
        console.log(this.props.history.push)
        const id = this.props.match.params.id
        const data  = this.state.data
       
        return (
            
                
                <Descriptions title="联系人信息" >
                    
                    <div>
                        <Avatar size='large' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'></Avatar>
                    </div>
                    <Descriptions.Item label="姓名">{data.name}</Descriptions.Item>
                    <Descriptions.Item label="联系电话">{data.phoneNum}</Descriptions.Item>
                    <Descriptions.Item label="地址">
                        {data.address}
                    </Descriptions.Item>
                    <div><Button type='primary' onClick={()=>{this.goBack()}}>回到联系人列表</Button></div>
                </Descriptions>
           
        )
    }
}

export default Infomation