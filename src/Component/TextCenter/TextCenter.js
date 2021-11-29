import React from 'react'

export default function TextCenter(props) {
    return (
        <>
            <div className="row   justify-content-center">
                <div className="col-4  pt-2">
                    <p className="fw-bold fs-5">
                      {props.title}
                    </p>
                </div>
            </div>
            
        </>
    )
}
