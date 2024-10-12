import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_e8p3iag', 'template_2ycnzdr', formData, 'ghJazl5KsNgZd5m11')
            .then((response) => {
                setSuccessMessage('Message sent successfully!');
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                setErrorMessage('Failed to send message, please try again.');
                setSuccessMessage('');
            });
    };

    return (
        <>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}

export default Contact;
