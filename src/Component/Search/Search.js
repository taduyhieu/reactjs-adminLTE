import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ""
        }
    }
    onChange = (event) => {
    //     this.setState({
    //         temp: event.target.value
    //     });
        this.props.keyword(event.target.value);    
    }

    check = () => {
        if(this.props.showForm === true){
            return (
                <button type="button" class="btn btn-secondary" onClick={() => this.props.status()} >Thu lại</button>
            )
        } else {
            return(
                <button type="button" class="btn btn-primary ml-1" onClick={() => this.props.status()} >Thêm mới</button>
            )
        }
    }
    render() {
        return (
            <div>
            <div class="input-group">
                <input type="text" class="form-control" name="key_word" onChange={(event) => this.onChange(event)} aria-label="Amount (to the nearest dollar)"/>
                <div class="input-group-append">
                <button type="button" class="btn btn-success" onClick={ () => this.props.keyword(this.state.temp)}>Tìm kiếm</button>
                </div>
                
            </div>
            <br/>
            <br/>
            {this.check()}
            
            </div>
        );
    }
}

export default Search;