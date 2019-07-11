import React, { PureComponent } from 'react';
import fabric from 'fabric'
import { Canvas, Circle, Image, Path, Text } from 'react-fabricjs';
import '../style.scss';

export default class CanvasPath extends React.PureComponent {

    state = {
        position: {
            x: 0,
            y: 0
        }
    };

    changePosition = (e) => {
        console.log('e---', e)
        this.setState = {
            ...this.state.position,
            position: {
                x: e.target.x,
                y: e.target.y
            }
        }
    }

    componentDidUpdate(prevProps) {
        // console.log('prevProps.image-', prevProps)
        // console.log('this.props.image-', this.props.image)
        if (prevProps.image !== this.props.image) {
            this.updateCanvas()
        }
    }

    updateCanvas() {
        // const canvas = this.refs.canvas
        // const canvas = new fabric.Canvas('c');
        // const ctx = canvas.getContext("2d")
        // // ctx.rect(0, 0, 400, 550)
        // // ctx.stroke()
        // const image = new Image();
        // // image.onload = () => {
        // //     ctx.drawImage(image, this.state.position.x, this.state.position.y, 300, 200);
        // // }
        // image.src = this.props.image.imageUrl
        // // image.addEventListener("mouseover", this.changePosition)
        // // console.log('iamge--', image)
        // console.log('this.props.image-2-2-2-2-2-2-2-2-2-2-2', this.props.image.data.mainImage.size)
        // console.log('image.src-2-2', image)
        // // const imgElement = document.getElementById('my-image');
        // var imgInstance = new fabric.Image(image, {
        //     left: 100,
        //     top: 100,
        //     angle: 30,
        //     opacity: 0.85
        // });
        // canvas.add(imgInstance);

        return (<Canvas
            ref="canvas"
            width="400"
            height="550"
        >
            <Image
                ref="image"
                imgElement={this.props.image.imageUrl}
                width={100}
                height={100}
            />
        </Canvas>)
    }


    render() {
        return (
            <div className="canvas-main">
                {/* <canvas ref="canvas" width={400} height={550} id="c" /> */}
                {this.updateCanvas()}

                {/* <   img ref="image" src={this.props.cheese} alt="canvas" className="hidden" /> */}
            </div >
        )
    }
}

