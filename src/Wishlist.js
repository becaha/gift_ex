import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

export class Wishlist extends React.Component {
    constructor(props){
        super(props)
        this.newitem = null;
        this.state={list:this.props.list}
        this.addtoList = this.addtoList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.newitem = e.target.value
    }
    addtoList(){
        console.log("add",this.newitem)
        this.state.list.push(this.newitem)
        this.newitem=null;
    }
    render() {
        const styleobj = {
            padding:"40px",
            font: "Maiandra GD",
            color: '#116661',
            fontSize:"30px"
        }
        const liststyle = {
            listStyleType: "none",

        }
        const itemstyleobj = {
            margin:"20px",
            borderWidth:"3px",
            borderStyle:"solid",
            borderRadius:"3px",
            maxWidth:"150px",
            float:"left",
            fontSize:"20px"
        }
        const wishlistitems = this.state.list.map((wish)=><li style={liststyle}><WishItem item = {wish}/></li>)
        return (
            <div style = {styleobj}>
                <div>{this.props.person}</div>
                <ul>{wishlistitems}
                <li style={liststyle}><div style ={itemstyleobj}>
                        <FormControl placeholder="Item"
                            aria-label="Member Name"
                            aria-describedby="basic-addon1"
                            onChange={e => this.handleChange(e)}
                        />
                        <button onClick={this.addtoList}>ADD</button>
                    </div></li></ul>
            </div>  
        );
    }
}
export class WishItem extends React.Component {
    render(){
        const itemstyleobj = {
            margin:"20px",
            borderWidth:"3px",
            borderStyle:"solid",
            borderRadius:"3px",
            maxWidth:"150px",
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
