import React from "react";

export default function PopUpBox(props){
    return (
        <>

            <div className="modal-overlay">
                <div className="modal-content">
                    {props.children}                    
                </div>                
            </div>
        
        </>
    )
}