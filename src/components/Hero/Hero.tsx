// import scss
import './Hero.scss';

export interface HeroContentModel {
    title: string
    subtitle: string
    imageUrl: string
    videoUrl?: string
}

const Hero: React.FC<HeroContentModel> = (content: HeroContentModel) => {
    return (
        <div
            className='hero-section-wrapper'
            style={{ backgroundImage: `url(${content.imageUrl})` }}
        >
            {/* background video */}
            <>
                {content.videoUrl
                    ?
                    <div className='highlight-video-container'>
                        <video
                            className='highlight-video'
                            src={content.videoUrl}
                            autoPlay
                            muted
                            loop
                        >
                            <source src={content.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    : null
                }
            </>

            <div className='content-wrapper p-5'>
                <div className='title-content'>
                    <h1 dangerouslySetInnerHTML={{ __html: content.title }}></h1>
                    <p className='text-white'>{content.subtitle}</p>
                </div>
                <button className='bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded'>Get Started</button>
            </div>

        </div>
    );
}

export default Hero;