import React, { Component } from 'react';
import AddUser from '../AddUser/AddUser'
import List from '../List/List';
import Search from '../Search/Search';
   
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: true,
            add: false,
            status: false,
            list: this.props.data
        }
    }

    showButton = () => (
        <button type="button" onClick={ () => this.editClick() } className="btn btn-sm btn-success">Edit</button>
    )

    showEdit = () => (
        <div>
        <input type="text" ref={(dulieunhap) => {this.trunggian = dulieunhap }} defaultValue={this.props.title} className="form-control" placeholder="Recipient's username"></input>
        <button type="button" onClick={ () => this.saveClick() } className="btn btn-sm btn-success">Save</button>
        </div>
    )

    keyword = (key_word) => {
        let result = [];
        this.props.data.forEach((item) => {
            if(item.name.indexOf(key_word) > -1){
                result.push(item);
            }
        })
        this.setState({
            list: result
        })       
    }

    displayCheck = () => {
        if (this.state.edit == true) {
           return this.showButton(); 
        } else {
            return this.showEdit();
        }
    }

    editClick = () => {
        this.setState({edit: false});
    }

    saveClick = () => {
        this.setState({edit: true});
        console.log(this.trunggian.value);
    }
    changeState = () => {
        console.log("c<UserRow item={value} id={key}/>hange status");
        console.log(this.state.add);
        this.setState({
            add: !this.state.add
        })
    }

    addItem = (name, age, phone) => {
        let item = {
            "name": name,
            "age": age,
            "phone": phone,
        }
        this.state.list.push(item);
        this.setState({
            list: this.state.list
        })
    }

    addUser = () => {
        if(!this.state.add){
            return (
                <div>
                    <br/>
                    <button type="button" class="btn btn-primary" onClick={ () => this.changeState()} >Thêm mới</button>
                    <br/>
                    <br/>
                </div>
            )
        } else {
            return (
                <div>
                    <br/>
                    <button type="button" class="btn btn-secondary" onClick={ () => this.changeState()} >Thu lại</button>
                    <br/>
                    <br/>
                    <div class="row" >
                        <div class="col-8">
                            <form class="border p-4">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Example label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Another label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                                </div>
                                <button type="button" class="btn btn-success">Thêm mới</button>
                            </form>
                        </div>
                    </div>
                </div>
            )

        }
    }

    render() {
        return (
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <h1 class="mt-4">Tables</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active">Tables</li>
                            </ol>
                            <Search status={ () => this.changeState()} keyword={ (key_word) => this.keyword(key_word)} showForm={this.state.add }/>
                            
                            <List data={ this.state.list }/>
                        </div>
                        <AddUser status={this.state.add} addItem={(name, age, phone) => this.addItem(name, age, phone)}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default Content;