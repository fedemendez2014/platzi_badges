import React, { Component } from 'react';
import header from '../assets/platziconf-logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends Component {
    state = {
        loading: false,
        error: null,
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

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false, error: null });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                form={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;