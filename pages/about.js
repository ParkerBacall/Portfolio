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
                    Illustrator, painter, and screen printer based in Los Angeles, CA. Inspired by subculture, skateboarding, and self-expression. My work is bold in its presentation and meaning I leave things open-ended so that the viewer can fill in the gaps with their own experience.
                </p>

                <p className="p-2 text-[18px]">
                    I have been running a screenprinting project <a target="__blank" rel="noopener noreferrer" href="https://www.sentimentalskull.com/">Sentimental Skull</a> for around 2 years. With the focus of the project being on D.I.Y. every piece is screenprinted by me.
                </p>

                <p className="p-2 text-[18px]">
                    Recently I have been sharing my work at the Los Feliz Flea Market every other month. I am currently looking for ways to expand the reach of my work and imporve it's impact.
                </p>

                <p className="p-2 text-[18px]">
                    Ideally I would like to use this site as a means to connect with other artists in the hopes of finding new oppurtunites. If you are interested in anything I do please send me an email in the form below!
                </p>

                <label for="email">Enter your email:</label>
                <input type="email" id="email" name="email"></input>

                <p className="p-2 text-[18px]">
                    If you want to follow my growth please follow me on instagram of subcribe to my newsletter. Thanks for taking the time to look at what I have done so far, it means the world to me.
                </p>

                <form onSubmit={sendEmail} className="flex w-full flex-col pt-5 mx-auto flex pt-5">
                    <input type="text" placeholder="Name" name="name" />

                    <input type="email" placeholder="Email Address" name="email" />
                    <input type="text" placeholder="Subject" name="subject" />
                    <textarea placeholder="Your message" name="message"></textarea>
                    <button type="submit">Sumbit</button>
                </form>
                {/* <iframe src="https://parkerbacall.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EEE', background: 'white' }} frameborder="0" ></iframe> */}
            </div>
        </div >
    )
}
