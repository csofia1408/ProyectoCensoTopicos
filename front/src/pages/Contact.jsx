
import Layout from '../components/layout';
    const Contact = () => (
    <Layout>
        <div className="max-w-3xl mx-auto text-center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2><br></br>
        <p className="text-gray-600">
            Have questions? Were here to help! Reach out to us using the form or contact information below.
        </p>
        </div>

        <div className="mt-16 mx-auto max-w-2xl">
        <div className="text-2xl font-semibold text-gray-900 mb-4 text-center">Contact Information</div>
        <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-center">
            <div className="text-center">
                <svg className="w-6 h-6 mb-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <div>
                <span className="block font-medium text-gray-800">Visit Us</span>
                <span className="text-gray-600">123 Main Street, Cityville</span>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="text-center">
                <svg className="w-6 h-6 mb-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <div>
                <span className="block font-medium text-gray-800">Call Us</span>
                <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="text-center">
                <svg className="w-6 h-6 mb-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l18 12m0 0L3 6"></path>
                </svg>
                <div>
                <span className="block font-medium text-gray-800">Email Us</span>
                <span className="text-gray-600">info@example.com</span>
                
                </div>
                <br></br>
                <br></br>
            </div>
            </div>
        </div>
        </div>
    </Layout>
    );

    export default Contact;
