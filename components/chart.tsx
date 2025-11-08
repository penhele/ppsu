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

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function Chart() {
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
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
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
