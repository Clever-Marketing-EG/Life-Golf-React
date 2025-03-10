import React from 'react';
import './AboutUs.scss';
import { useTranslation } from 'react-i18next';


export default function AboutUs({ meta }) {
    const { t } = useTranslation();

    return (
        <div id={'about-us'} className={'container d-flex flex-wrap-reverse justify-content-around'} dir={t('dir')}  >
            <div className={'left-container d-flex flex-wrap justify-content-around'}>
                <img src={meta.about_us_images_1} alt={''} className={'about-image image-1'} />
                <img src={meta.about_us_images_2} alt={''} className={'about-image image-2'} />
                <img src={meta.about_us_images_3} alt={''} className={'about-image image-3'} />

            </div>
            <div className={'right-container'}>
                <h1 className={'home-header'}>{meta.about_us_header}</h1>
                <hr className={'blue-line'} />
                <p className={'home-paragraph'}>
                    {meta.about_us_content}
                </p>
                <a className={'home-blue-button'} href={'/About'}>
                   {t('utils.see-more')} 
                </a>
            </div>
        </div>
    )
}
