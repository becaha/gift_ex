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
        if(this.props.list !== this.state.list){
            this.setState({list:this.props.list, newitem:null})}
        const style = {minHeight : window.innerHeight,width:"80%"}
        const wishlistitems =this.props.list ? this.props.list.map((wish)=><WishItem id = {wish} item = {wish} deleteOne = {(l)=>this.deleteOne(l)}/>):null;
        const style2 = {position:'fixed',right:"30px",width:"15%"}
        return (
            <div className="page page-main main" >
                <div style = {style}>
                <Table bordered ><thead className="thead table-title"><tr><td>{this.props.person}</td></tr></thead>
                    <tbody className="tbody">
                    {wishlistitems}</tbody></Table></div>
                <div className="sidebar-right" style={style2}>
                    <Button onClick={this.handleShow}>Add</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormControl
                                placeholder="Member Name"
                                aria-label="Member Name"
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
