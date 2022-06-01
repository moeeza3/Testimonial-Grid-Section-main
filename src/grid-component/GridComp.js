import React from "react";

function GridComp(props){
    return (
        <>
        <div className={props.testimonial}>
            <div className="testimonial__student">
                <img src={props.imgsrc} alt={props.stdName} />
                <h3 className="testimonial__student__name">{props.stdName}</h3>
                <h3 className="testimonial__student__title">{props.stdStatus}</h3>  
            </div>
            <h2 className="testimonial__title">{props.stdAbout}</h2>
            <p className="testimonial__quote">{props.stdDetail}</p>
        </div>
        </>
    );
}
export default GridComp;