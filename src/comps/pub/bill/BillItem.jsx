import React from 'react';



class BillItem extends React.Component {

    //itemname,itemkey,itemtype,ishow,editable

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value:null,
            displayvalue:null,

            oldVal:null
        }
    }

    handleChange=(event)=>{
        this.setState({
            value:event.target.value,
            displayValue:event.target.value
        })
    }

    afterEdit=(event)=>{
        // alert(event.target.value);
        // 当新旧val不相等时，出发编辑后事件
        if(this.state.value!=this.state.oldVal){
            if(this.props.afterEdit)//注册了该使事件
                this.props.afterEdit(this.props.itemkey,event);
        }
        this.setState({
            oldVal:event.target.value
        })
    }

    beforeEdit=(event)=>{
        if(this.props.beforeEdit)//注册了该使事件
            this.props.beforeEdit(this.props.itemkey,event);
    }

    itemStyle = {
        marginTop: 5,
    }

    render() {
        return <div className="ant-row ant-form-item ant-col-xs-6 ant-col-sm-6" style={this.itemStyle}>
            <div className="ant-col ant-form-item-label ant-col-xs-8">
                <label className="ant-form-item-required" >{this.props.itemname}</label>
            </div>
            <input className='ant-input ant-input-lg ant-col-xs-12' type="text"  itemkey={this.props.itemkey} 
             onChange={this.handleChange} 
             onFocus={this.beforeEdit}
             onBlur={this.afterEdit}>{this.state.displayvalue}</input>
        </div>
    }

}




export default BillItem