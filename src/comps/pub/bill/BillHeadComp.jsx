import React from 'react';
import { Tabs } from 'antd';
import { BillTemplate, Aggvo } from './template';
import TemplateHelper from '../template/TemplateHelper'
import BillItem from './BillItem'
import PropTypes from 'prop-types';
const { TabPane } = Tabs;


class BillHead extends React.Component {

  static propTypes = {
    billTabs: PropTypes.array,
    headData: PropTypes.object,
  }

  constructor(props) {
    super(props);
    //定义属性
    this.state = {
      billTabs: [],
      headData: null
    }
  }

  //初始化加载
  componentDidMount() {
    this.setState({
      billTabs: TemplateHelper.convert2BillTab(BillTemplate.head),
      headData: Aggvo.parentVO,
    });
  }



  buttonClick = (e) => {
    console.log(this.refs)
  }

  afterEdit = (key, event) => {
    //获得表头数据
    let vo=this.state.headData;
    //设置新的值
    vo[key]=event.target.value;
    //setstate
    this.setState(vo);
    console.log(this.state.headData);
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
            {
              tab.billitems.map((billitem, index) => {
                return <BillItem key={billitem.key} itemkey={billitem.key} itemname={billitem.title}
                  afterEdit={this.afterEdit}></BillItem>
              })
            }
          </TabPane>
        })}
      </Tabs>
      <button onClick={this.buttonClick}>button</button>
    </div>
  }

}




export default BillHead















