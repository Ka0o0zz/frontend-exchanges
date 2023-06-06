import {
  Card,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";
import { useStore } from "../../store/useStore";

type SalesPerson = {
  name: string;
  binancePrice: number;
  cryptoPrice: number;
  percentageDifference: number;
};

export default function TableView() {
  const { listExchangesCompare, loading } = useStore();
  return (
    <Card>
      {loading && (
        <Flex alignItems="center">
          <Text>Loading...</Text>
        </Flex>
      )}
      {!loading && (
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Precio en Binance
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                Precio en Crypto.com
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                Diferencia
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listExchangesCompare.map((item: SalesPerson) => (
              <TableRow key={item?.name}>
                <TableCell>{item?.name}</TableCell>
                <TableCell className="text-right">
                  ${item?.binancePrice}
                </TableCell>
                <TableCell className="text-right">
                  ${item?.cryptoPrice}
                </TableCell>
                <TableCell className="text-right">
                  {item?.percentageDifference.toFixed(4)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Card>
  );
}
