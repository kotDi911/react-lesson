import './App.css';
import React from "react";

//
// const Home = () => {
//     return <span>Home page</span>;
// };
//
// const News = () => {
//     return <span>News page</span>;
// };
//
// const CallBack = () => {
//     return <span>CallBack page</span>;
// };
//
// const Contacts = () => {
//     return <span>Contacts page</span>;
// };
//
// class Nav extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {currentPage: ''};
//         this.page = '';
//     }
//
//     handleListener(name) {
//         this.setState({currentPage: this.state.currentPage = name});
//         if (name === 'home') {
//             this.page = <Home/>
//         }
//         if (name === 'news') {
//             this.page = <News/>
//         }
//         if (name === 'callBack') {
//             this.page = <CallBack/>
//         }
//         if (name === 'contacts') {
//             this.page = <Contacts/>
//         }
//         console.log(this.state.currentPage)
//     }
//
//     render() {
//         return <div>
//             <div className='navigation'>
//                 <div className='btn' onClick={() => this.handleListener('home')}>Home</div>
//                 <div className='btn' onClick={() => this.handleListener('news')}>News</div>
//                 <div className='btn' onClick={() => this.handleListener('callBack')}>Callback</div>
//                 <div className='btn' onClick={() => this.handleListener('contacts')}>Contacts</div>
//             </div>
//             {this.page}
//         </div>
//     }
// }

const Page = (props) => {
    return <span>{props.name} page</span>;
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: ''};
        this.page = '';
    }

    handleListener(name) {
        this.setState({currentPage: this.state.currentPage = name});
        this.page = <Page name = {name[0].toUpperCase() + name.slice(1)}/>;
        console.log(this.state.currentPage)
    }

    render() {
        return <div>
            <div className='navigation'>
                <div className='btn' onClick={() => this.handleListener('home')}>Home</div>
                <div className='btn' onClick={() => this.handleListener('news')}>News</div>
                <div className='btn' onClick={() => this.handleListener('callBack')}>Callback</div>
                <div className='btn' onClick={() => this.handleListener('contacts')}>Contacts</div>
            </div>
            {this.page}
        </div>
    }
}

export default Nav;