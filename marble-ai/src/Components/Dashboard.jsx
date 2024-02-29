import React from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import data from '../db.json'

function Dashboard() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = ["Oct 2022", "Dec 2022", "Feb 2023", "Apr 2023", "Jun 2023", "Aug 2023", "Oct 2023", "Dec 2023"];

    const options = {
        plugins: {
            legend: {
                position: "bottom",
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                type: 'category',
                labels: data.dashboardData.labels,
            },
            y: {
                ticks: {
                    maxTicksLimit: 3,
                    callback: function (value, index, values) {
                        return value + "K";
                    },
                },
            },
        },
    };

    return (
        <div className='chart' style={{ width: "100%", height: "420px" }}>
            {data && (
                <Line options={options} data={data.dashboardData} />
            )}
        </div>
    );
}

export default Dashboard;