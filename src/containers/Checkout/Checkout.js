import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'

class Checkout extends Component {

    // state = {
    //     ingredients: null,
    //     price: 0

    // }
    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search)
    //     let ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if(param[0] === 'price'){
    //             price = param[1]
    //         }else{
    //             ingredients[param[0]] =+ param[1]
    //         }
           
    //     }
    //     this.setState({
    //         ingredients: ingredients,
    //         totalPrice: price
    //     })
    // }

    componentWillMount() {
        this.props.onInitPurchase()
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }


    render() {
        let summary = <Redirect to='/' />
        if (this.props.ings) {
            summary = (
                <div>
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled = {this.checkoutCancelledHandler}
                        checkoutContinued = {this.checkoutContinuedHandler}
                    />
                    <Route
                    path={this.props.match.path + '/contact-data'}
                // render={(props) => (<ContactData ingredients = {this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
                            component={ContactData} />
                </div>
            )
        }
        return summary 
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(action.purchaseInit())
    }
}
export default connect(mapStateToProps)(Checkout);