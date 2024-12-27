"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import React from 'react'
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Frontend Development',
        description: 'Creating visually appealing and user- friendly interfaces using modern technologies like HTML, CSS, and JavaScript.I specialize in frameworks such as React, Angular, and Vue.js to build responsive and interactive web applications.',
        href: ""
    },
    {
        num: '02',
        title: 'Backend Development',
        description: 'Developing robust and scalable server- side applications with Node.js, Express, and other backend technologies.My expertise includes database management with MongoDB, PostgreSQL, and ensuring secure and efficient API integrations.',
        href: "",
    },
    {
        num: '03',
        title: 'Full Stack Development',
        description: 'Combining both frontend and backend development skills to create comprehensive web solutions.From designing responsive user interfaces to implementing secure and efficient server- side logic, I deliver end - to - end solutions that meet client needs.',
        href: ""
    },
    {
        num: '04',
        title: 'Mobile App Development',
        description: 'Building high- performance mobile applications for both iOS and Android platforms using technologies like React Native and Flutter.I ensure seamless user experiences and efficient functionality tailored to client requirements.',
        href: ""
    },
];

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[68px]'
                >
                    {services.map((service, index) => {
                        return <div
                            key={index}
                            className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary text-3xl' />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                            <p className='text-white/60'>{service.description}</p>
                            {/* border */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services