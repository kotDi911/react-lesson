import './App.css';
import React from "react";


const Home =(props) => {
    return <span>Home page</span>;
};

const News =(props) => {
    return <span>News page</span>;
};

const CallBack =(props) => {
    return <span>CallBack page</span>;
};

const Contacts =(props) => {
    return <span>Contacts page</span>;
};

class Nav extends React.Component {
    state = {active: true};

    handleListener(name) {
        this.setState({active: this.state.active = name});
        console.log(this.state.active)
    }
    render() {
        return <div>
            <div className= 'navigation'>
                <div className= 'btn' onClick={() => this.handleListener('home')}>Home</div>
                <div className= 'btn' onClick={() => this.handleListener('news')}>News</div>
                <div className= 'btn' onClick={() => this.handleListener('callBack')}>Callback</div>
                <div className= 'btn' onClick={() => this.handleListener('contacts')}>Contacts</div>
            </div>
            <span>{this.state.active}</span>
        </div>
    }
}

export default Nav;
