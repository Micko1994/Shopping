import React, {
    PureComponent
} from 'react';
import ColorList from './components/colorList'
import './style.scss';
import Images from './components/images'
import OrderMainViewModel from '../../../platform/create/view-model'
import Settings from './components/Setings'
import CanvasPath from './components/canvas'
import shirt from '../../../assets'

export default class Create extends PureComponent {
    state = {
        data: new OrderMainViewModel(),
        tShirtColor: shirt.white_front,
        imageUrl: null
    }
    getMainImages = (images, imageUrl) => {
        // console.log('this.stat in index--1-imageUrl-', imageUrl)
        const data = this.state.data;
        data.mainImage = images.mainImage;
        // this.setState({
        //     data,
        // });
        this.setState({
            data: {
                ...this.state.data,
                mainImage: images.mainImage,
            },
            imageUrl
        })
        // console.log('this.stat in index-images --imageUrl-', this.state.imageUrl)
    }

    handleTShirtColor = (e) => {
        this.setState({
            tShirtColor: shirt[e.target.id]
        })
    }
    render() {
        // console.log('this.stat in index--2--', this.state)
        // console.log('shirt-2-2-2-3-33-', shirt)
        const { imageUrl, data } = this.state
        const Imagedata = { imageUrl, data }
        return (
            <div className='main' >
                <div className='contain' >
                    <div className="product">
                        <img
                            src={this.state.tShirtColor}
                            alt={"img-art-shirt"}
                        />
                        <CanvasPath image={Imagedata} />
                    </div >
                    <div >

                    </div>
                    <div className='add-image-button' >
                        <Images
                            output={this.getMainImages}
                        />
                    </div >
                    <div className="line" />
                </div>
                <div className="tShirtInfo" >
                    <label >
                        Change Settings
                    {/* <ColorList /> */}
                        {/* <Colors /> */}
                    </label>
                    <Settings
                        color={this.handleTShirtColor}
                    />
                </div >
            </div>
        )
    }
}