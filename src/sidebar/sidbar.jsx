import React from 'react';
import './sidbar.css';

function sidbar() {
  return (
    <>
        <div className="main--content">
            <div className="header--wrapper">
                <div className="hedear--title">
                    <span>Primary</span>
                    <h2>Dashboard</h2>
                </div>
                <div className="user--info">
                    <div className="search--box">
                        <i className=''></i>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='sary'>
                        <img src=""  alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default sidbar