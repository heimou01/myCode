import React from 'react';
import { List, Avatar, Input,Button } from 'antd';
var $ = require('jquery')
const { Search } = Input;

class PersonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
          
        }
    }
    componentWillMount() {
        this.getData()
    }
    getData() {
        $.ajax({
            url: 'http://localhost:3001/getAllpersons',
            type: 'get',
            success: (result) => {
                this.setState({
                    data: result
                })
            }
        })
    }
    seachData(obj) {
        $.ajax({
            url: 'http://localhost:3001/search',
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
    isSeacrh(){
        if(this.state.searchData){
            return true
        }else{
            return false
        }
    }
    updatePerson(name){
        $.ajax({
            url: 'http://localhost:3001/changePerson',
            type: 'post',
            data: { name:name },
            success: (result) => {
                console.log(result)
            }
        })
    }
    deletePreson(name){
        $.ajax({
            url: 'http://localhost:3001/deletePerson',
            type: 'post',
            data: { name:name },
            success: (result) => {
                console.log(result)
                this.getData()
            }
        })
    }
  
    
    
    render() {
        const { data } = this.state
       
        return (
            <div>
                <Search
                    allowClear
                    placeholder="搜索联系人"
                    onSearch={(value) => {
                        if (value == '') {
                            this.getData()
                        }
                        if (typeof (parseInt(value)) == 'number') {
                            this.seachData({ PhoneNum: value })
                        }
                        //  if(parseInt(value)==NaN){
                        //      this.getData({name:value})
                        //      console.log(222)
                        //  }

                        // console.log(typeof(parseInt(value)))
                        
                      
                    }}
                    
                    style={{ width: 370 }}
                />
                {
                    <List
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={(item) => {
                            return (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a href={'http://localhost:3000/person/' + item._id}>{item.name}</a>}
                                        description={item.phoneNum}
                                        avatar={<Avatar size='large' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'></Avatar>}
                                    >
                                    </List.Item.Meta>
                                    <Button type='primary' href={'http://localhost:3000/update/'+item._id}>修改</Button>
                                    <Button type='danger' name={item.name} onClick={()=>{this.deletePreson(item.name)}}>删除</Button>
                                </List.Item>
                            )
                        }}
                    />
                }

            </div>
        )
    }
}

export default PersonList