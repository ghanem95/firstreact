import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
export default class EditUsers extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            users: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/list/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            date: this.state.date
        }
        console.log(exercise)

        axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, exercise)
            .then(res => console.log(res.data));
        window.location = '/users/list';
    }
    render() {
        return (
            <div>
                <p>Edit Exercises Log</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User name:</label>
                        <input type="text" required className="form-control"
                            value={this.state.username} onChange={this.onChangeUsername}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}