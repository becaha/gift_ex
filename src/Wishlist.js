import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";

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

        const wishlistitems =this.state.list ? this.state.list.map((wish)=><li className="liststyle"><WishItem item = {wish}/></li>):null;
        return (
            <div className="styleobj">
                <div>{this.props.person}</div>
                <ul>{wishlistitems}
                <li className="liststyle"><div className="itemstyleobj">
                    <p/>
                        <FormControl placeholder="Item"
                            aria-label="Member Name"
                            aria-describedby="basic-addon1"
                            value = {this.state.newitem}
                            onChange={e => this.handleChange(e)}
                        />
                        <Button onClick={this.addtoList}>ADD</Button>
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
