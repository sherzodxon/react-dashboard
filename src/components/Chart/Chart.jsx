import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    YAxis
} from "recharts";
import "./Chart.scss";

const data = [
    {
        rate: 12338.77,
        month: 'January'
    }, 
    {
        rate: 12420.24,
        month: 'February'
    }, 
    {
        rate: 12496.8,
        month: 'March'
    }, 
    {
        rate: 12628.05,
        month: 'April'
    }, 
    {
        rate: 12610.17,
        month: 'May'
    }, 
    {
        rate: 12619.83,
        month: 'June'
    }, 
    {
        rate: 12557.67,
        month: 'July'
    }, 
    {
        rate: 12544.11,
        month: 'August'
    }, 
    {
        rate: 12625.01,
        month: 'September'
    }, 
    {
        rate: 12715.42,
        month: 'October'
    }, 
    {
        rate: 12780.09,
        month: 'November'
    }, 
    {
        rate: 12865.05,
        month: 'December'
    }
];
function roundToLowerHundred(value) {
    return Math.floor(value / 100) * 100;
}
function roundToUpperHundred(value) {
    return Math.ceil(value / 100) * 100;
}

function findMinMaxRate(data) {
    let minRate = data[0].rate;
    let maxRate = data[0].rate;

    for (let i = 1; i < data.length; i++) {
        if (data[i].rate < minRate) {
            minRate = data[i].rate;
        }
        if (data[i].rate > maxRate) {
            maxRate = data[i].rate;
        }
    }

    return {minRate, maxRate};
}

const {minRate, maxRate} = findMinMaxRate(data);

const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Last 6 Months (Revenue)</div>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    tension="0.1"
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}>
                    <defs>
                        <linearGradient id="rate" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="gray" strokeWidth={2}/>
                    <YAxis domain={[roundToLowerHundred(minRate), roundToUpperHundred(maxRate)]}/>
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                    <Tooltip/>
                    <Area type="bump" dataKey="rate" stroke="#8884d8" fillOpacity={1} fill="url(#rate)" strokeWidth={3} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
