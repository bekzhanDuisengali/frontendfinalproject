// AppInfo.js

import React from 'react';
import './app-info.css';

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1 className="app-info-title">Accounting in <strong>Facebook</strong></h1>
            <div className="app-info-stats">
                <p className="app-info-stat">
                    Total Number of Employees: <span className="stat-number">{employees}</span>
                </p>
                <p className="app-info-stat">
                    Employees Eligible for Award: <span className="stat-number">{increased}</span>
                </p>
            </div>
        </div>
    );
};

export default AppInfo;
