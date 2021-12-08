import React from 'react';

import { useTranslation } from 'react-i18next'
export default function SeeAll(props) {
    const { t, i18n } = useTranslation();
    return (
        <>
            
            <div
                className="d-flex justify-content-between rounded  p-3  "
                style={{ color: props.color, background: props.background }}
            >
                <p className="  fw-bold fs-5 m-0 p-0"> {props.title}</p>
                 
                <a
                    style={{ color: props.color }}
                    className=" float-end text-decoration-none fw-bold   d-inline-block  fs-6 mt-1 "
                    href="#"
                >
                    {t('Eseeall')} &gt;
                </a>
            </div>
        </>
    )
}
