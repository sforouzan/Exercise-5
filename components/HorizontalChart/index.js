import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data: [85, 40, 20, 10, 90, 68, 19],
                    borderColor: 'rgb(236, 89, 155)',
                    backgroundColor: 'rgba(244, 100, 219, 0.4)'
                },
                {
                    label: 'data 2',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(236, 89, 155)',
                    backgroundColor: 'rgba(100, 185, 219, 0.4)'
                },
                {
                    label: 'data 3',
                    data: [29, 42, 56, 18, 39, 21, 45],
                    borderColor: 'rgb(236, 89, 155)',
                    backgroundColor: 'rgba(145, 11, 234, 0.4)'
                },
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
            </div>
        </>
    )
}