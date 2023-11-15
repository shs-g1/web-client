// components/Molecule/cumulativestats/index.js

import React, { useState, useEffect } from "react";
import AtomCumulativeStats from "../../Atom/cumulativestats";

const MoleculeCumulativeStats = () => {
    const [data, setData]  = useState({ // default value
        customers: '23518',
        totalAmount: '121,314,134,500', 
        profitMargin: '300'    
    });

    useEffect(() => {
        // HTTP reqeust
        fetch("http://api.example.com")
        .then((response) => response.json())
        .then((result) => {
            setData({
                customers: result.customers,
                totalAmount: result.totalAmount,
                profitMargin: result.profitMargin    
            });
        })
        .catch((error) => {
            console.error("Error fetching data :", error);
        });
    }, []);

    return (
        <AtomCumulativeStats {...data} />
    );
};

export default MoleculeCumulativeStats;