import React, {useState, useCallback,useEffect} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { getView } from "../../config/API";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function View() {
    const [viewData, setViewData] = useState([]);
  
    const getPlaylist = useCallback(async () => {
      const viewData = await getView();
      setViewData(viewData.data);
  
    }, []);
  
    useEffect(() => {
      getPlaylist();
    }, [getPlaylist]);
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={400}
          data={viewData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day" stroke="var(--color-textSecond-400)" fontSize={14}  />
          <YAxis stroke="var(--color-textSecond-400)" fontSize={15} />
          <Tooltip />
          <Line type="monotone" dataKey="view" stroke="var(--theme-bg-400)" fill="var(--theme-bg-100)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default View;
