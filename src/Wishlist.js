import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import trash_icon from "./assets/trash_icon.png";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";

export class Wishlist extends React.Component {
    constructor(props){
        super(props)
        this.state={list:this.props.list, newitem:null,show:false}
        this.addtoList = this.addtoList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteOne =  this.deleteOne.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }
    handleChange(e){
        this.setState({newitem:e.target.value})
    }
    addtoList(){
        this.handleClose();
        var newlist = this.state.list
        if(newlist == null){
            newlist=[this.state.newitem]
        }
        else newlist.push(this.state.newitem);
        this.setState({list:newlist,newitem:null})
        this.props.setWishLists(newlist);
    }
    deleteOne(item){
        console.log(item);
        let updatedItems = this.state.list.filter(oneItem =>
            item !== oneItem
         );
         console.log(updatedItems);
         this.setState({list: updatedItems, newitem:null});
         console.log("deleted", this.state.list);
         this.props.setWishLists(updatedItems);
    }
    render() {
        if(this.props.list !== this.state.list){
            this.setState({list:this.props.list, newitem:null})}
        const style = {minHeight : window.innerHeight};
        const wishlistitems =this.props.list ? this.props.list.map((wish)=><WishItem id = {wish} item = {wish} deleteOne = {(l)=>this.deleteOne(l)}/>):null;
        return (
            <div className="page background page-main" >
                <div className="main" style ={style}>
                <Table bordered ><thead className="thead table-title"><tr><td>{this.props.person}</td></tr></thead>
                    <tbody className="tbody">
                    {wishlistitems}</tbody></Table></div>
                <div className="sidebar-right">
                    <Button onClick={this.handleShow}>Add</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormControl
                                placeholder="New Item"
                                aria-label="New Item"
                                aria-describedby="basic-addon1"
                                onChange={e => this.handleChange(e)}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-modal" onClick={this.addtoList}>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
export class WishItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {item: props.item, itemform:null}
        this.deleteitem= this.deleteitem.bind(this);
    }
    deleteitem(e,item){
        this.props.deleteOne(item)
    }
    render(){
        var newitemform = (<tr>
            <td>{this.props.item}
                <Button className="btn-table btn-delete" onClick={(e) => this.deleteitem(e, this.props.item)}>
                    <img className="icon" src={trash_icon} alt="X"/>
                </Button>
            </td>
        </tr>)
        return newitemform
    }
}
