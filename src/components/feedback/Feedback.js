import React, { Component } from 'react';
//import ShowFeedback from './showFeedback';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchFeedback } from '../../redux/actionCreator';
import Loading from '../body/Loading';
import { Alert } from 'reactstrap';
import ShowFeedback from './ShowFeedback';

const mapStateToProps = state => {
    return {
        feedback: state.feedback
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFeedback: () => dispatch(fetchFeedback()),
        }
}

class Feedback extends Component {
    state = {
        // selectedPhoto: null,
        // modalOpen: false
    }

    // onPhotoSelect = photo => {
    //     this.setState({
    //         selectedPhoto: photo,
    //         modalOpen: !this.state.modalOpen
    //     });
    // }

    // toggleModal = () => {
    //     this.setState({
    //         modalOpen: !this.state.modalOpen
    //     })
    // }

    componentDidMount() {
       this.props.fetchFeedback();
    }

    render() {

        document.title = "Feedback";
        if (this.props.feedback.isLoading) {
            return (
                <Loading/>
            );
        }

        // else if (this.props.feedback.errMess != null) {
        //     return (
        //         <Alert color='danger'>Error Loading</Alert>
        //     );
        // }
        
        else {
            const feedback = this.props.feedback.feedback.map(item => {
                console.log(item.id);
                return (
                    <ShowFeedback 
                    key={item.id}
                    feedback = {item}
                    />    
                );
            })

            return (
                <div className="container">
                    <div className="row">
                        <div className='row justify-content-md-center"'>
                            {feedback}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);