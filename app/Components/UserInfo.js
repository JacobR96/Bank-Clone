"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const [checking, setChecking] = useState([]);
  const [savings, setSavings] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const [loans, setLoans] = useState([]);
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(() => {
    fetchChecking();
    fetchSavings();
    fetchCertificates();
    fetchCreditCards();
    fetchLoans();
  }, []);

  const fetchChecking = async () => {
    try {
      const response = await fetch("http://localhost:5263/api/CheckingAccount");
      const data = await response.json();
      console.log("Checking Data:", data);
      setChecking(data);
      const checkingTotal = data.reduce(
        (sum, account) => sum + account.balance,
        0
      );
      setAccountBalance((prevBalance) => prevBalance + checkingTotal);
    } catch (error) {
      console.error("Error fetching checking accounts:", error);
    }
  };

  const fetchSavings = async () => {
    try {
      const response = await fetch("http://localhost:5263/api/SavingsAccount");
      const data = await response.json();
      console.log("Savings Data:", data);
      setSavings(data);
      const savingsTotal = data.reduce(
        (sum, account) => sum + account.balance,
        0
      );
      setAccountBalance((prevBalance) => prevBalance + savingsTotal);
    } catch (error) {
      console.error("Error fetching savings accounts:", error);
    }
  };

  const fetchCertificates = async () => {
    try {
      const response = await fetch("http://localhost:5263/api/Certificates");
      const data = await response.json();
      console.log("Certificates Data:", data);
      setCertificates(data);
      const certificatesTotal = data.reduce(
        (sum, account) => sum + account.balance,
        0
      );
      setAccountBalance((prevBalance) => prevBalance + certificatesTotal);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  const fetchCreditCards = async () => {
    try {
      const response = await fetch("http://localhost:5263/api/CreditCards");
      const data = await response.json();
      console.log("Credit Cards Data:", data);
      setCreditCards(data);
      const creditCardsTotal = data.reduce(
        (sum, account) => sum + account.balance,
        0
      );
      setAccountBalance((prevBalance) => prevBalance + creditCardsTotal);
    } catch (error) {
      console.error("Error fetching credit cards:", error);
    }
  };

  const fetchLoans = async () => {
    try {
      const response = await fetch("http://localhost:5263/api/Loans");
      const data = await response.json();
      console.log("Loans Data:", data);
      setLoans(data);
      const loansTotal = data.reduce(
        (sum, account) => sum + account.balance,
        0
      );
      setAccountBalance((prevBalance) => prevBalance + loansTotal);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  return (
    <>
      <div className="m-12 shadow-sm border-2">
        <div className="flex flex-row bg-white text-blue-950 text-md p-2">
          <p className="p-2">Accounts</p>
          <p className="p-2">Move Money</p>
          <p className="p-2">Cards</p>
          <p className="p-2">Statements</p>
          <p className="p-2">My MakingCents</p>
          <p className="p-2">More</p>
        </div>
        <div className="text-center p-6 m-4 bg-blue-400/70">
          <p className="p-2">
            Give Us Feedback About Your Digital Banking Experience
          </p>
        </div>
        <div className="pt-6 pl-4 pr-4 flex justify-between items-center">
          <h1 className="text-2xl p-2 text-center">Accounts</h1>
          <div className="flex">
            <p className="p-4 text-blue-700 underline">Edit Account View</p>
            <p className="p-4 text-blue-700 underline">Print</p>
          </div>
        </div>
        <div className="flex justify-end mr-12 p-4">
          <p>Total {"$" + accountBalance}</p>
        </div>
        <hr className="border-gray-200 m-4" />
        <div className="text-black">
          <AccountSection
            title="Checking"
            total={checking.reduce((sum, acc) => sum + acc.balance, 0)}
            accounts={checking}
          />
          <AccountSection
            title="Savings"
            total={savings.reduce((sum, acc) => sum + acc.balance, 0)}
            accounts={savings}
          />
          <AccountSection
            title="Certificates"
            total={certificates.reduce((sum, acc) => sum + acc.balance, 0)}
            accounts={certificates}
          />
          <AccountSection
            title="Credit Cards"
            total={creditCards.reduce((sum, acc) => sum + acc.balance, 0)}
            accounts={creditCards}
          />
          <AccountSection
            title="Loans"
            total={loans.reduce((sum, acc) => sum + acc.balance, 0)}
            accounts={loans}
          />
        </div>
      </div>
    </>
  );
};

const AccountCard = ({ account, label, imageSrc }) => (
  <div className="bg-gray-100 p-4 m-6 rounded-md border-2 shadow">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={imageSrc}
          alt="banking image"
          width={50}
          height={50}
          className="object-cover rounded-lg"
        />
        <p className="p-2">{label}</p>
      </div>
      <div>
        <p className="p-2">{"$" + account.balance}</p>
        <p className="text-gray-400 text-sm">Available Balance</p>
      </div>
    </div>
  </div>
);

const AccountSection = ({ title, total, accounts }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center">
      <h2 className="p-2 text-lg">{title}</h2>
      <p className="p-4 m-2">{"$" + total}</p>
    </div>
    {accounts.map((account, index) => (
      <Link href="../../UserAccount/AccountInfo" key={index}>
        <AccountCard
          account={account}
          label={`${title} Account-${index + 1}`}
          imageSrc="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
        />
      </Link>
    ))}
  </div>
);

export default UserInfo;
