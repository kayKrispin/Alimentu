import React from 'react';
import Header from  '../../../components/Header';
import Footer from  '../../../components/Footer';
import { Select } from 'antd';
import documentsList from './documentsList';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

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
function handleChange(value) {
    console.log(`selected ${value}`);
}

const Documents = ( { } ) => (
    <div>
		<Header/>
        <div style={{paddingTop:'85px'}} className="container">
            <div className="row">
				<h1>Тип документа</h1>
                <Select
                    mode="default"
                    style={{ width: '100%' }}
                    placeholder="Оберіть позовну заяву"
					onChange={handleChange}
                >{children}
                </Select>
			</div>
			<div className="row pozovF">
                <form className='pozov' action="">
			  <h3 className='pozovHead'>  <strong>1.</strong>	Шапка позовної за'яви.</h3>
					<div className="row">
						<div className="col-md-4"> <label htmlFor="lastname"><strong>1.1:</strong> Назва суду</label>
                            <input type="text" id="lastname"/></div>
                        <div  style={{textAlign:"center"}} className="col-md-4">      <label htmlFor="lastname">Місто суду </label>
                            <input type="text" id="lastname"/></div>
                        <div style={{textAlign:"end"}} className="col-md-4">   <label htmlFor="lastname">Адреса суду</label>
                            <input type="text" id="lastname"/></div>
                        <div className="col-md-4"> <label htmlFor="lastname"><strong>1.1:</strong> Позивач П.І.Б</label>
                            <input type="text" id="lastname"/></div>
                        <div  style={{textAlign:"center"}} className="col-md-4">      <label htmlFor="lastname">Адреса </label>
                            <input type="text" id="lastname"/></div>
                        <div style={{textAlign:"end"}} className="col-md-4">   <label htmlFor="lastname">Телефон</label>
                            <input type="text" id="lastname"/></div>
                        <div className="col-md-4"> <label htmlFor="lastname"><strong>1.1:</strong> Відповідач</label>
                            <input type="text" id="lastname"/></div>
                        <div  style={{textAlign:"center"}} className="col-md-4">      <label htmlFor="lastname">Адресса</label>
                            <input type="text" id="lastname"/></div>
                        <div style={{textAlign:"end"}} className="col-md-4">   <label htmlFor="lastname">Телефон</label>
                            <input type="text" id="lastname"/></div>
					</div>
                    <h3 className='pozovHead'>  <strong>2.</strong>	Основна інформація.</h3>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
)

export default Documents;