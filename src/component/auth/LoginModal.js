import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../module/auth/actions';

class LoginModal extends Component {

    onCancel = e => {
        this.props.authActions.closeLoginModal();
    }

    onConfirm = e => {
        this.props.authActions.closeLoginModal();
        this.props.history.push('/sign-in');
    }

    render() {

        const { open } = this.props;

        return (
            <Modal open={open} basic size='small'>
                <Header icon='sign-in' content='로그인 필요' />
                <Modal.Content>
                    <p>
                        로그인 하러 가겠습니까?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={this.onCancel}>
                        <Icon name='remove' /> 취소
              </Button>
                    <Button color='green' inverted onClick={this.onConfirm}>
                        <Icon name='checkmark' /> 로그인 하기
              </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.auth.loginModal.open,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginModal));