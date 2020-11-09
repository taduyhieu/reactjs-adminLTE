import React, { Component } from 'react';
import AddUser from '../AddUser/AddUser'
   
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: true,
            add: false
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
        this.setState({
            add: !this.state.add
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
                            <div class="input-group">
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                                <div class="input-group-append">
                                <button type="button" class="btn btn-success">Tìm kiếm</button>
                                </div>
                            </div>
                            
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                                <td>New York</td>
                                                <td>61</td>
                                                <td>2012/12/02</td>
                                                <td>$372,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        
                    
                        <div class="col-4">
                            { this.addUser() }
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Content;