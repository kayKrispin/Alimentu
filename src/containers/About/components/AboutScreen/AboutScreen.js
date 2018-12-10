import React from 'react';
import {reduxForm,Field} from "redux-form";


const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning }
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input  {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)




class AboutScreen extends React.Component {


    mySub = values => {
        console.log('va',values);
    };

    render(){
        console.log('p',this.props)

    const {
        handleSubmit
    } = this.props;



    return (
        <form onSubmit={handleSubmit(this.mySub)}>
            <Field
                name="nombre"
                label="Nombre"
                type="text"
                component={renderField}
            />
            <button
                type="submit"
                bsStyle="primary">
                Submit
            </button>
        </form>
    )
}
}

AboutScreen = reduxForm({
    form:'test',
    enableReinitialize:true
})(AboutScreen)



export default AboutScreen;