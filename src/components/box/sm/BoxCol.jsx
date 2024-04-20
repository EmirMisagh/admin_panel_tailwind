import { ResponsiveBar } from "@nivo/bar";
import { Bardata } from "../../../config/Charts";
import { MdDoubleArrow } from "react-icons/md";

export default function BoxCol({ title, body, number, color }) {
  return (
    <div className="p-6 rounded-2xl grid grid-cols-3 box bg-green-400 ">
      <div className="flex flex-col gap-4 col-span-2">
        <p className=" text-textSecond_300 text-sm font-bold">{title}</p>
        <p className="text-sm text-textSecond_300 font-bold flex items-center">
          <span className={`${body.search('-') ? 'rotate-[270deg] text-green-400' : 'rotate-90 text-red-400'}  text-xl mr-2`}>
            <MdDoubleArrow />
          </span>
          {body}%
        </p>
        <h2 className="text-2xl text-textSecond_100 font-bold">{number > 1000 ? number / 1000 : number}</h2>
      </div>
      <div className="col-span-1">
        <ResponsiveBar
          data={Bardata}
          keys={["donut"]}
          indexBy="id"
          margin={{ top: 30, right: 0, bottom: 30, left: 25 }}
          padding={0.3}
          indexScale={{ type: "band", round: false }}
          colors={color}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "#fff",
                  strokeWidth: 0.0,
                  background: "#000",
                },
              },
              legend: {
                text: {
                  fill: "none",
                  background: "#000",
                },
              },
              ticks: {
                line: {
                  stroke: "#fff",
                  strokeWidth: 0,
                  background: "#000",
                },
                text: {
                  fill: "none",
                  outlineColor: "none",
                },
              },
            },
            grid: {
              line: {
                stroke: "#dddddd",
                strokeWidth: 0,
                margin: 0,
              },
            },
            legends: {
              text: {
                fill: "text-gray-400",
              },
            },
          }}
          axisTop={null}
          axisRight={null}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.1]],
          }}
          role="figure"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
          ariaLabelledBy="data.donut"
          ariaDescribedBy="data.donut"
          label="donut"
        />
      </div>
    </div>
  );
}