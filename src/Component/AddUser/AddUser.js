import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            name: "",
            age: null,
            phone: ""
        }
    }

    onChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        });

        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.phone);
    }
    check = () => {
        if(this.props.status) {
            return (
                <div>
                    <div class="row" >
                        <div class="col-12">
                            <form class="border p-4">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Tên</label>
                                    <input type="text" class="form-control" name="name" onChange={ (event) => this.onChange(event) } id="formGroupExampleInput" placeholder="Nhập tên"/>
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Tuổi</label>
                                    <input type="text" class="form-control" name="age" onChange={ (event) => this.onChange(event) } id="formGroupExampleInput2" placeholder="Nhập tuổi"/>
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Số điện thoại</label>
                                    <input type="text" class="form-control" name="phone" onChange={ (event) => this.onChange(event) } id="formGroupExampleInput2" placeholder="Nhập số điện thoại"/>
                                </div>
                                <button type="button" onClick={() => this.props.addItem(this.state.name, this.state.age, this.state.phone)} class="btn btn-success" >Thêm mới</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                { this.check()}
            </div>
        );
    }
}

export default AddUser;