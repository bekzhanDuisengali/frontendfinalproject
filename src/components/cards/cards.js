import React from 'react';
import user from './user.jpg';
import './cards.css';

const Cards = (props) => {
    const { maxSalary, nameOfMaxSalaryEmployee } = props.getMaxSalary();

    return (
        <div className="card-container">
            <div className='card-title'>
                Hall of Fame <br />
            </div>
            <div className='card-content'>
                <img src={user} alt="user" className='card-img'/>
                <div className="card-description">
                    Salary = {maxSalary}$ - Our best worker of the month is <strong>{nameOfMaxSalaryEmployee}</strong>. We really appreciate what you are doing for us. Keep up the good work!
                </div>
            </div>
        </div>
    );
};

export default Cards;
