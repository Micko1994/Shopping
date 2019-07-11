import React, { PureComponent } from 'react';
import '../style.scss';
import ImageUpload from './ImageUpload';

export default class Create extends PureComponent {
    state = {
        data: {
            mainImage: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.mainImage && nextProps.mainImage !== this.state.data.mainImage)) {
            const data = {
                mainImage: nextProps.mainImage,
            };
            this.setState({ data });
        }
    }

    setFile = (key, file, imageUrl) => {
        const data = this.state.data;
        data[key] = file;
        this.setState({ data }, () => {
            this.props.output && this.props.output(data, imageUrl);
        });
        // console.log('in setfile-imageUrl', data)
    }

    render() {
        const { mainImage } = this.state;
        return (
            <div className="G-flex G-justify-between">
                <div className="G-w-30">
                    <ImageUpload
                        imageUrl={mainImage}
                        uniqueKey="mainImage"
                        output={(file, imageUrl) => this.setFile('mainImage', file, imageUrl)}
                    />
                </div>
            </div>
        )
    }
}