import React, {useEffect}from "react";
import ContactForm from "../components/contact-form";
import Layout from "../components/layout";
import FaqPage from "../components/faq";


function FAQ() {
    useEffect(()=>{
        document.title="Radiant - FAQ & Contact Us"
    })
    return (
        <div>
            <Layout>
                <FaqPage/>
                <ContactForm />

            </Layout>

        </div>
    );
}

export default FAQ;