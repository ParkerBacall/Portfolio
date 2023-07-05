import React, { useRef } from 'react'
import Image from 'next/image'
import emailjs from 'emailjs-com'

export default function About() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f3ymqjm', 'template_grbefbv', e.target, 'ZWlgqZ8IRLR0o33w3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="flex flex-col lg:flex-row w-[100%]">
            <div className="w-full lg:w-[50%] p-4">
                <Image src="https://res.cloudinary.com/dpdnba5be/image/upload/v1680493703/meWithart_jtxpcm.png"
                    width={500}
                    height={500}
                    alt="Artist with Painting"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>

            <div className="w-full lg:w-[50%] p-4">
                <h2 className="p-2 font-semibold text-[24px] lg:text-[28px]">
                    About
                </h2>

                <p className="p-2 font-semibold text-neutral-500 text-[22px]">
                    Parker Bacall
                </p>

                <p className="p-2 text-[18px]">
                    Illustrator, painter, and screen printer based in Los Angeles, CA. I am inspired by subculture, skateboarding, and self-expression. My work is bold in its presentation and meaning I leave things open-ended so that the viewer can fill in the gaps with their own experience.
                </p>

                <p className="p-2 text-[18px]">
                    I have been running a screenprinting project <a target="__blank" rel="noopener noreferrer" href="https://www.sentimentalskull.com/">Sentimental Skull</a> for around 2 years. With the focus of the project being on D.I.Y. every piece is conceptualized and hand screenprinted by me.
                </p>

                <p className="p-2 text-[18px]">
                    Recently I have been sharing my work at the Los Feliz Flea Market every other month. I am currently looking for ways to expand the reach of my work and imporve it&apos;s impact.
                </p>

                <p className="p-2 text-[18px]">
                    I am always looking to connect with other artists and find new oppurtunites. If you are interested in anything I do please send me an email in the form below!
                </p>

                <form onSubmit={sendEmail} className="flex w-full flex-col pt-5 mx-auto flex py-5">
                    <div className='p-2 grid grid-cols-3'>
                        <label className='pr-5' >Name: </label>
                        <input className='border-solid border-2 border-black p-2 rounded-md ' type="text" placeholder="Name" name="name" />
                    </div>
                    <div className='p-2 grid grid-cols-3'>
                        <label className='pr-5'>Email: </label>
                        <input className='border-solid border-2 border-black p-2 rounded-md' type="email" placeholder="Email Address" name="email" />
                    </div>
                    <div className='p-2 grid grid-cols-4'>
                        <label className='pr-5 row-span-1'>Subject: </label>
                        <input className='border-solid border-2 row-span-3 border-black p-2 rounded-md' type="text" placeholder="Subject" name="subject" />
                    </div>

                    <div className='p-2 flex justify-start grid grid-cols-3'>
                        <label className='pr-5'>Message: </label>
                        <textarea className='border-solid border-2 border-black p-2 rounded-md' placeholder="Your message" name="message"></textarea>
                    </div>

                    <button className='w-[100px] hover:bg-gray-500 transition-bg duration-300 border-solid border-2 border-black p-2 rounded-md' type="submit">Sumbit</button>
                </form>

                <p className="p-2 text-[18px]">
                    If you want to follow my growth please follow me on instagram of subcribe to my newsletter. Thanks for taking the time to look at what I have done so far, it means the world to me.
                </p>
            </div>
        </div >
    )
}
