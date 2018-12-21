import UserArea from './UserArea';
import React from 'react';
import { connect } from 'react-redux';
import { selectors as authSelectors } from '../../../store/modules/Auth';
import { actions as documentActions, selectors as documentSelectors } from '../../../store/modules/Documents';



class UserAreaContainer extends React.Component {

    state = {
        showDocuments:false
    };

    componentDidMount() {
       const { _id } = this.props.user;
        this.props.handleGetDocuments(_id)
       this.props.documents &&  console.log(this.props.documents)
    }

    handleSectionChange = (param) => {
        this.setState({
            showDocuments:param
        })
    };

    generateProps() {
        return {
            ...this.props,
            ...this.state,
            handleSectionChange:this.handleSectionChange,
        }
    }

    render(){
        const props = this.generateProps()
        return <UserArea {...props}/>
    }
}


const mapStateToProps = state => ({
    user:authSelectors.getAuthenticatedUser(state),
    documents: documentSelectors.getUserDocuments(state),
});

const mapDispatchToProps = dispatch => ({
    handleGetDocuments(id){
        dispatch(documentActions.fetchDocuments({userId:id}))
    },
});



export default connect(mapStateToProps, mapDispatchToProps )(UserAreaContainer);