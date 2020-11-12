import React, { Component } from 'react';

class UserRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.age}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.phone}</td>
            </tr>
        );
    }
}

export default UserRow;