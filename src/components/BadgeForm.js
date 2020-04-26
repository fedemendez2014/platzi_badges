import React, { Component } from 'react';

class BadgeForm extends Component {
    handleClick = event => {

    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" type="text" name="firstName"
                            onChange={this.props.onChange} value={this.props.form.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control" type="text" name="lastName"
                            onChange={this.props.onChange} value={this.props.form.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email"
                            onChange={this.props.onChange} value={this.props.form.email} />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input className="form-control" type="text" name="jobTitle"
                            onChange={this.props.onChange} value={this.props.form.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input className="form-control" type="text" name="twitter"
                            onChange={this.props.onChange} value={this.props.form.twitter} />
                    </div>
                    <button className="btn btn-primary"
                        onClick={this.handleClick}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;