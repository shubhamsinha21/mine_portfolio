import React from 'react'

export default function HeroSection() {
    return (
        <section id='heroSection' className='hero-section'>

            {/* Content about HeroSection */}
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I'm Shubham Sinha</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Software </span>{" "}
                        <br />
                        Engineer
                    </h1>
                    <p className="hero-section-description">Lorem ipsum dolor sit amet consectetur adi
                        <br />
                        pisicing elit. Nesciunt illo mollitia quas adipisci quam odit ipsam placeat dolorem vitae quae!
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>

            {/* Image in HeroSection */}
            <div className="hero-section-image">
                <img src="./img/hero_img.png" alt="Hero section" />
            </div>
        </section>
    )
}
