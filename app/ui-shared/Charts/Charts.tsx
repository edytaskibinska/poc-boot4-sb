import React, { FC } from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

const initialState: any = {
    type: 'doughnut',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [90, 80, 73, 20, 10]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
};


const Charts: FC<any> = () => {
    return (
        <>
            <Bar
                data={initialState.data}
                options={{ maintainAspectRatio: false }}
            />
            <Pie data={initialState.data} />
            <Line data={initialState.data} />
            <Doughnut data={initialState.data} />
        </>
    );
};
export default Charts

