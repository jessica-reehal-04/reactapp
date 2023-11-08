import {Component} from 'react';
import User from './User';


export default class Users extends Component
{
    render()
    {
       return(
        <div>
            {this.props.users.map((u)=><User u={u}/>)}
            <button disabled={!this.props.dl} onClick={this.props.da}>Delete All</button>
        </div>
       )
    }
}