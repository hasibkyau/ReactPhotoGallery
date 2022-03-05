import React, { Component } from 'react';
import Photo from './Photo';
import { ButtonGroup, Modal, ModalBody, ModalFooter, Button, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchPhotos, fetchComments } from '../../redux/actionCreator';
import Loading from '../Template/Loading';
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

class Photos extends Component {
    state = {
        selectedPhoto: null,
        modalOpen: false,
        category : "all",
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

    handleCategory = (event, p) => {    
        this.setState({
            category: p,
        })
        
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchComments();
    }

    render() {
        if (this.props.photos.isLoading) {
            return (
                <Loading />
            );
        }

        else if (this.props.photos.errMess != null) {
            return (
                <Alert color='danger'>Error Loading</Alert>
            );
        }

        else {
            const menu = this.props.photos.photos.map(item => {
                if (this.state.category === "all") {
                    return (
                        <Photo
                            photo={item}
                            key={item.id}
                            PhotoSelect={() => this.onPhotoSelect(item)}
                        />
                    );
                } else {
                    if (this.state.category === item.category) {
                        return (
                            <Photo
                                photo={item}
                                key={item.id}
                                PhotoSelect={() => this.onPhotoSelect(item)}
                            />
                        );
                    }
                }
                
            })

            let photoDetail = null;
            if (this.state.selectedPhoto != null) {
                const comments = this.props.comments.comments.filter(comment => comment.photoId === this.state.selectedPhoto.id
                )
                photoDetail = <PhotoDetail
                    photo={this.state.selectedPhoto}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentsIsLoading={this.props.isLoading} />
            }
            return (
                <div>
                <div className="container">
                    <ButtonGroup className='m-2' aria-label="Basic example">
                        <Label className='mr-2 p-1 text-danger '>Category :</Label>
                        <Button onClick={(e) => {this.handleCategory(e, "all")}} variant="secondary">All</Button>
                        <Button onClick={(e) => {this.handleCategory(e, "Animal")}} variant="secondary">Animal</Button>
                        <Button onClick={(e) => {this.handleCategory(e, "Bird")}} variant="secondary">Bird</Button>
                        <Button onClick={(e) => {this.handleCategory(e, "Insect")}} variant="secondary">Insect</Button>
                        <Button onClick={(e) => {this.handleCategory(e, "Predetor")}} variant="secondary">Predetor</Button>
                    </ButtonGroup>
                    <div className="row">

                        <div className='row justify-content-md-center"'>

                            {menu}
                        </div>
                        <Modal style={{ scrollable: "true" }} isOpen={this.state.modalOpen}>
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
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);