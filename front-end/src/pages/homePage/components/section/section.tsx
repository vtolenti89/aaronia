import React, { useRef, useEffect } from 'react';
import Button from '../../../../components/shared/button/button';
import './section.scss';

interface SectionProps {
    id?: string;
    image: string;
    headline: string;
    text: string;
    flip: boolean;
    forumLink: string;
    videoLink: string;
}

const Section: React.FC<SectionProps> = ({id,  image, headline, text, flip, forumLink, videoLink }) => {

    const handleOnClick = (link: string) => {
        window.location.assign(link);
    }

    return (
        <div id={id} className={`c-section ${flip ? 'c-section--reverse' : ''}`}>
            <div className={`c-section__image-wrapper`}>
                <img src={image} alt="section__image" />
            </div>
            <div className={'c-section__content'}>
                <div className={'c-section__content__inner'}>
                    <h2>{headline}</h2>
                    <p>{text}</p>
                </div>
                <div className={'c-section__footer'}>
                    {forumLink != "" &&
                        <Button
                            label={'Mehr im V6 Forum'}
                            onClick={(e: any) => handleOnClick(forumLink)} />}
                    {videoLink != "" &&
                        <Button
                            label={'Video'}
                            onClick={(e: any) => handleOnClick(videoLink)} />}
                </div>
            </div>
        </div>
    )
}

export default Section;