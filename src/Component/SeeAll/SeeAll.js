import React from 'react'

export default function SeeAll(props) {
    return (
        <>
            
            <div
                className="row rounded  p-3 "
                style={{ color: props.color, background: props.background }}
            >
                <p className=" col-4 fw-bold fs-5 d-inline-block m-0 p-0"> {props.title}</p>
                <a
                    style={{ color: props.color }}
                    className="col text-end text-decoration-none fw-bold fs-6 mt-1 "
                    href="#"
                >
                    See All &gt;
                </a>
            </div>
        </>
    )
}
