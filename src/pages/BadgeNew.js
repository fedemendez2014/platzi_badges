import React, { Component } from 'react';
import header from '../assets/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    render() {
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter}
                                avatarUrl="https://www.inmosenna.com/wp-content/uploads/2018/07/avatar-user-business-man-399587fe24739d5a-512x512-300x300.png"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} form={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;