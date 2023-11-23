    import Layout from '../components/layout';

    const censoIncentives = [
        {
            name: 'Official Approval Granted',
            imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
            description: "Electronic Census System Endorsed by the Bolivian Government.",
        },
    {
        name: 'Empowering Progress',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "Department of Statistics Officials Applaud the Adoption of the Electronic Census System for Enhanced Data Accuracy and Efficiency.",
    },
    {
        name: 'Ensuring Data Security',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "The Electronic Census System Upholds Robust Measures to Safeguard Information for Bolivian Citizens.",
    },
    ];

    const CensoIncentives = () => (
    <Layout>
        <div className="bg-white mt-3">
        <div className="bg-white">
            <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold tracking-tight text-gray-900">
        We built our business on customer service
    </h2>
    <p className="mt-4 text-gray-500">
        
The Electronic Census System is a cutting-edge platform designed to streamline and modernize the census-taking process. Our system revolutionizes the traditional approach to data collection by providing an efficient and user-friendly interface for respondents. With secure and convenient online access, individuals can easily and accurately submit their census information. 
    </p>
    <br></br>
</div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                {censoIncentives.map((incentive) => (
                    <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0">
                        <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    </Layout>
    );

    export default CensoIncentives;
