import React from 'react';
import { Table, Tabs } from 'antd';
import PropTypes from 'prop-types';
import { BillTemplate,Aggvo } from './template';
import TemplateHelper from '../template/TemplateHelper'
const { TabPane } = Tabs;



class BillBodyTable extends React.Component {

  static propTypes = {
    billTabs: PropTypes.array,
    billData: PropTypes.object,
  }


  constructor(props) {
    super(props);
    //定义属性
    this.state = {
      billTabs: [],
      billData: []
    }
  }

  //初始化加载
  componentDidMount() {
    this.setState({
      billTabs: TemplateHelper.convert2BillTab(BillTemplate.body),
      billDatas:Aggvo.bodyVO,
    })
  }


  //页签切换事件
  tabChanged(key) {
    // alert(key);
  }
  render() {


    return <div>

      <Tabs defaultActiveKey="1" onChange={this.tabChanged}>
        {this.state.billTabs.map((tab, index) => {
          return <TabPane tab={tab.tabcode} key={index + 1}>
            <Table columns={tab.billitems} dataSource={this.state.billDatas[tab.tabcode]}></Table>
          </TabPane>
        })}
      </Tabs>

    </div>
  }
}


export default BillBodyTable 