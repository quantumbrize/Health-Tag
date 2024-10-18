import React, { useState } from 'react';
import './DoctorProfile.css';

import default_profile from '../../Assets/default-profile.jpg'
import { MdCameraAlt } from "react-icons/md";
// import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const DoctorProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [shop, setShop] = useState('');
    const [documents, setDocuments] = useState([]);
    const [profilePic, setProfilePic] = useState('');
    
    const Navigate=useNavigate()

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setDocuments(files);
    };

    const handleProfilePicChange = (event) => {
        setProfilePic(URL.createObjectURL(event.target.files[0]));
    };

    const handleRemoveFile = (fileName) => {
        setDocuments(documents.filter(file => file.name !== fileName));
    };

    // const handleRemoveProfilePic = () => {
    //     setProfilePic('');
    // };

    const triggerFileInput = () => {
        document.getElementById('profilePicInput').click();
    };
    return (
        <div className="profile-container">
            <div className="profile-header">
                <p className='title'>Edit Profile</p>
                <img src={profilePic || default_profile} alt="Profile" className="profile-pic" />
                {/* {profilePic && <div className="remove-btn" onClick={handleRemoveProfilePic}><RiDeleteBin5Fill /></div>} */}
                <div className="camera-btn" onClick={triggerFileInput}>
                    <MdCameraAlt />
                </div>
                <input type="file" id="profilePicInput" onChange={handleProfilePicChange} className="profile-pic-input" style={{ display: 'none' }} />
            </div>
            <div className="form-group">
                <label>Doctor Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@gmail.com" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="number" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 ......" />
            </div>
            <div className="form-group">
                <label>Specialist</label>
                <input type="text" value={specialist} onChange={e => setSpecialist(e.target.value)} placeholder="Enter your specialist in field" />
            </div>
            <div className="form-group">
                <label>Assign To Shop</label>
                <select value={shop} onChange={e => setShop(e.target.value)}>
                    <option value="">Name of the shops</option>
                    <option value="Shop1">Shop1</option>
                    <option value="Shop2">Shop2</option>
                    <option value="Shop3">Shop3</option>
                </select>
            </div>
            <div className="form-group file-input-wrap">
                <label>Document</label>
                <div className="file-input-inner">
                    <input type="file" id='sign' multiple onChange={handleFileChange} className="file-input" />
                    <label for="sign" class="file-label">Choose your file</label>
                    <div className="file-preview">
                        {documents.map(file => (
                            <div key={file.name} className="file-item">
                                <img src={URL.createObjectURL(file)} alt={file.name} className="file-view" />
                                <div onClick={() => handleRemoveFile(file.name)} className="remove-btn"><TiDelete/></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button  className="update-btn" >Update</button>
        </div>
    );
};

export default DoctorProfile;
