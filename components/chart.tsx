"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartData = [
  { date: "January", total: 80 },
  { date: "February", total: 200 },
  { date: "March", total: 120 },
  { date: "April", total: 190 },
  { date: "May", total: 130 },
  { date: "June", total: 140 },
];

const chartConfig = {
  total: {
    label: "Total",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [chartData, setChartData] = useState<{ date: string; total: number }[]>(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/statistic/cuti");
      const data = await res.json();
      setChartData(data);
    };
    fetchData();
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[250px] w-full"
    >
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-total)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-total)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          dataKey="total"
          type={"natural"}
          stroke="var(--color-total)"
          fill="var(--color-total)"
          radius={4}
        />
      </AreaChart>
    </ChartContainer>
  );
}
