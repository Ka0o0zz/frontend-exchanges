import { Grid, Text, Title } from "@tremor/react";
import { MainLayout } from "../components";
import CardInfo from "../components/iu/Card";
import TableView from "../components/iu/Table";
import { Header } from "../components/layout/Header";
import { useStore } from "../store/useStore";
import { useEffect } from "react";

function Home() {
  const { setListExchangesCompare, loading, percentageDifference } = useStore();

  useEffect(() => {
    setListExchangesCompare();
  }, [setListExchangesCompare]);
  return (
    <>
      <Header />
      <MainLayout>
        <Title>Diferencia porcentual</Title>
        <Text>
          La mayor diferencia encontrada entre los precios de Activos Digitales
          en Binance y Crypto.com.
        </Text>

        <Grid numColsLg={2} className="mt-6 gap-2">
          <CardInfo
            loading={loading}
            percentageDifference={percentageDifference.highest}
            moderateIncrease
          />
          <CardInfo
            loading={loading}
            percentageDifference={percentageDifference.lowest}
          />
        </Grid>

        <div className="mt-6">
          <Title>Comparación de precios</Title>
          <Text className="mb-6 ">
            entre Binance y Crypto.com diferencia porcentual
          </Text>
          <TableView />
        </div>
      </MainLayout>
    </>
  );
}

export default Home;
