import React from 'react';
import './Features.scss';
import { useTranslation } from "react-i18next";

export default function Features({ data }) {
    const { t } = useTranslation()

    return (
        <div id={'features'} dir={t('dir')}>
            <ul className={'features-list'}>

                {
                    data.features.map((item, index) => (
                        <li className={'features-list-item'}>
                            <div className={'small-circle'} />
                            {item}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}
