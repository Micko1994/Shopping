import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { getProducts, addProduct, changeProduct, deleteProduct } from '../../../actions/productActions';
import PropTypes from 'prop-types';

class Product extends Component {
    state = {
        title: '',
        productImage: '',
        description: '',
        previous_price: '',
        current_price: '',
        file: null
    };


    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

    // componentDidMount() {
    //     this.props.getProducts();
    // }



    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onChangeFile = e => {
        this.setState({ file: e.target.files[0] })
    }

    onSubmit = e => {
        e.preventDefault();

        const newProduct = {
            title: this.state.title,
            description: this.state.description,
            previous_price: this.state.previous_price,
            current_price: this.state.current_price,
        };
        this.fileUpload(this.state.file)
            .then((response) => {
                console.log(response.data);
            })



        // Add item via addItem action
        this.props.addProduct(newProduct);

        console.log("amssmkl-", this.props)
        console.log("newProduct-", newProduct)

    };






    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for='title'>Title</Label>
                        <Input
                            type='text'
                            name='title'
                            id='title'
                            placeholder='Product Title'
                            onChange={this.onChange}
                        />
                        <Label for='productImage'>productImage</Label>
                        <Input
                            type='file'
                            name='productImage'
                            id='productImage'
                            placeholder='Product image Path'
                            onChange={this.onChangeFile}
                        />
                        <Label for='description'>description</Label>
                        <Input
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Product Description'
                            onChange={this.onChange}
                        />
                        <Label for='previous_price'>previous_price</Label>
                        <Input
                            type='text'
                            name='previous_price'
                            id='previous_price'
                            placeholder='Product previous_price'
                            onChange={this.onChange}
                        />
                        <Label for='current_price'>current_price</Label>
                        <Input
                            type='text'
                            name='current_price'
                            id='current_price'
                            placeholder='Product current_price'
                            onChange={this.onChange}
                        />
                        <Button color='dark' style={{ marginTop: '2rem' }} block>
                            Add Product
                        </Button>
                    </FormGroup>
                </Form>
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
    { getProducts, addProduct, changeProduct, deleteProduct }
)(Product);



// import React, { Fragment, useState, Component } from 'react';
// import Message from './Message';
// import Progress from './Progress';
// import { connect } from 'react-redux';
// import { addProduct } from '../../../actions/productActions';
// import axios from 'axios';

// class FileUpload extends Component {

//     // const [file, setFile] = useState('');
//     // const [filename, setFilename] = useState('Choose File');
//     // const [uploadedFile, setUploadedFile] = useState({});
//     // const [message, setMessage] = useState('');
//     // const [uploadPercentage, setUploadPercentage] = useState(0);

//     // const onChange = e => {
//     //     setFile(e.target.files[0]);
//     //     setFilename(e.target.files[0].name);
//     // };


//     toggle = () => {
//         this.setState({
//             modal: !this.state.modal
//         });
//     };

//     onChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };
//     onSubmit = e => {
//         e.preventDefault();
//         const formData = new FormData();
//         // formData.append('file', file);

//         // try {


//         // 
//         // export const addProduct = product => (dispatch, getState) => {
//         //     axios
//         //         .post('/api/product', product, tokenConfig(getState))
//         //         .then(res =>
//         //             dispatch({
//         //                 type: ADD_PRODUCT,
//         //                 payload: res.data
//         //             })
//         //         )
//         //         .catch(err =>
//         //             dispatch(returnErrors(err.response.data, err.response.status))
//         //         );
//         // };



//         this.props.addProduct(formData)

//         // const res = await axios.post('/api/product', formData, {
//         //     headers: {
//         //         'Content-Type': 'multipart/form-data'
//         //     },
//         //     onUploadProgress: progressEvent => {
//         //         setUploadPercentage(
//         //             parseInt(
//         //                 Math.round((progressEvent.loaded * 100) / progressEvent.total)
//         //             )
//         //         );

//         //         // Clear percentage
//         //         setTimeout(() => setUploadPercentage(0), 10000);
//         //     }
//         // });

//         const { fileName, filePath } = this.props.data;

//         // setUploadedFile({ fileName, filePath });

//         // setMessage('File Uploaded');
//         // } catch (err) {
//         //     if (err.response.status === 500) {
//         //         setMessage('There was a problem with the server');
//         //     } else {
//         //         setMessage(err.response.data.msg);
//         //     }
//         // }
//     };
//     render() {

//         return (
//             <Fragment>
//                 {/* {message ? <Message msg={message} /> : null} */}
//                 <form onSubmit={onSubmit}>
//                     <div className='custom-file mb-4'>
//                         <input
//                             type='file'
//                             className='custom-file-input'
//                             id='customFile'
//                             onChange={onChange}
//                         />
//                         <label className='custom-file-label' htmlFor='customFile'>
//                             {filename}
//                         </label>
//                     </div>

//                     {/* <Progress percentage={uploadPercentage} /> */}

//                     <input
//                         type='submit'
//                         value='Upload'
//                         className='btn btn-primary btn-block mt-4'
//                     />
//                 </form>
//                 {/* {
//                     uploadedFile ? (
//                         <div className='row mt-5'>
//                             <div className='col-md-6 m-auto'>
//                                 <h3 className='text-center'>{uploadedFile.fileName}</h3>
//                                 <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
//                             </div>
//                         </div>
//                     ) : null
//                 } */}
//             </Fragment >
//         );
//     };
// }



// const mapStateToProps = state => ({
//     product: state.product,
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//     mapStateToProps,
//     { addProduct }
// )(FileUpload);