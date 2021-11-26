import React from 'react'
import ImageContainer from '../ImageContainer/ImageContainer'


export default function SmallImagesContainer(props) {
    return (
        <>
                <div className="  row">
                    <div className="col HomePage-imgElementNON p-2">
                        <a href=""> <ImageContainer img={props.img1} wid="w-100" /></a>
                        <div class="name">{props.text1}</div>

                    </div>
                    {/* 2 */}
                    <div className="col HomePage-imgElementNON p-2">
                        <a href=""> <ImageContainer img={props.img2} wid="w-100" /></a>
                        <div class="name">{props.text2}</div>
                    </div>
                    {/* 3 */}
                    <div className="col HomePage-imgElementNON p-2">
                        <a href=""> <ImageContainer img={props.img3} wid="w-100" /></a>
                        <div class="name">{props.text3}</div>

                    </div>
                    {/* 4 */}
                    <div className="col HomePage-imgElementNON p-2">
                        <a href=""> <ImageContainer img={props.img4} wid="w-100" /></a>
                        <div class="name">{props.text4}</div>

                    </div>
                    {/* 5 */}
                    <div className="col HomePage-imgElementNON p-2">
                        <a href=""> <ImageContainer img={props.img5} wid="w-100" /></a>
                        <div class="name">{props.text5}</div>

                    </div>
                    {/* 6 */}
                    <div className="col HomePage-imgElementNON p-2">
                        <a href=""> <ImageContainer img={props.img6} wid="w-100" /></a>
                        <div class="name">{props.text6}</div>

                    </div>
                </div>

            
        </>
    )
}
