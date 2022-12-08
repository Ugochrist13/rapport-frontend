import React from "react";
import {  IoMdPerson } from "react-icons/io";
import "../edit-profile/Edit-Profile";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../sideBar/Sidebar";
import axios from "axios";
import getPhotoUrl from 'get-photo-url'
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";
const imgUrl = "https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"

const CreateProfile = () => {

   const [profilePhoto, setProfilePhoto] = useState(imgUrl)
   const [userDetails, setUserDetails] = useState('Adesina Abiodun')


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(url, data, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
        reset();
    };

    const updateProfilePhoto = async () =>{
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
    }



    return (
            <Sidebar>
                  <nav className='Edit-navbar'>
                        <h3 className='Edit-Profile-text'>Create Profile</h3>
                        <div className="profile-notification">
                            <Link to='/profile'>
                                <IoMdPerson className="profile-icon" />
                            </Link>
                        </div>
                    </nav>
                <div className="edit-profile-page">
                    <input
                        type="file"
                        accept="image/*"
                        name="photo"
                        id="profilePhotoInput"
                    />
                    <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                        <div
                            className="edit-avatar-div"
                            role="button"
                            title="click to edit photo"
                        >
                            <img
                                className="edit-avatar"
                                src={profilePhoto}
                                alt="profile"
                            />
                        </div>
                    </label>
                    <div className="profile-info">
                        <p className="edit-profile-name">{userDetails}</p>
                    </div>



                    <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="firstName">
                                    First Name
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter First Name"
                                    {...register("firstName", {
                                        required: true,
                                        maxLength: 30,
                                    })}
                                />
                                <p className="errormessage">
                                    {errors.firstName?.type === "required" &&
                                        "your name is required"}
                                </p>
                                <p className="errormessage">
                                    {errors.firstName?.type === "maxLength" &&
                                        "your name should not be more than 30 character long"}
                                </p>
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="lastName">
                                    Last Name
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter Last Name"
                                    {...register("lastName", {
                                        required: true,
                                        maxLength: 30,
                                    })}
                                />
                                <p className="errormessage">
                                    {errors.lastName?.type === "required" &&
                                        "Last name is required"}
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="Nickname">
                                    Nickname
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter Nickname"
                                    {...register("Nickname")}
                                />
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="Email">
                                    Email
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="email"
                                    name="lastName"
                                    placeholder="Enter Email"
                                    {...register("Email", {
                                        required: true,
                                        pattern:
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />
                                <p className="errormessage">
                                    {errors.Email?.type === "required" &&
                                        "Email is required"}
                                </p>
                            </div>
                        </div>
                        <br />
                        
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="Gender">
                                    Gender
                                </label>
                                <br />
                                <select
                                id="select"
                                name="Gender"
                                className=" edit-input"
                                {...register("gender", {
                                    required: true,
                                })}
                                >
                                {" "}
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                </select>
                                <p className="errormessage">
                                    {errors.Gender?.type === "required" &&
                                        "your Gender is required"}
                                </p>
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="MaritalStatus">
                                    Marital Status
                                </label>
                                <br />
                                <select
                                id="select"
                                name="Marital Status"
                                className="edit-input"
                                {...register("marital-status", {
                                    required: true,
                                })}
                            >
                            {" "}
                            <option value="Single">Single</option>
                            <option value="Engaged">Engaged</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            </select>
                                <p className="errormessage">
                                    {errors.MaritalStatus?.type === "required" &&
                                        "Marital Status is required"}
                                </p>
                            </div>
                        </div>
                        <br /> <br />
                        
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="Phone">
                                    Phone Number
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="tel"
                                    name="Phone"
                                    placeholder="Enter Phone Number"
                                    {...register("Phone Number", { required: true})}
                                />
                                 <p className="errormessage">
                                    {errors.Phone?.type === "required" &&
                                        "Phone Number is required"}
                                </p>
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="Location">
                                        Current Loacation
                                    </label>
                                    <br />
                                    <span className="edit-span">e.g Lagos,Nigeria</span>
                                    <br />
                                    <input
                                        className="edit-input"
                                        type="text"
                                        name="Location"
                                        placeholder="Enter Location"
                                        {...register("Loaction", {
                                            required: true,
                                        })}
                                    />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="edit-city">

                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="state">
                                    Name of Secondary School Attended
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="state"
                                    name="state"
                                    placeholder="State"
                                    {...register("state", {
                                        required: true,
                                    })}
                                />
                        
                            </div>
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="Country">
                                    Name of Tertiary Institution Attended
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="city"
                                    name="Country"
                                    placeholder="Country"
                                    {...register("Country", {
                                        required: true,
                                    })}
                                />
                                <p className="errormessage">
                                    {errors.localGovt?.type === "required" &&
                                        "please enter your Country"}
                                </p>
                            </div>
                        </div>
                        <br /> <br /><br />
                        <div className="edit-city">

                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="state">
                                    Faculty/Department
                                </label>
                                <br />
                                <span className="edit-span">e.g Science/Biochemistry, Engeering/Civil Engr.</span>
                                    <br />
                                <input
                                    className="edit-input"
                                    type="state"
                                    name="state"
                                    placeholder="State"
                                    {...register("state", {
                                        required: true,
                                    })}
                                />

                            </div>
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="Country">
                                   Year of Study
                                </label>
                                <br />
                                <span className="edit-span">e.g 2014-2018</span>
                                    <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="Country"
                                    placeholder="Country"
                                    {...register("Country", {
                                        required: true,
                                    })}
                                />
                                <p className="errormessage">
                                    {errors.localGovt?.type === "required" &&
                                        "please enter your Country"}
                                </p>
                            </div>
                            </div>
                            <br /><br /><br />
                        
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="Employment">
                                    Employment Status
                                </label> <br />
                                <span className="edit-span">e.g Employed/Self-employed/Unemployed</span>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="Employment"
                                    placeholder="Indicate your Status"
                                    {...register("Employment", { required: true})}
                                />
                                 <p className="errormessage">
                                    {errors.Employment?.type === "required" &&
                                        "Employment Status is required"}
                                </p>
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="Profession">
                                    Profession
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="Profession"
                                    placeholder="State your Profession"
                                    {...register("Profession", { required: true})}
                                />
                                 <p className="errormessage">
                                    {errors.Profession?.type === "required" &&
                                        "Profession is required"}
                                </p>
                            </div>
                        </div>
                            <br /> <br /><br />
                            
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="WhatsApp">
                                    WhatsApp Link
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="WhatsApp"
                                    placeholder="paste your WhatsApp link here"
                                    {...register("WhatsApp",{ required: true})}
                                />
                                 <p className="errormessage">
                                    {errors.WhatsApp?.type === "required" &&
                                        "WhatsApp link is required"}
                                </p>
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="LinkedIn">
                                    LinkedIn Link
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="LinkedIn"
                                    placeholder="paste your LinkedIn link here"
                                    {...register("LinkedIn")}
                                />
                            </div>
                        </div>
                        <br /> <br />
                        
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="Twitter">
                                    Twitter Link
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="Twitter"
                                    placeholder="paste your Twitter link here"
                                    {...register("Twitter")}
                                />
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <label className="edit-label" htmlFor="Instagram">
                                    Instagram Link
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="Instagram"
                                    placeholder="paste your IG link here"
                                    {...register("IG")}
                                />
                            </div>
                        </div>
                        <br /> <br />
                        <div className="edit-names">
                            <div className="edit-input-left">
                                <label className="edit-label" htmlFor="Facebook">
                                    FaceBook Link
                                </label>
                                <br />
                                <input
                                    className="edit-input"
                                    type="text"
                                    name="Facebook"
                                    placeholder="paste your Facebook link here"
                                    {...register("Facebook", {required: true},)}
                                />
                            </div>

                            <br />
                            <div className="edit-input-right">
                                <button type="submit" className="Save-btn">
                                    Save
                                </button>
                            </div>
                            
                        </div>
                        <br />
                        <br />
                        
                        
                    </form>
                </div>
            </Sidebar>
    );
};

export default CreateProfile;