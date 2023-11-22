    const navigation = {
        // ... (Tu configuración de navegación)
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
                {/* ... (Resto del contenido) */}
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
    