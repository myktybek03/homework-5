import ChartBar from "./ChartBar"
import styles from "./Chart.module.css"

const Chart = ({ dataPoints = [] }) => {
  const dataPointsValues = dataPoints.map((point) => point.value)
  const totalMax = Math.max(...dataPointsValues)
  return (
    <div className={styles.chart}>
      {dataPoints.map((point, index) => (
        <ChartBar
          key={index}
          maxValue={totalMax}
          label={point.label}
          value={point.value}
        />
      ))}
    </div>
  )
}

export default Chart
