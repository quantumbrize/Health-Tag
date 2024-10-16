import React, { useState,useEffect } from 'react'
import './ShopDetails.css';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import sign from '../../Assets/Sign.png';


function ShopDetails() {
    const [medicines, setMedicines] = useState([{ id: Date.now(), pcdName: '', medicineName: '', timing: '', dose: '', days: '' }]);

    const [ModifyDays,setModifyDays] =useState('');
    const [MedDose,setMedDose] =useState('');
    const [Discount,setDiscount] =useState('');
    const [MedAmount,setMedAmount] =useState('');

    const handleChange = (id, field, value) => {
        setMedicines(medicines.map(medicine =>
            medicine.id === id ? { ...medicine, [field]: value } : medicine
        ));
    };

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/doctor/patient');
    };

    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
    };

    const pcdOptions = ['PCD1', 'PCD2', 'PCD3'];
    const medicineOptions = ['Medicine1', 'Medicine2', 'Medicine3'];
   useEffect(()=>{
    let nodelist=document.getElementsByClassName("form-container")[0].getElementsByTagName("input")
    let nodeArray=[...nodelist]
    nodeArray.forEach(val=>{
        val.readOnly=true
    })
    nodelist=document.getElementsByClassName("amount-section")[0].getElementsByTagName("input")
    nodeArray=[...nodelist]
    nodeArray.forEach(val=>{
        val.readOnly=false
    })
   },[])

    return (
        <div className="form-container">
            <div className="form-box">
                <div className="form-title">
                    <p>Patient’s Details</p>
                    <span>Doctor</span>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-wrap">
                        <label className='label' htmlFor="fname">First Name</label>
                        <input className="form-input" name='fname' type="text" placeholder="Enter Patient’s First Name"/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="lname">Last Name</label>
                        <input className="form-input" name='lname' type="text" placeholder="Enter Patient’s Last Name" />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="email">Email id</label>
                        <input className="form-input" name='email' type="email" placeholder="Enter Patient’s Email Id" />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="number">Phone number</label>
                        <input className="form-input" name='number' type="number" placeholder="Enter Patient’s Phone Number" />
                    </div>
                    <div className="more-input-wrap">
                        <div className="input-wrap">
                            <label htmlFor="age">Age</label>
                            <input className="form-input" name='age' type="number" placeholder="Enter Patient’s Age" />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="weight">Weight</label>
                            <input className="form-input" name='weight' type="number" placeholder="Enter Patient’s Weight" />
                        </div>
                    </div>
                    <div className="more-input-wrap">
                        <div className="input-wrap">
                            <label htmlFor="blood">Blood Pressure</label>
                            <input className="form-input" name='blood' type="number" placeholder="Enter Patient’s BP" />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="syndrome">Syndrome</label>
                            <input className="form-input" name='syndrome' type="tel" placeholder="Enter Patient’s Syndrome" />
                        </div>
                    </div>

                    <div className="medicine-form-shop">
                        <div className="form-title">
                            <p>Medicine/Pharmacy’s Details</p>
                            <span>Doctor</span>
                        </div>
                        <div>
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
                                    <div className="amount-section">
                                        <div className="col1">
                                            <div className="field sm-field">
                                                <label>Modify Days</label>
                                                <input type="text" value={ModifyDays} onChange={(e) => handleChange(setModifyDays(e.target.value))} placeholder='10 Days' />
                                            </div>
                                            <div className="field">
                                                <label>Billing Amount</label>
                                                <input type="text" value={MedDose} onChange={(e) => handleChange(setMedDose(e.target.value))} placeholder='INR' />
                                            </div>
                                        </div>
                                        <div className="col1">
                                            <div className="field sm-field">
                                                <label>Discount</label>
                                                <input type="text" value={Discount} onChange={(e) => handleChange(setDiscount(e.target.value))} placeholder='INR' />
                                            </div>
                                            <div className="field">
                                                <label>Net Amount</label>
                                                <input type="text" value={MedAmount} onChange={(e) => handleChange(setMedAmount(e.target.value))} placeholder='INR' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="doc-box">
                        <div className="form-title">
                            <p>Doctor’s Details</p>
                            <span>Doctor</span>
                        </div>
                        <div>
                            <div className="input-wrap">
                                <label className='label' htmlFor="fname">First Name</label>
                                <input className="form-input" name='fname' type="text" placeholder="Enter Doctor’s First Name" />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="lname">Last Name</label>
                                <input className="form-input" name='lname' type="text" placeholder="Enter Doctor’s Last Name" />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="number">Phone number</label>
                                <input className="form-input" name='number' type="number" placeholder="Enter Doctor’s Phone Number" />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="email">Email id</label>
                                <input className="form-input" name='email' type="email" placeholder="Enter Doctor’s Email Id" />
                            </div>
                            <div className="more-input-wrap">
                                <div className="input-wrap">
                                    <label htmlFor="Date">Date</label>
                                    <input className="form-input" name='date' type="text" placeholder="00/00/00" />
                                </div>
                                <div className="input-wrap file-input">
                                    <label htmlFor="sign">E-Signature Name</label>
                                    <img src={sign} alt="Sign" className="signature" />
                                </div>
                            </div>
                            <button className='form-btn-shop'>
                                <span onClick={handleBackClick}><HiOutlineArrowLongLeft style={{ marginRight: '8px' }} />Back</span>
                                <span>Total Amount 0</span>
                                <span>Submit <HiOutlineArrowLongRight /></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShopDetails