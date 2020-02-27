import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import trash_icon from "./assets/trash_icon.png";
import Table from "react-bootstrap/Table";

export class Wishlist extends React.Component {
    constructor(props){
        super(props)
        this.state={list:this.props.list, newitem:null}
        this.addtoList = this.addtoList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteOne =  this.deleteOne.bind(this);
    }
    handleChange(e){
        this.setState({newitem:e.target.value})
    }
    addtoList(){
        this.state.list.push(this.state.newitem);
        this.setState({newitem:null})
        this.props.setWishLists(this.state.list);
    }
    deleteOne(item){
        let updatedItems = this.state.list.filter(oneItem =>
            item !== oneItem
         );
         console.log(updatedItems,item);
         this.setState({list:updatedItems, newitem:null})
         this.props.setWishLists(updatedItems);
    }
    render() {
        if(this.props.list != this.state.list){
            this.setState({list:this.props.list, newitem:null})}

        const wishlistitems =this.state.list ? this.state.list.map((wish)=><WishItem item = {wish} deleteOne = {(l)=>this.deleteOne(l)}/>):null;
        return (
<<<<<<< HEAD
            <div className="page page-main main">
                <Table bordered><thead className="thead"><tr><td>{this.props.person}</td></tr></thead>
                    <tbody className="tbody">
                    {wishlistitems}</tbody></Table>
                <div className="itemstyleobj">
=======
            <div className="styleobj page">
                <div>{this.props.person}</div>
                <ul>{wishlistitems}
                <li className="liststyle"><div className="itemstyleobj">
>>>>>>> e9136e72d35a890b992ade1467e6d47b0ccdb788
                    <p/>
                        <FormControl placeholder="Item"
                            aria-label="Member Name"
                            aria-describedby="basic-addon1"
                            value = {this.state.newitem}
                            onChange={e => this.handleChange(e)}
                        />
                        <Button onClick={this.addtoList}>ADD</Button>
                    </div>
            </div>
        );
    }
}
export class WishItem extends React.Component {
    constructor(props){
        super(props);
        if(props.item.length>50){
            this.item = props.item.substring(0,17)+" ...";
            this.state = {
                itemform:(<tr>
                            <td>{this.item}
                                <Button className="btn-table btn-delete" onClick={(e) => this.deleteitem(e, this.props.item)}>
                                    <img className="icon" src={trash_icon} alt="X"/>
                                </Button>
                            </td>
                        </tr>)
            }
        }
        else{
            this.item = props.item;
            this.state = {
                itemform:(<tr>
                            <td>{this.item}
                                <Button className="btn-table btn-delete" onClick={(e) => this.deleteitem(e, this.props.item)}>
                                    <img className="icon" src={trash_icon} alt="X"/>
                                </Button>
                            </td>
                        </tr>)
            }
        }
    }
    deleteitem(e,item){
        this.props.deleteOne(item)
    }
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
        return this.state.itemform
    }
}
