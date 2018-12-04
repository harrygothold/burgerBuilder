import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '', 
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Harry G',
                address: {
                    street: 'Teststreet 1',
                    postcode: 'EC1M 5AU',
                    country: 'United Kingdom'
                },
                email: 'test@test.com'
            },
            deliverMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({loading: false});
        })

    }

    render() {
        let form = (                
        <form>
            <Input inputtype='input' type="text" name="name" placeholder="Your name" />
            <Input inputtype='input' type="email" name="email" placeholder="Your email" />
            <Input inputtype='input' type="text" name="street" placeholder="Street" />
            <Input inputtype='input' type="text" name="postal" placeholder="PostCode" />
            <Button btnType='Success' clicked={this.orderHandler}>ORDER NOW</Button>
        </form>);
        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;