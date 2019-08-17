import React, {Component} from 'react';

export default class Parent extends Component {
    render() {
        return(
            <div>
            <Child1 onRef={this.onRef} />
                <Child onRef={this.onRef} />
                <button onClick={this.click} >click</button>
            </div>
        )
    }

    onRef = (ref) => {
        this.a = ref
    }

    click = (e) => {
        this.a.myName()
    }

}

class Child extends Component {
    componentDidMount(){
        this.props.onRef(this)
    }

    myName = () => alert('Child')

    render() {
        return ('Child')
    }
}

class Child1 extends Component {
    componentDidMount(){
        this.props.onRef(this)
    }

    myName = () => alert('Child1')

    render() {
        return ('Child1')
    }
}