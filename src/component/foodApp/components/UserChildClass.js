import React from 'react';

class UserChildClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                location: '',
                name: 'user'
            }
        }
        console.log('Child class constructor called '+ this.props.name);
    };

    async componentDidMount(){ // useEffect(() => {}, []); only once
         console.log('child class componentDidMount constructor called '+ this.props.name);
        const data = await fetch('https://api.github.com/users/pallavidule');
        const result = await data.json();

        this.setState({
            userInfo: result
        })

        this.timer = setInterval(() => {
            console.log('SetInterval in componentDidMount');
        }, 2000);
    }

    componentDidUpdate() {
        console.log('component did update called'); // useEffect(() => {}, [dep]);
    }

    componentWillUnmount(){
        console.log('component will unmount was called');
        clearInterval(this.timer);
    }

    render(){
        const {name} = this.props;
        const {location, url, avtar_url} = this.state.userInfo;

        console.log('child class render method class '+ this.props.name);
        return (
        <div className="user-card border rounded-lg bg-amber-50 m-4 px-2">
            <h1 className='font-bold'>Name : {name}</h1>
            <h2>Location: {location}, Germany.</h2>
            <h2> my github profile: {url}</h2>
            <h6>This is class component, count: {this.state.count}</h6>
            <button 
                onClick={() => this.setState({
                    count: this.state.count+1
                })}
            > counter button
            </button>
        </div>)
    }
}

export default UserChildClass;

