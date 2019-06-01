import React, { PureComponent } from 'react';

import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';
import {
    Container
} from 'reactstrap';

export default class Order extends PureComponent {
    render() {
        return (
            <Container>
                <ItemModal />
                <ShoppingList />
            </Container >
        )
    }
}