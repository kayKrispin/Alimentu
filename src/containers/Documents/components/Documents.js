import React from 'react';
import Header from  '../../../components/Header';
import Footer from  '../../../components/Footer';
import { Select } from 'antd';
import documentsList from './documentsList';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import AutoForm from '../../../components/AutoForm';
import {Field, reduxForm} from 'redux-form'
import { Spin } from 'antd';
import { Modal } from 'antd';
import PaymentForm from '../../../components/PaymentForm';
import template  from '../../../server/src/api/contact/emailTemplates';




const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();

    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    // To generate mock Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <FormItem label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [{
                                required: true,
                                message: 'Input something!',
                            }],
                        })(
                            <Input placeholder="placeholder" />
                        )}
                    </FormItem>
                </Col>
            );
        }
        return children;
    }

    render() {
        return (
            <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                        </a>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);


const Option = Select.Option;

const children = [];
for (let i = 0; i < documentsList.length; i++) {
    children.push(<Option key={documentsList[i]}>{documentsList[i]}</Option>);
}


const Documents = ({
                       handleChange,
                       statementOfClaime,
                       handleSubmit,
                       formSchema,
                       status,
                       submitted,
                       handleModal,
                       visible,
                       errMessage,
                       visiblePayment,
                       handlePayment,
    user
                    }) => (
    <div>
		<Header/>
        <div style={{paddingTop:'85px',textAlign:'center' }} className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Тип документа</h1>
                    <Select
                        mode="default"
                        style={{ width: '100%' }}
                        placeholder="Оберіть позовну заяву"
                        onChange={handleChange}
                    >{children}
                    </Select>
                </div>
                <PaymentForm
                visible={visiblePayment}
                onCancel={handlePayment}
                />

            </div>
			<div style={{textAlign:'center' }} className="row pozovF">
                {statementOfClaime !== '' ?( <div className='pozov' action="">
                    <h3 className='pozovHead'>  <strong>1.</strong>	Шапка позовної за'яви:</h3>
                    <div className="row">
                        <AutoForm
                            id={statementOfClaime}
                            schema={formSchema}
                            submitted={submitted}
                            onSubmit={handleSubmit}
                            submitText="Update"
                            className = 'createDocumentForm'
                            btnClassName='createDoc'
                            label='Оформити документ'
                        />

                    </div>
                    <h3 style={{position:'relative',bottom:"520px"}} className='pozovHead'>  <strong>2.</strong>	Основна інформація:</h3>

                    <h3 style={{marginTop:'10px',position:'relative', bottom:"270px"}} className='pozovHead'>  <strong>3.</strong>	Прошу :</h3>
                    <span style={{fontWeight:'600',color:'red'}}>{!submitted && errMessage}</span>


                </div>) :(<h3>Оберіть тип позовоної заяви</h3>) }
                { submitted ? status ? null : <Spin size='large' /> : null }
            </div>
            <Modal
                visible={visible}
                onCancel={handleModal}
                onOk={handleModal}
            >
                <p>Ми успішно надіслали створений вами документ на вашу пошту!!!
                    Також ви можете побачити список ваших документів в особистому кабінеті
                </p>
            </Modal>
        </div>
        <Footer/>
    </div>
)

export default Documents;