import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

export class Wishlist extends React.Component {
    constructor(props){
        super(props)
        this.state={list:this.props.list, newitem:null}
        this.addtoList = this.addtoList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({newitem:e.target.value})
    }
    addtoList(){
        console.log("add",this.state.newitem);
        this.state.list.push(this.state.newitem);
        this.setState({newitem:null})
        this.props.setWishLists(this.state.list);
    }
    render() {
        if(this.props.list != this.state.list){
            this.setState({list:this.props.list, newitem:null})}
        
        const styleobj = {
            padding:"40px",
            font: "Maiandra GD",
            color: '#116661',
            fontSize:"30px",
            height:'100%'
        }
        const liststyle = {
            listStyleType: "none",

        }
        const itemstyleobj = {
            margin:"20px",
            padding:"5px",
            borderWidth:"3px",
            borderStyle:"solid",
            borderRadius:"3px",
            textAlign:'center',
            width:"150px",
            height:"150px",
            float:"left",
            fontSize:"20px"
        }
        const wishlistitems =this.state.list ? this.state.list.map((wish)=><li style={liststyle}><WishItem item = {wish}/></li>):null;
        return (
            <div style = {styleobj}>
                <div>{this.props.person}</div>
                <ul>{wishlistitems}
                <li style={liststyle}><div style ={itemstyleobj}>
                    <p/>
                        <FormControl placeholder="Item"
                            aria-label="Member Name"
                            aria-describedby="basic-addon1"
                            value = {this.state.newitem}
                            onChange={e => this.handleChange(e)}
                        />
                        <button onClick={this.addtoList}>ADD</button>
                    </div>
                </li>
                </ul>
            </div>  
        );
    }
}
export class WishItem extends React.Component {
    render(){
        const itemstyleobj = {
            margin:"20px",
            padding:"5px",
            borderWidth:"3px",
            borderStyle:"solid",
            borderRadius:"3px",
            textAlign:'center',
            width:"150px",
            height:"150px",
            float:"left",
            fontSize:"20px"
        }
        return(
            <div style={itemstyleobj}>
                <p>{this.props.item}</p>
            </div>
        )
    }
}
