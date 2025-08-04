import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TransactionTable = ({ transactions }) => {
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription className="text-gray-400">A list of your recent investments.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-transparent">
              <TableHead className="text-white">Type</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white hidden sm:table-cell">Value (CHF)</TableHead>
              <TableHead className="text-right text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="border-gray-800 hover:bg-gray-500/10">
                <TableCell className="font-medium">{tx.type}</TableCell>
                <TableCell className="text-green-400">{tx.amount}</TableCell>
                <TableCell className="hidden sm:table-cell">{tx.valueCHF}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className="text-green-400 border-green-500/50">{tx.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default TransactionTable;