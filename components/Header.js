import {Component} from 'react';


export default class Header extends Component
{
    render()
    {
       return(
        <div>
            <h2>Header {this.props.hd}</h2>
        </div>
       )
    }
}
