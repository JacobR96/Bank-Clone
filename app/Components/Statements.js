import React from "react";
import Image from "next/image";
import transactions from "./MockTranactions";

const Statements = () => {
  const accountBalance = 3250.75;
  const checkTotal = 500.0;
  const checking1 = 1500.25;
  const data = fetch("http://localhost:5263/api/CheckingAccount");

  return (
    <div className="m-auto max-w-screen-md">
      <div className="text-center">
        <h2 className="p-4 text-2xl">Account Statements</h2>

        <div className="flex justify-end">
          <p className="p-4 text-blue-700 underline">Edit Account View</p>
          <p className="p-4 text-blue-700 underline">Print</p>
        </div>

        <div className="flex justify-end mr-12 p-4">
          Total: ${accountBalance}
        </div>

        <hr className="border-gray-200 m-4" />

        <div className="text-black">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="p-2 m-6 text-2xl">Checking</h2>
              <div>
                <p className="p-4 m-2">{"$" + checkTotal}</p>
              </div>
            </div>

            <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2 flex items-center">
              <Image
                src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                alt="banking image"
                width={50}
                height={50}
                className="object-cover rounded-lg"
              />
              <p className="p-2">EveryDay Checking-6932</p>
              <div>
                <p className="p-2">{"$" + checking1}</p>
                <p className="text-gray-400 text-sm">Available Balance</p>
              </div>
            </div>

            <div className="bg-white p-4 m-6 rounded-md border-2 shadow">
              <h3 className="text-lg font-semibold mb-2">
                Transaction History
              </h3>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Date</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{transaction.date}</td>
                      <td className="border px-4 py-2">
                        {transaction.description}
                      </td>
                      <td className="border px-4 py-2">
                        {transaction.amount.toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        {transaction.balance.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statements;
