import { useState } from "react";
import {
  AreaChart,
  Card,
  Flex,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { useStore } from "../../store/useStore";

// Basic formatters for the chart values
const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartView() {
  const { historicalData, setHistoricalData } = useStore();

  return (
    <Card>
      <div className="md:flex justify-between">
        <div>
          <Flex
            justifyContent="start"
            className="space-x-0.5"
            alignItems="center"
          >
            <Title> Performance History </Title>
          </Flex>
          <Text> Daily increase or decrease per domain </Text>
        </div>
        <div className="mt-6 md:mt-0">
          <Toggle
            color="zinc"
            defaultValue={'0'}
            onValueChange={(value) => setHistoricalData(value)}
          >
            <ToggleItem value="0" text="Hoy" />
            <ToggleItem value="7" text="7 Dias En el Futuro" />
            <ToggleItem value="15" text="15 Dias En el Futuro" />
            <ToggleItem value="30" text="30 Dias En el Futuro" />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={historicalData}
        index="date"
        categories={["value"]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={dollarFormatter}
        yAxisWidth={56}
        className="h-96 mt-8"
      />
    </Card>
  );
}
