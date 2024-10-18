import React, { useState } from 'react';
import './MedicineForm.css';

import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'; // Import the NavBar


const MedicineForm = () => {

    const [medicines, setMedicines] = useState([{ id: Date.now(), pcdName: '', medicineName: '', timing: '', dose: '', days: '' }]);

    const handleAddMedicine = () => {
        setMedicines([...medicines, { id: Date.now(), pcdName: '', medicineName: '', timing: '', dose: '', days: '' }]);
    };

    const handleRemoveMedicine = (id) => {
        setMedicines(medicines.filter(medicine => medicine.id !== id));
    };

    const handleChange = (id, field, value) => {
        setMedicines(medicines.map(medicine =>
            medicine.id === id ? { ...medicine, [field]: value } : medicine
        ));
    };

    const pcdOptions = ['PCD1', 'PCD2', 'PCD3'];
    const medicineOptions = ['Medicine1', 'Medicine2', 'Medicine3'];

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        navigate('/doctor-form');
      };
    
      const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
      };

    return (
        <div className="form-container">
            <div className="form-number">
                <div className="line"></div>
                <div className='num'>1</div>
                <div className="number-border">
                    <div className='num'>2</div>
                </div>
                <div className='num num-dis'>3</div>
            </div>
            <div className="medicine-form">
                <div className="form-title">
                    <p>Medicine/Pharmacy’s Details</p>
                    <span>Doctor</span>
                </div>
                <form onSubmit={handleFormSubmit}>
                    {medicines.map((medicine, index) => (
                        <div key={medicine.id} className="medicine-section">
                            <div className="field">
                                <label>PCD Name</label>
                                <select value={medicine.pcdName} onChange={(e) => handleChange(medicine.id, 'pcdName', e.target.value)}>
                                    <option value="" disabled>Select PCD Name</option>
                                    {pcdOptions.map(pcd => (
                                        <option key={pcd} value={pcd}>{pcd}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field">
                                <label>Medicine Name</label>
                                <select value={medicine.medicineName} onChange={(e) => handleChange(medicine.id, 'medicineName', e.target.value)}>
                                    <option value="" disabled>Select Medicine Name</option>
                                    {medicineOptions.map(med => (
                                        <option key={med} value={med}>{med}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="more-input-fields">
                                <div className="field sm-field">
                                    <label>Timing</label>
                                    <input type="text" value={medicine.timing} onChange={(e) => handleChange(medicine.id, 'timing', e.target.value)} placeholder='Time' />
                                </div>
                                <div className="field">
                                    <label>Dose</label>
                                    <input type="text" value={medicine.dose} onChange={(e) => handleChange(medicine.id, 'dose', e.target.value)} placeholder='Dose' />
                                </div>
                                <div className="field sm-field2">
                                    <label>Days</label>
                                    <select value={medicine.days} onChange={(e) => handleChange(medicine.id, 'days', e.target.value)}>
                                        <option value="day">day</option>
                                        <option value="1day">1 day</option>
                                        <option value="2days">2 days</option>
                                        <option value="3days">3 days</option>
                                        <option value="4days">4 days</option>
                                        <option value="5days">5 days</option>
                                        <option value="6days">6 days</option>
                                        <option value="7days">7 days</option>
                                        <option value="10days">10 days</option>
                                        <option value="15days">15 days</option>
                                        <option value="30days">30 days</option>
                                        <option value="manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                            {index > 0 && <button className="remove-button" onClick={() => handleRemoveMedicine(medicine.id)}>Remove</button>}
                        </div>
                    ))}
                    <div className="add-button" onClick={handleAddMedicine}><CiCirclePlus /> Add More Medicine</div>
                    <button className="next-button" type="submit">
                        <div className="next-button-inner">
                            <span onClick={handleBackClick}><HiOutlineArrowLongLeft style={{ marginRight: '8px' }} />Back</span>
                            <span>Next <HiOutlineArrowLongRight /></span>
                        </div>
                    </button>
                </form>
            </div>
            {/* Include the NavBar here at the bottom */}
      <NavBar />
        </div>
    );
};

export default MedicineForm;
