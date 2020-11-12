import React, { Component } from 'react';
import UserRow from '../UserRow/UserRow';

class List extends Component {
    mapListUsers = () => (
        this.props.data.map((value, key) => (
            // console.log(value)
            <UserRow item={value} id={key}/>
        ))
    )
    render() {
        console.log(this.props.data);
        return (
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
                            {this.mapListUsers()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default List;