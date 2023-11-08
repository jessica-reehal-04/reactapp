import {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Users from './Users';
import AddUser from './AddUser';
import Counter from './Counter';

export default class MainApp extends Component
{
    state={
        headerComp:"Header comp",
        users:[]
    }
    
    addUser=(data)=>{
    
        this.setState((p)=>{
            return{
                users:p.users.concat(data)
            };
        });
    };

    delete=()=>{
        this.setState(()=>{
            return{
                users:[]
            };
        });
    };
    render()
    {
       return(
        <div>
            <Header hd={this.state.headerComp}/>
            <Users users={this.state.users} da={this.delete} dl={this.state.users.length>0}/>
            <AddUser au={this.addUser}/>
            <Counter/>
            <Footer/>
        </div>
       )
    }
}



