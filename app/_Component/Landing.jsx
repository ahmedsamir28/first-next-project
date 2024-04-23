import React from 'react';

const Landing = () => {
    return (
        <section className='bg-gray-900'>
            <div
                style={{ height: '550px' }}
                className="mx-auto container  ">


                <ul className="mt-8  grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li
                        style={{ height: '250px' }}
                        className='borde'
                    >
                        <a href="#" className="group h-96 relative block">
                            <img
                                style={{ height: '250px' }}
                                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute top-32 w-fit h-fit  border-black inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                <span
                                    className="rounded-md mt-2 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li
                        style={{ height: '250px' }}                    >
                        <a href="#" className="group relative block">
                            <img
                                style={{ height: '250px' }}
                                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                <span
                                    className="rounded-md mt-2 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li
                        style={{ height: '515px' }}
                        className="lg:col-span-2 hidden lg:block  lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="group h-96 relative block">
                            <img
                                style={{ width: '100%', height: '515px' }}
                                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                alt=""
                                className="aspect-square w-full object-cover h-5/12 transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                <span
                                    className="rounded-md mt-2 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Landing;
