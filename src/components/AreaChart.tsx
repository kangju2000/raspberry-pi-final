import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  type TooltipCallbacks,
} from 'chart.js';
import { RealTimeScale, StreamingPlugin } from 'chartjs-plugin-streaming';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';

ChartJS.register(
  StreamingPlugin,
  RealTimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export type AreaChartData = { x: number; y: number }[];

type Props = {
  data?: AreaChartData;
  tooltipCallbacks?: Partial<TooltipCallbacks<'line'>>;
  onRefresh?: (chart: ChartJS<'line'>) => void;
};

export function AreaChart({ data, tooltipCallbacks, onRefresh }: Props) {
  return (
    <Line
      height={null}
      width={null}
      data={{
        datasets: [
          {
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            cubicInterpolationMode: 'monotone',
            type: 'line',
            data: data || [],
            fill: 'origin',
          },
        ],
      }}
      options={{
        aspectRatio: 1,
        maintainAspectRatio: false,
        spanGaps: true,
        responsive: true,
        plugins: {
          filler: {
            propagate: true,
          },
          tooltip: {
            displayColors: false,
            titleFont: {
              size: 16,
            },
            bodyFont: {
              size: 12,
            },
            callbacks: tooltipCallbacks,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: 'realtime',
            time: {
              unit: 'second',
              displayFormats: {
                second: 'HH:mm:ss',
              },
            },
            realtime: {
              duration: 30000,
              delay: 2000,
              onRefresh,
            },
          },
        },
      }}
    />
  );
}
