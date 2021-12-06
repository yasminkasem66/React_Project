import React from 'react';
import { useTranslation } from 'react-i18next'

export default function SeeAll(props) {
    const { t, i18n } = useTranslation();
    return (
        <>
            
            <div
                className="row rounded  p-3  "
                style={{ color: props.color, background: props.background }}
            >
                <p className=" col-4 fw-bold fs-5 d-inline-block  m-0 p-0"> {props.title}</p>
                <a
                    style={{ color: props.color }}
                    className="col text-end text-decoration-none fw-bold fs-6 mt-1 "
                    href="#"
                >
                    {t('Eseeall')} &gt;
                </a>
            </div>
        </>
    )
}
