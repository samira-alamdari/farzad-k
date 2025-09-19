import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
   
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});


const [errors, setErrors] = useState({});


const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
        tempErrors.name = "Name is required.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        tempErrors.email = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address.";
        isValid = false;
    }

    if (!formData.message.trim()) {
        tempErrors.message = "Project details are required.";
        isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
};


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
};

const submitHandler = async (e) => {
    e.preventDefault();
    if (validate()) {
        console.log('Form is valid. Submitting...', formData);
    
        try {
            const response = await fetch('/your-api-endpoint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
                console.log('Success!');
            } else {
                console.error('Submission failed.');
            }
        } catch (error) {
            console.error('Error during submission:', error);
        }
    } else {
        console.log('Form is invalid.');
    }
};

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem]">
                    <div className="">
                        <div className="overflow-hidden relative">
                            <div className="opacity-0 pointer-events-none w-full">
                                <p className="text__24 opacity-40">STAY CONNECTED.</p>
                                <h5 className="py-4 text__40">
                                    <Link target="_blank" to="https://wa.me/+989196818114">+98 919 681 8114</Link>
                                </h5>
                                <h3 className="text__64 mb-[64px]">
                                    <Link to="mailto:Hi@farzad-k.com">Hi@farzad-k.com</Link>
                                </h3>
                                <h5 className="text__32 opacity-40">Dubai, UAE.</h5>
                            </div>
                            <div className="absolute w-full transition-all duration-700 left-0 top-0 ">
                                <p className="text__24 opacity-40">STAY CONNECTED.</p><h5 className="py-4 text__40">
                                    <Link target="_blank" to="https://wa.me/+989196818114">+98 919 681 8114</Link>
                                </h5>
                                <h3 className="text__64 mb-[64px]">
                                    <Link to="mailto:Hi@farzad-k.com">Hi@farzad-k.com</Link>
                                </h3>
                                <h5 className="text__32 opacity-40">Dubai, UAE.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <div className="overflow-hidden relative">
            <div className="w-full transition-all duration-700">
                <form className="grid grid-cols-1 gap-[24px]" onSubmit={submitHandler} noValidate>
                    <div>
                        <label className="text__24 uppercase mb-3">MY NAME IS</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full bg-transparent p-0 h-[70px] text__18 uppercase border-b placeholder:text-[#00000066] outline-none"
                            placeholder="YOUR NAME"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={validate} 
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="text__24 uppercase mb-3">HERE IS MY EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full bg-transparent p-0 h-[70px] text__18 uppercase border-b placeholder:text-[#00000066] outline-none"
                            placeholder="YOUR EMAIL"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={validate}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="text__24 uppercase mb-3">I’M LOOKING FOR</label>
                        <textarea
                            name="message"
                            className={`w-full bg-transparent p-0 h-[70px] text__18 uppercase border-b placeholder:text-[#00000066] outline-none ${errors.message ? 'border-red-500' : ''}`}
                            placeholder="ENTER PROJECT DETAILS"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={validate}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className={`inline-block px-[24px] py-[14px] rounded-full border border-Mneutral_900 transition-all ${Object.keys(errors).length === 0 && formData.name.trim() && formData.email.trim() && formData.message.trim() ? "bg-Mneutral_900 text-white" : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            disabled={!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || Object.keys(errors).length > 0}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}