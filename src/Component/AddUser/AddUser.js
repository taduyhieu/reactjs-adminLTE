import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
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
        );
    }
}

export default AddUser;