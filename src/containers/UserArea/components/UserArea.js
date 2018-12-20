import React from 'react';
import Header from '../../../components/Header';
import { Link } from 'react-router-dom';

const UserArea = ({
    user,
    handleSectionChange,
    showDocuments,
    documents,
}) => (
    <div>
        <Header />
        <div className="container">
            <div className="row profileContainer">
                <div className="col-md-2">
                    <p onClick={() => handleSectionChange(false) }
                       className={!showDocuments ?'profileP activeP':'profileP'}>Profile</p>
                    <p onClick={() => handleSectionChange(true) }
                       className={!showDocuments ?'profileP activeP':'profileP activeP'}>Documents</p>
                    <p className='profileP'><Link to='/reset_password' >Reset Password</Link></p>
                </div>
                <div className="col-md-10">
                    {!showDocuments ? (<div className='innerContainer'>
                        <h2 className='profileTitle'>Profile</h2>
                        <label htmlFor="">First name</label>
                        <input className='inputProfile' placeholder={user.firstName} type="text"/>
                        <label htmlFor="">Last name</label>

                        <input className='inputProfile' placeholder={user.lastName}  type="text"/>
                        <label htmlFor="">Phone</label>

                        <input className='inputProfile' placeholder={user.phone || '43433'}  type="text"/>
                        <label htmlFor="">Email</label>

                        <input className='inputProfile' placeholder={user.email}  type="text"/>
                        <button className='updateBtn'>Update</button>
                    </div>)
                    : ( <div>
                        <h2>Твої документи</h2>
                        <ul className='documentsUl'>{
                            documents.map(document => {
                                return <li className='documentsList'>{document.title} <span>{document.data}</span></li>
                            })
                        }</ul>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
);


export default UserArea;