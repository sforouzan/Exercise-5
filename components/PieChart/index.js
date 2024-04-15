import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Pink",  "Yellow", "Purple", "Green"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(122, 20, 20)',
                        'rgba(60, 130, 250)',
                        'rgba(250, 190, 200)',
                        'rgba(251, 176, 59)',
                        'rgba(200, 100, 220)',
                        'rgba(30, 170, 100, 0.4)',
                    ],
                    backgroundColor: [
                        'rgba(122, 20, 20, 0.4)',
                        'rgba(60, 130, 250, 0.4)',
                        'rgba(250, 190, 200, 0.4)',
                        'rgba(251, 176, 59, 0.4)',
                        'rgba(200, 100, 220, 0.4)',
                        'rgba(30, 170, 100, 0.4)',
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
        <div>
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
        </div>
        </>
    )
}