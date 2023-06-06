import { Grid, Text, Title } from "@tremor/react";
import { MainLayout } from "../components";
import { Header } from "../components/layout/Header";
import { useStore } from "../store/useStore";
import { useEffect } from "react";
import ChartView from "../components/iu/Chart";
import CardBitcoin from "../components/iu/CardBitcoin";

function Home() {
  const { setHistoricalData } = useStore();

  useEffect(() => {
    setHistoricalData();
  }, [setHistoricalData]);
  return (
    <>
      <Header />
      <MainLayout>
        <Title>Preio del Bitcoin</Title>

        <Grid numColsLg={1} className="mt-6 gap-2">
          <CardBitcoin />
        </Grid>

        <div className="mt-6">
          <Title>Grafica historica</Title>
          <Text className="mb-6 ">
            Puedes elegir, cuantos dias, para calcular el precio del Bitcoin en
            el futuro
          </Text>
          <ChartView />
        </div>
      </MainLayout>
    </>
  );
}

export default Home;
