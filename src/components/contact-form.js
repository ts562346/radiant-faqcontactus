import React, { useState } from 'react';


const styles = {
    customButton: {
        backgroundColor: '#6C2F36',
        color: '#FEFAFC',
    },
    customButtonHover: {
        backgroundColor: '#FF0000',
        color: '#FEFAFC',
    },
}
const ContactForm = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsMessageSent(true);
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='container'>
            <div className="text-center" style={{ marginBottom: '80px' }}>
                <div className="d-flex justify-content-center">
                    <h3>Contact Us</h3>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className='row mb-2'>
                        <div className="form-group col">
                            <input className="form-control" type="text" placeholder="Name" required />
                        </div>
                        <div className="form-group col">
                            <input className="form-control" type="text" placeholder="Phone" />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className="form-group-email col">
                            <input className="form-control" type="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className="form-group col">
                            <textarea className="form-control" type="text" placeholder="Message" required />
                        </div>
                    </div>

                    <button
                        style={isHovered ? { ...styles.customButton, ...styles.customButtonHover } : styles.customButton}
                        type="submit"
                        className="btn custom-button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >Send Message</button>
                </form>

                {isMessageSent && (
                    <div className="sent-message">Message sent! We will get back to you soon.</div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;