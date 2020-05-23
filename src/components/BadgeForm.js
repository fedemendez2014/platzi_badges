import React, { Component } from 'react';

class BadgeForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
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
                    <button className="btn btn-primary">Save</button>
                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;