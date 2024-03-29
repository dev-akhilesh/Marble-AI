import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Home() {
    const [isDashboardVisible, setDashboardVisibility] = useState(false);

    const toggleDashboard = () => {
        setDashboardVisibility(!isDashboardVisible);
    };

    return (
        <div className="main">
            <div className="stats-cont">
                <div className="box-cont1">
                    <div className="box-col">
                        <div className="txt-cont">
                            <p>Online store sessions</p>
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.6895 6.23633L5.77344 12.1523L4.91016 11.2891L5.01172 11.1875H3.84375C3.61523 11.1875 3.4375 11.0098 3.4375 10.7812V9.61328L3.33594 9.71484C3.20898 9.8418 3.13281 9.96875 3.08203 10.1465L2.49805 12.127L4.47852 11.543C4.63086 11.4922 4.7832 11.416 4.91016 11.2891L5.77344 12.1523C5.51953 12.4062 5.18945 12.6094 4.83398 12.7109L1.76172 13.5996C1.55859 13.6758 1.33008 13.625 1.17773 13.4473C1 13.2949 0.949219 13.0664 1 12.8633L1.91406 9.79102C2.01562 9.43555 2.21875 9.10547 2.47266 8.85156L8.38867 2.93555L11.6895 6.23633ZM13.4922 2.12305C14.127 2.75781 14.127 3.79883 13.4922 4.43359L12.2734 5.65234L8.97266 2.35156L10.1914 1.13281C10.8262 0.498047 11.8672 0.498047 12.502 1.13281L13.4922 2.12305Z"
                                    fill="black"
                                    fillOpacity="0.5"
                                />
                            </svg>
                        </div>
                        <div className="price-cont">
                            <h1>255,581</h1>
                            <div>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 12 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.875 1.375C7.52344 1.375 7.25 1.10156 7.25 0.75C7.25 0.417969 7.52344 0.125 7.875 0.125H11C11.332 0.125 11.625 0.417969 11.625 0.75V3.875C11.625 4.22656 11.332 4.5 11 4.5C10.6484 4.5 10.375 4.22656 10.375 3.875V2.27344L7.05469 5.57422C6.82031 5.82812 6.41016 5.82812 6.17578 5.57422L4.10547 3.52344L1.42969 6.19922C1.19531 6.45312 0.785156 6.45312 0.550781 6.19922C0.296875 5.96484 0.296875 5.55469 0.550781 5.32031L3.67578 2.19531C3.91016 1.94141 4.32031 1.94141 4.55469 2.19531L6.625 4.24609L9.47656 1.375H7.875Z"
                                        fill="#616161"
                                    />
                                </svg>
                                <span> 9%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-cont">
                    <div className="box-col">
                        <div className="txt-cont">
                            <p>Net return value</p>
                        </div>
                        <div className="price-cont">
                            <h1>-$15,07.44</h1>
                            <div>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 7 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.550781 3.44531L3.03125 0.945312C3.16797 0.828125 3.32422 0.75 3.5 0.75C3.65625 0.75 3.8125 0.828125 3.92969 0.945312L6.41016 3.44531C6.58594 3.62109 6.64453 3.89453 6.54688 4.12891C6.44922 4.36328 6.23438 4.5 5.98047 4.5H1C0.746094 4.5 0.511719 4.36328 0.414062 4.12891C0.316406 3.89453 0.375 3.62109 0.550781 3.44531Z"
                                        fill="#616161"
                                    />
                                </svg>
                                <span> 14%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-cont">
                    <div className="box-col">
                        <div className="txt-cont">
                            <p>Total orders</p>
                        </div>
                        <div className="price-cont">
                            <h1>10,511</h1>
                            <div>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 7 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.550781 3.44531L3.03125 0.945312C3.16797 0.828125 3.32422 0.75 3.5 0.75C3.65625 0.75 3.8125 0.828125 3.92969 0.945312L6.41016 3.44531C6.58594 3.62109 6.64453 3.89453 6.54688 4.12891C6.44922 4.36328 6.23438 4.5 5.98047 4.5H1C0.746094 4.5 0.511719 4.36328 0.414062 4.12891C0.316406 3.89453 0.375 3.62109 0.550781 3.44531Z"
                                        fill="#616161"
                                    />
                                </svg>
                                <span> 2%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-cont">
                    <div className="box-col">
                        <div className="txt-cont">
                            <p>Conversion rate</p>
                        </div>
                        <div className="price-cont">
                            <h1>3.18%</h1>
                            <div>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 7 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.550781 3.44531L3.03125 0.945312C3.16797 0.828125 3.32422 0.75 3.5 0.75C3.65625 0.75 3.8125 0.828125 3.92969 0.945312L6.41016 3.44531C6.58594 3.62109 6.64453 3.89453 6.54688 4.12891C6.44922 4.36328 6.23438 4.5 5.98047 4.5H1C0.746094 4.5 0.511719 4.36328 0.414062 4.12891C0.316406 3.89453 0.375 3.62109 0.550781 3.44531Z"
                                        fill="#616161"
                                    />
                                </svg>
                                <span> 7%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drop" onClick={toggleDashboard}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 11 7"
                        fill="#00000080"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.5 6.75C5.28906 6.75 5.10156 6.67969 4.96094 6.53906L0.460938 2.03906C0.15625 1.75781 0.15625 1.26562 0.460938 0.984375C0.742188 0.679688 1.23438 0.679688 1.51562 0.984375L5.5 4.94531L9.46094 0.984375C9.74219 0.679688 10.2344 0.679688 10.5156 0.984375C10.8203 1.26562 10.8203 1.75781 10.5156 2.03906L6.01562 6.53906C5.875 6.67969 5.6875 6.75 5.5 6.75Z"
                            fill="black"
                            fillOpacity="0.5"  
                        />
                    </svg>
                </div>

            </div>
            {isDashboardVisible && <Dashboard />}
        </div>
    );
}

export default Home;
