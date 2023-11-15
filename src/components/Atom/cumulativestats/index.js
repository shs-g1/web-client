// components/Atom/cumulativestats/index.js

import React from "react";

const AtomCumulativeStats = ({ customers, totalAmount, profitMargin}) => {
    return (
        <div>
            <p>
                <span>누적 고객</span>
                <span> {customers}명</span>
            </p>
            <p>
                <span>누적 금액</span>
                <span> {totalAmount}원</span>
            </p>
            <p>
                <span>누적 수익률</span>
                <span> {profitMargin}%</span>
            </p>
        </div>
    );
}

export default AtomCumulativeStats;