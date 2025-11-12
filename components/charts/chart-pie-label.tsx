"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const chartConfig = {
  chrome: {
    label: "Sisa Cuti",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Total Cuti",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartPieLabel() {
  const { data: session } = useSession();

  const [chartData, setChartData] = useState<
    { title: string; total: number }[]
  >([]);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchData = async () => {
      const res = await fetch(`/api/statistic/cuti/${session?.user.id}`);
      const data = await res.json();
      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Cuti</CardTitle>
        <CardDescription>Status dan informasi cuti Anda</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="total" label nameKey="title" />
            <ChartLegend content={<ChartLegendContent nameKey="chrome" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
