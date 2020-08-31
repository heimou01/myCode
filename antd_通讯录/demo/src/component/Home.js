import React, { Component } from 'react';
import { PageHeader, Button, Layout } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons'
import PersonList from './PersonList'

var $ = require('jquery')


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }
    render() {
        return (
            <Layout>
                <PageHeader
                    className="site-page-header"
                    title="联系人"
                />,

                <PersonList></PersonList>

                <Button type='primary' shape='circle' href='/addone' className='addPerson' style={{ width: 40, margin: '0 auto' }}>
                    <PlusCircleFilled ></PlusCircleFilled>
                </Button>

            </Layout>


        )
    }
}










export default Home