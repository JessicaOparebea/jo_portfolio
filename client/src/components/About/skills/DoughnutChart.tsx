import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

type DoughnutChartProps = {
  percentage: number
}
const DoughnutChart = ({ percentage }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#001A44', '#D3D3D3'],
        borderRadius: [20, 0],
        borderWidth: 0,
        cutout: '75%'
      }
    ]
  }

  const options = {
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    }
  }

  return (
    <div className='relative object-contain mt-4 aspect-[1.07] w-[87px]'>
      <Doughnut data={data} options={options} />
      <div className='absolute inset-1 flex items-center justify-center text-lg font-bold text-blue-900'>{percentage}%</div>
    </div>
  )
}

export default DoughnutChart
