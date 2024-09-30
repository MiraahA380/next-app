"use client"

import {Bar, BarChart, XAxis} from "recharts";
// import Link from "next/link";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const chartData = [
    {month: "January", desktop: 186, mobile: 80},
    {month: "February", desktop: 305, mobile: 200},
    {month: "March", desktop: 237, mobile: 120},
    {month: "April", desktop: 73, mobile: 190},
    {month: "May", desktop: 209, mobile: 130},
    {month: "June", desktop: 214, mobile: 140},
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

export default function Home() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 p-5 space-x-2">
            <Card>
                <CardHeader>
                    <CardTitle>Usage</CardTitle>
                    <CardDescription>Customer usage</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <p>Trending up by 5% compared to last month</p>
                </CardFooter>
            </Card>
        </main>
    );
}
