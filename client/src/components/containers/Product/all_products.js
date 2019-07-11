import React, { Component } from 'react';
import {
    Button,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getProducts } from '../../../actions/productActions';
import PropTypes from 'prop-types';
import './all_product.scss'

class Product extends Component {
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { product } = this.props.product;
        return (
            <div>
                <div className="allProducts">
                    {product.map((product, index) => (
                        <div className='product' key={index}>
                            <CardImg top width="100%" src={product.productImage} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{product.title}</CardTitle>
                                <CardSubtitle>{product.description}</CardSubtitle>
                                <CardText>{product.previous_price}</CardText>
                                <CardText>{product.current_price}</CardText>
                                <Button color="success">Add to shopping list</Button>
                            </CardBody>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getProducts }
)(Product);
