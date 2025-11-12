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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [chartData, setChartData] = useState<{ date: string; total: number }[]>(
    [],
  );
  const [days, setDays] = useState(7);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/statistic?days=${days}`);
      const data = await res.json();
      setChartData(data);
    };
    fetchData();
  }, [days]);

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div className="flex flex-col gap-2 ">
          <CardTitle>{`Riwayat cuti dalam ${days} hari kebelakang`}</CardTitle>
          <CardDescription>Chart riwayat cuti</CardDescription>
        </div>

        <ToggleGroup type="single">
          <ToggleGroupItem
            value="7"
            variant={"outline"}
            onClick={() => setDays(7)}
            className="flex items-center justify-center"
          >
            1 Minggu
          </ToggleGroupItem>
          <ToggleGroupItem
            value="30"
            variant={"outline"}
            onClick={() => setDays(30)}
            className="flex items-center justify-center"
          >
            1 Bulan
          </ToggleGroupItem>
          <ToggleGroupItem
            value="90"
            variant={"outline"}
            onClick={() => setDays(90)}
            className="flex items-center justify-center"
          >
            3 Bulan
          </ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>

      <CardContent>
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
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-total)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
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
            <ChartTooltip
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="total"
              type="natural"
              fill="url(#fillTotal)"
              stroke="var(--color-total)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
