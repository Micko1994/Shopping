import React, { Component } from 'react';
import classnames from 'classnames';

export default class ImageUpload extends Component {

    state = {
        showImage: false,
        imageUrl: null,
        uniqueId: null,
    }

    input = React.createRef();

    componentDidMount() {
        const uniqueId = `App-file-upload-${new Date().getTime()}-${this.props.uniqueKey || ''}`;
        this.setState({ uniqueId });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.imageUrl && nextProps.imageUrl !== this.state.imageUrl) {
            this.setState({
                showImage: true,
                imageUrl: nextProps.imageUrl
            })
        }
    }

    fileSelectedHandler = file => {
        if (file.target && file.target.files && file.target.files[0]) {
            const READER = new FileReader();
            const IMG = file.target.files[0];
            // console.log('file.target-', file.target.files)
            READER.readAsDataURL(IMG);
            READER.onload = () => {
                this.setState({
                    showImage: true,
                    imageUrl: READER.result
                })

                // console.log('this.state. in upload', this.state)
                // IMG.imageUrl = this.state.imageUrl
                this.props.output && this.props.output(IMG, this.state.imageUrl);
            };
            // console.log('IMG-', IMG)
        }
    }

    deletePhoto = () => {
        this.input.current.value = null;
        this.setState({
            showImage: false,
            imageUrl: null
        });
        this.props.output(null);
    }

    render() {
        const { showImage, imageUrl, uniqueId } = this.state;
        const { error } = this.props;
        // console.log('showImage-', showImage)
        // console.log('this.input-', this.input)
        // console.log('uniqueId-', uniqueId)
        // console.log('this.props-', this.props)
        // console.log('this.state-99--', this.state)
        // console.log('imageUrl-', imageUrl)
        return (
            <div className={classnames("App-image-upload-component", { "G-error": error })}>
                <input type="file" id={uniqueId} ref={this.input} onChange={this.fileSelectedHandler} />
                <div className="App-image-upload">
                    {!showImage ?
                        <label htmlFor={uniqueId}>
                            {this.props.children ||
                                <p>Select image</p>}
                        </label> :
                        <div className="App-uploaded-image">
                            <div className="image" />
                            <div className="opacity">
                                <h4 onClick={this.deletePhoto}>DELETE</h4>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}