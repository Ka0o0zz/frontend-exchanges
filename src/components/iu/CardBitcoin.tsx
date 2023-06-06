import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";
import { useStore } from "../../store/useStore";

export default function CardBitcoin() {
  const { loading, futurePrice, todayPrice, historicalData } = useStore();

  const price = parseInt(futurePrice) === 0 ? todayPrice : futurePrice;

  const date = historicalData[historicalData.length - 1]?.date;

  const previousPrice = parseFloat(todayPrice);
  const priceDifference = parseFloat(futurePrice) - previousPrice;
  const percentageDifference = (priceDifference / previousPrice) * 100;

  const isLower = parseFloat(todayPrice) < parseFloat(futurePrice);

  return (
    <Card className="">
      {loading ? (
        <Flex alignItems="center">
          <Text>Loading...</Text>
        </Flex>
      ) : (
        <>
          <Flex alignItems="start">
            <div>
              <Text>Bitcoin</Text>
              <Metric>${price}</Metric>
            </div>
            {parseFloat(futurePrice) !== 0 && (
              <BadgeDelta
                deltaType={isLower ? "moderateIncrease" : "moderateDecrease"}
              >
                {percentageDifference}%
              </BadgeDelta>
            )}
          </Flex>
          <div className="mt-4">
            <Text className="truncate">{date}</Text>
          </div>
        </>
      )}
    </Card>
  );
}
