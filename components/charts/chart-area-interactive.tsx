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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Tableheader from "@/components/table-header";
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
        <Tableheader
          title={`Riwayat cuti dalam ${days} hari kebelakang`}
          description="Chart riwayat cuti"
        />

        <ToggleGroup type="single">
          <ToggleGroupItem
            value="7"
            variant={"outline"}
            onClick={() => setDays(7)}
          >
            1 Minggu
          </ToggleGroupItem>
          <ToggleGroupItem
            value="30"
            variant={"outline"}
            onClick={() => setDays(30)}
          >
            1 Bulan
          </ToggleGroupItem>
          <ToggleGroupItem
            value="90"
            variant={"outline"}
            onClick={() => setDays(90)}
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
              type={"natural"}
              stroke="var(--color-total)"
              fill="var(--color-total)"
              radius={4}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
