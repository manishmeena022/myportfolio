'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTypescript, SiPrisma, SiPostman, SiRedux } from 'react-icons/si';
import { RiGraduationCapFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


// about data
const about = {
    title: 'About me',
    description: ' A motivated and skilled full-stack developer with 1.3 years of experience in building efficient and scalable web applications. Adept at working in a collaborative environment and passionate about learning and applying modern web development technologies.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Manish Meena'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+91) 7836018112'
        },
        {
            fieldName: 'Experience',
            fieldValue: '1.3 Years'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Indian'
        },
        {
            fieldName: 'Email',
            fieldValue: 'manishmeena.mern@gmail.com'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Language',
            fieldValue: 'English, Hindi'
        },
        {
            fieldName: 'Address',
            fieldValue: 'Delhi, India'
        }
    ]
};

// experience data
const experience = {
    // icon: '🖥️',
    title: 'My experience',
    description: 'A snapshot of my journey in the professional world',
    items: [
        {
            company: 'Dynapt Solutions',
            position: 'Software Developer',
            duration: 'March 2023 - Present'
        },
        {
            company: 'Coding Ninjas',
            position: 'Teaching Assistant',
            duration: 'Jan, 2023 - March 2023'
        }
    ]
};

// education data
const education = {
    // icon: <RiGraduationCapFill />,
    title: 'My education',
    description: 'The foundation of my technical expertise and problem-solving abilities.',
    items: [
        {
            institution: 'Coding Ninjas',
            degree: 'Full Stack Web Development Bootcamp',
            duration: "2022 - 2023"
        },
        {
            institution: 'Netaji Subhas Institute of Technology',
            degree: 'Bachelor of Engineering (Information Technology)',
            duration: "2016 - 2020"
        },
        {
            institution: 'Kendriya Vidyalaya Janakpuri',
            degree: 'I - XII',
            duration: '2004 - 2016'
        }
    ]
};

// skills data
const skills = {
    title: 'My skills',
    description: 'A blend of technical expertise and creative design skills to deliver impactful solutions.',
    skillList: [
        {
            icons: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icons: <FaCss3 />,
            name: 'css 3'
        },
        {
            icons: <FaJs />,
            name: 'javascript'
        },
        {
            icons: <SiTypescript />,
            name: 'typescript'
        },
        {
            icons: <FaReact />,
            name: 'react.js'
        },
        {
            icons: <SiNextdotjs />,
            name: 'next.js'
        },
        {
            icons: <SiRedux />,
            name: 'redux'
        },
        {
            icons: <FaNodeJs />,
            name: 'node.js'
        },
        {
            icons: <SiExpress />,
            name: 'express.js'
        },
        {
            icons: <SiMongodb />,
            name: 'mongodb'
        },
        {
            icons: <SiMysql />,
            name: 'mysql'
        },
        {
            icons: <SiPostgresql />,
            name: 'postgresql'
        },
        {
            icons: <SiPrisma />,
            name: 'prisma'
        },
        {
            icons: <FaFigma />,
            name: 'figma'
        },
        {
            icons: <SiTailwindcss />,
            name: 'tailwindcss'
        },
        {
            icons: <SiPostman />,
            name: 'postman'
        },

    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* data */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value='education' className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* data */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icons}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-p[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume
