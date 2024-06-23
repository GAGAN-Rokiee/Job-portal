import React, { useState } from 'react';

function SignUpForm() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        mobile: '',
        city: '',
        qualification: '',
        resume: '',
        notifications: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, password, mobile, city, qualification, resume, notifications } = formData;

        // Perform validation checks
        if (first_name === '' || last_name === '' || email === '' || password === '' || mobile === '' || city === '' || qualification === '' || resume === '' || !notifications) {
            alert('Please fill in all the fields and agree to receive notifications.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // If all checks pass, submit the form (can be replaced with AJAX request)
        alert('Form submitted successfully!');
        // Reset the form
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            mobile: '',
            city: '',
            qualification: '',
            resume: '',
            notifications: false
        });
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md max-w-md">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block font-semibold">First Name</label>
                        <input type="text" id="first_name" name="first_name" className="form-input" value={formData.first_name} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block font-semibold">Last Name</label>
                        <input type="text" id="last_name" name="last_name" className="form-input" value={formData.last_name} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold">Email Address</label>
                        <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-semibold">Password</label>
                        <input type="password" id="password" name="password" className="form-input" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block font-semibold">Mobile Number</label>
                        <input type="tel" id="mobile" name="mobile" className="form-input" value={formData.mobile} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block font-semibold">Current City</label>
                        <select id="city" name="city" className="form-select" value={formData.city} onChange={handleChange}>
                            <option value="" disabled>Select City</option>
                            <option value="New York">New York</option>
                            <option value="London">London</option>
                            <option value="Tokyo">Tokyo</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="qualification" className="block font-semibold">Highest Qualification</label>
                        <select id="qualification" name="qualification" className="form-select" value={formData.qualification} onChange={handleChange}>
                            <option value="" disabled>Select Course</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="resume" className="block font-semibold">Upload Resume</label>
                        <input type="file" id="resume" name="resume" accept=".docx, .rtf, .pdf" className="form-input" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" id="notifications" name="notifications" className="form-checkbox" checked={formData.notifications} onChange={handleChange} />
                            <span className="ml-2">Allow Freshersworld to send notifications</span>
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
