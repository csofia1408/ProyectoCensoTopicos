const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'Censo', href: '/censo' },
        { name: 'Blog/Instructivo', href: '/instructivo' },
        { name: 'Ayuda', href: 'ayuda' },
        { name: 'Formulario', href: 'formulario' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            {/* ... (ícono de Facebook) */}
            </svg>
        ),
        },
        {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            {/* ... (ícono de Instagram) */}
            </svg>
        ),
        },
        {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            {/* ... (ícono de Twitter) */}
            </svg>
        ),
        },
    ],
    };

    function Footer() {
    return (
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
            Footer
        </h2>
        <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mb-16">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
                <img
                className="h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300"
                alt="Company name"
                />
                <p className="text-base text-gray-500">
                Sistema de censo Bolumbiano
                </p>
                <div className="flex space-x-6">
                {navigation.social.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                    >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
                </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-base font-medium text-gray-900">Reports</h3>
                    <ul role="list" className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                        <li key={item.name}>
                        <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                        >
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="mt-12 md:mt-0">
                    <h3 className="text-base font-medium text-gray-900">Support</h3>
                    <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                        <li key={item.name}>
                        <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                        >
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-base font-medium text-gray-900">ECS</h3>
                    <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                        <li key={item.name}>
                        <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                        >
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="mt-12 md:mt-0">
                    <h3 className="text-base font-medium text-gray-900">Legal</h3>
                    <ul role="list" className="mt-4 space-y-2">
                    {navigation.legal.map((item) => (
                        <li key={item.name}>
                        <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                        >
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-2">
            <p className="text-base text-gray-400 xl:text-center">
                &copy; 2023 Census Collector System. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;
