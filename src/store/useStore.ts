/* eslint-disable @typescript-eslint/no-explicit-any */
import { startTransition } from "react";
import { create } from "zustand";

export interface IPercentageDifference {
  highest: {
    exchange: string;
    name: string;
    price: number;
    difference: number;
  };
  lowest: {
    exchange: string;
    name: string;
    price: number;
    difference: number;
  };
}

interface IHistoricalData {
  date: string;
  value: number;
}

type IStore = {
  loading: boolean;
  listExchangesCompare: [];
  percentageDifference: IPercentageDifference | any;
  historicalData: IHistoricalData[];
  todayPrice: string;
  futurePrice: string;
  setListExchangesCompare: () => void;
  setHistoricalData: (days?: string) => void;
};

export const useStore = create<IStore>((set) => ({
  loading: false,
  listExchangesCompare: [],
  percentageDifference: {},
  todayPrice: "",
  futurePrice: "",
  historicalData: [],

  setListExchangesCompare: async () => {
    try {
      set(() => ({ loading: true }));

      const updateState = async () => {
        const response = await fetch("http://localhost:8080/api/cryptos/");
        const { listExchangesCompare } = await response.json();

        set(() => ({
          loading: false,
          listExchangesCompare: listExchangesCompare.listExchangesCompare,
          percentageDifference: listExchangesCompare.percentageDifference,
        }));
      };

      const update = await updateState();
      startTransition(() => update);
    } catch (error) {
      console.error({ error });
    } finally {
      set(() => ({ loading: false }));
    }
  },
  setHistoricalData: async (days?: string) => {
    try {
      set(() => ({ loading: true }));
      const updateState = async () => {
        const { futureBitcoin } = await (
          await fetch(
            `http://localhost:8080/api/cryptos/predict-future-bitcoin?days=${
              days ? days : ""
            }`
          )
        ).json();
        set(() => ({
          loading: false,
          historicalData: futureBitcoin.historicalData,
          todayPrice: futureBitcoin.todayPrice,
          futurePrice: futureBitcoin.futurePrice,
        }));
      };

      const update = await updateState();
      startTransition(() => update);
    } catch (error) {
      console.error({ error });
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));
