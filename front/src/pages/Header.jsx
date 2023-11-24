    import { useState } from 'react';
    import { Typewriter } from 'react-simple-typewriter';
    import Layout from '../components/layout';

    function Header() {
    const [showFundingAnnouncement, setShowFundingAnnouncement] = useState(true);

    const handleFundingAnnouncementClose = () => {
        setShowFundingAnnouncement(false);
    };

    return (
        <Layout>
        <main className="mt-[-70px]">
        <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
                {showFundingAnnouncement && (
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-900">
                        Announcing our next round of funding.{' '}
                        <span
                        onClick={handleFundingAnnouncementClose}
                        className="font-semibold text-orange-500 cursor-pointer"
                        >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                        </span>
                    </span>
                    </div>
                </div>
                )}
                <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Every person counts, you are<span> </span>  important to us 
                    <Typewriter
                    words={[' Child', ' Seniors', ' Young'," Men"]}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-900 sm:text-center">
                Welcome to the Bulombian census system, a service for everyone!
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                    href="/login"
                    className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-orange-500 hover:bg-orange-400 hover:ring-orange-400"
                    >
                    Get started
                    <span className="text-orange-200" aria-hidden="true">
                        &rarr;
                    </span>
                    </a>
                    <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                    Live demo
                    <span className="text-gray-500" aria-hidden="true">
                        &rarr;
                    </span>
                    </a>
                </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                    <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor='#ff561e' />
                        <stop offset={1} stopColor='#ff563e' />
                    </linearGradient>
                    </defs>
                </svg>
                </div>
            </div>
            </div>
        </div>
        </main>
        </Layout>
    );
    }

    export default Header;
