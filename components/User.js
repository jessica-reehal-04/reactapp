import {Component} from 'react';


export default class User extends Component
{
    render()
    {
       return(
        <div>
           {this.props.u}
        </div>
       )
    }
}