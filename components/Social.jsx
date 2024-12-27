import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import React from 'react'

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/manishmeena022' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/manishmeena022/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social