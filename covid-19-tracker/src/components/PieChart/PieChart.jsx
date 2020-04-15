import React from 'react';
import Pie from 'react-chartjs-2';

const PieChart = ( { data: {confirmed, recovered, deaths } } ) => {

    // We can just check for confirmed. If this value isn't loaded then nothing else is
    if (!confirmed) {
        return ' ';
    }

    const displayData = {
        labels: [
            'Active Cases',
            'Recovered',
            'Deaths'
        ],
        datasets: [{
            data: [confirmed.value - recovered.value - deaths.value, recovered.value, deaths.value],
            backgroundColor: [
            'rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)'
            ]
        }]
    };

    return(
        <div>
            <Pie data={displayData} width = {300} height = {300} options={{ maintainAspectRatio: false }}/>
      </div>
    )
}

export default PieChart