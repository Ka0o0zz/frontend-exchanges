import { BadgeDelta, Card, Flex, Metric, Text, Title } from "@tremor/react";

interface PropsCardInfo {
  loading: boolean;
  percentageDifference: {
    exchange: string;
    name: string;
    price: number;
    difference: number;
  };
  moderateIncrease?: boolean;
}

export default function CardInfo({
  loading,
  percentageDifference,
  moderateIncrease,
}: PropsCardInfo) {
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
              <Text>{moderateIncrease ? "Mejor precio" : "Peor precio"}</Text>
              <Metric>${percentageDifference?.price}</Metric>
            </div>
            <BadgeDelta
              deltaType={
                moderateIncrease ? "moderateIncrease" : "moderateDecrease"
              }
            >
              {percentageDifference?.difference}%
            </BadgeDelta>
          </Flex>
          <div className="mt-4">
            <Text className="truncate">{percentageDifference?.name}</Text>
            <Title className="truncate">{percentageDifference?.exchange}</Title>
          </div>
        </>
      )}
    </Card>
  );
}
