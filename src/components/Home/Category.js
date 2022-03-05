import React, { Component } from 'react';
import Photos from '../../Photos';
import {Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchPhotos, fetchComments} from '../../redux/actionCreator';
import Loading from './Loading';
import { Alert } from 'reactstrap';
import PhotoDetail from './PhotoDetail';

const mapStateToProps = state => {
    return {
        photos: state.photos,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (photoId, rating, author, comment) => dispatch(addComment(photoId, rating, author, comment)),
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Category extends Component {
    state = {
        selectedPhoto: null,
        modalOpen: false
    }

    onPhotoSelect = photo => {
        this.setState({
            selectedPhoto: photo,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
       this.props.fetchPhotos();
       this.props.fetchComments();
    }

    render() {
        if (this.props.photos.isLoading) {
            return (
                <Loading/>
            );
        }

        else if (this.props.photos.errMess != null) {
            return (
                <Alert color='danger'>Error Loading</Alert>
            );
        }
        
        else {
            const menu = this.props.photos.photos.map(item => {
                return (
                    <Photo
                        photo={item}
                        key={item.id}
                        PhotoSelect={() => this.onPhotoSelect(item)}
                    />
                );
            })

            let photoDetail = null;
            if (this.state.selectedPhoto != null) {
                const comments = this.props.comments.comments.filter(comment => comment.photoId === this.state.selectedPhoto.id
                )
                photoDetail = <PhotoDetail
                    photo={this.state.selectedPhoto}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentsIsLoading = {this.props.isLoading} />
            }
            return (
                <div className="container">
                    <div className="row">
                        <div className='row justify-content-md-center"'>
                            {menu}
                        </div>
                        <Modal  style={{scrollable:"true"}} isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {photoDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);