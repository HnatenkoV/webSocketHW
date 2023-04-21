import React, {useState, useContext, useEffect} from 'react';
import {wsContext} from "../providers/wsProvider";

const EmergencyWindow = () => {
    const wsCtx = useContext(wsContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            wsCtx.setEmergency(null)
        }, 3000);

        return () => clearTimeout(timer);
    }, [wsCtx]);

    const autoClose = () => {
        wsCtx.setEmergency(null)
    }

    return (
        <div className="emg-wind" onClick={autoClose}>
            <p className="emg-wind-p">{wsCtx.emergency}</p>
        </div>
    );
};

export default EmergencyWindow;