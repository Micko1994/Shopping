import React, { PureComponent } from 'react';
import '../style.scss';
import shirt from '../../../../assets'
import { shirtColor } from '../../../../assets'




const ShirtsColors = shirtColor
const SizeList = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '4XL']
const TypeList = ['long', 'short']
const SideList = ['front', 'back']



// const Settings = ({ color }) => {

export default class Settings extends React.PureComponent {

    state = {
        isChoosenSize: false,
        isChoosenColor: false,
        isChoosenType: false,
        side: 'front'
    };

    onChooseSize = (size) => {
        this.setState({ isChoosenSize: size })
    };

    onChooseColor = (color) => {
        this.setState({ isChoosenColor: color })
    };

    onChooseType = (type) => {
        this.setState({ isChoosenType: type })
    };

    onChooseSide = (side) => {
        this.setState({ side })
        // this.props.color
    };

    generateSize = () => (
        SizeList.map((size, index) => (
            <li
                className={size === this.state.isChoosenSize ? 'selected' : ''}
                key={index}
                onClick={() => this.onChooseSize(size)}
            >
                {size}
            </li>
        ))
    );
    generateType = () => (
        TypeList.map((type, index) => (
            <li
                className={type === this.state.isChoosenType ? 'selected' : ''}
                key={index}
                onClick={() => this.onChooseType(type)}
            >
                {type}
            </li>
        ))
    );

    generateSide = () => (
        SideList.map((side, index) => (
            <li
                className={side === this.state.side ? 'selected' : ''}
                key={index}
                onClick={() => this.onChooseSide(side)}
            >
                {side}
            </li >
        ))
    );

    // func = (color) => {
    //     this.onChooseColor(color)
    //     this.props.handleTShirtColor
    // }

    render() {
        console.log('Object.keys(shirt)-', Object.keys(shirt))
        console.log('this.state---111---', this.state)
        console.log('shirtColor---111---', shirtColor)
        return (
            <div>
                <p>Choose Shirt color</p>
                <div className="shirtsColors">
                    {ShirtsColors.map(shirtColor => (
                        <div className="shirtsColorsItem"
                            key={shirtColor}
                            onClick={this.props.color}
                            id={`${shirtColor}_${this.state.side}`}
                            style={{ backgroundColor: shirtColor }}
                        >
                            {/* <div
                                className="shirtsColorsItem-second"
                                onClick={() => this.onChooseColor(shirtColor)}
                            /> */}
                        </div>
                    ))}
                </div>
                <div className="chooseSize">
                    <p>Choose Shirt Side</p>
                    <ul className="product_sizes_list">
                        {this.generateSide()}
                    </ul>
                </div>
                <div className="chooseSize">
                    <p>Choose Shirt Size</p>
                    <ul className="product_sizes_list">
                        {this.generateSize()}
                    </ul>
                </div>
                <div className="chooseSize">
                    <p>Choose Shirt Type</p>
                    <ul className="product_sizes_list">
                        {this.generateType()}
                    </ul>
                </div>
            </div >
        )
    }
}

