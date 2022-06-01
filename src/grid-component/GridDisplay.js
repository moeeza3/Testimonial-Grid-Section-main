import React from "react";
import GridComp from "./GridComp";
import GridData from "./GridData";

function GridDisplay(){
         
    return (
        <>
        <section className="testimonials">

        <GridComp testimonial={`testimonial testimonial--violet`} 
        imgsrc={GridData[0].imgsrc} 
        stdName={GridData[0].stdName} 
        stdStatus={GridData[0].stdStatus} 
        stdAbout={GridData[0].stdAbout}
        stdDetail={GridData[0].stdDetail}/>

        <GridComp testimonial={`testimonial`} 
        imgsrc={GridData[1].imgsrc} 
        stdName={GridData[1].stdName} 
        stdStatus={GridData[1].stdStatus} 
        stdAbout={GridData[1].stdAbout}
        stdDetail={GridData[1].stdDetail}/>

        <GridComp testimonial={`testimonial testimonial--white`} 
        imgsrc={GridData[2].imgsrc} 
        stdName={GridData[2].stdName} 
        stdStatus={GridData[2].stdStatus} 
        stdAbout={GridData[2].stdAbout}
        stdDetail={GridData[2].stdDetail}/>

        <GridComp testimonial={`testimonial testimonial--black`} 
        imgsrc={GridData[3].imgsrc} 
        stdName={GridData[3].stdName} 
        stdStatus={GridData[3].stdStatus} 
        stdAbout={GridData[3].stdAbout}
        stdDetail={GridData[3].stdDetail}/>

        <GridComp testimonial={`testimonial testimonial--white`} 
        imgsrc={GridData[4].imgsrc} 
        stdName={GridData[4].stdName} 
        stdStatus={GridData[4].stdStatus} 
        stdAbout={GridData[4].stdAbout}
        stdDetail={GridData[4].stdDetail}/>
        </section>
        </>
    );
       
}

export default GridDisplay;