import React, {useState, useEffect} from 'react';
import UserChildClass from './UserChildClass';
import { UserContext } from '../utils/UserContext';

const FunUser = (props) => {
    const [count, setCount] = useState(0);


   // console.log('Child functional component called');

   useEffect(() => {
        console.log('Use Effect of UserParent file : FunUser. called once');

        return(() => {
            console.log('Use Effect of UserParent file : FunUser.Component should unmount/deregister.')
        })
   },[])

    return (
        <div className="user-card border rounded-lg bg-amber-50 m-4 px-2">
            <h1 className='font-bold'>Name : {props.name}</h1>
            <h2>Location: Colonge, Germany</h2>
            <h6>This is function component, count: {count}</h6>
            <button onClick={() => setCount(count+1)}>counter button</button>
        </div>
    );
}

class UserParent extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Parent constructor called');
    }

    componentDidMount() {
       //  console.log('Parent componentDidMount called');
    }

    render() {
        // console.log('parent render called');
        return (
            <>
                <UserContext.Consumer>
                    {(({loggedUser}) => 
                        (<p>{loggedUser} from userContext in class component</p>)
                    )}
                </UserContext.Consumer>
                <h2>This is my food app user page.</h2>
                <FunUser name='Pallavi Dule' />
                <UserChildClass name='Pallavi Dule' />
            </>
        )
}};

export default UserParent;