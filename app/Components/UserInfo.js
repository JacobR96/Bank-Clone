import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const checking1 = 5274;
  const checking2 = 8136;
  const checkTotal = checking1 + checking2;

  const savings1 = 1452;
  const savings2 = 6798;
  const savingTotal = savings1 + savings2;

  const certificates1 = 3947;
  const certificates2 = 5623;
  const certificatesTotal = certificates1 + certificates2;

  const creditCards1 = 2811;
  const creditCards2 = 7194;
  const creditCardsTotal = creditCards1 + creditCards2;

  const loans1 = -3489;
  const loans2 = -5732;
  const loansTotal = loans1 + loans2;

  const accountBalance =
    checkTotal +
    savingTotal +
    certificatesTotal +
    creditCardsTotal +
    loansTotal;

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
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="p-2 text-lg">Checking</h2>
              <p className="p-4 m-2">{"$" + checkTotal}</p>
            </div>
            {[checking1, checking2].map((amount, index) => (
              <Link href={"../../UserAccount/AccountInfo"}>
                <AccountCard
                  key={index}
                  amount={amount}
                  label={`EveryDay Checking-${index + 1}`}
                  imageSrc="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                />{" "}
              </Link>
            ))}
          </div>
          <AccountSection
            title="Savings"
            total={savingTotal}
            amounts={[savings1, savings2]}
          />
          <AccountSection
            title="Certificates"
            total={certificatesTotal}
            amounts={[certificates1, certificates2]}
          />
          <AccountSection
            title="Credit Cards"
            total={creditCardsTotal}
            amounts={[creditCards1, creditCards2]}
          />
          <AccountSection
            title="Loans"
            total={loansTotal}
            amounts={[loans1, loans2]}
          />
        </div>
      </div>
    </>
  );
};

const AccountCard = ({ amount, label, imageSrc }) => (
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
        <p className="p-2">{"$" + amount}</p>
        <p className="text-gray-400 text-sm">Available Balance</p>
      </div>
    </div>
  </div>
);

const AccountSection = ({ title, total, amounts }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center">
      <h2 className="p-2 text-lg">{title}</h2>
      <p className="p-4 m-2">{"$" + total}</p>
    </div>
    {amounts.map((amount, index) => (
      <Link href="../../UserAccount/AccountInfo">
        <AccountCard
          key={index}
          amount={amount}
          label={`${title} Account-${index + 1}`}
          imageSrc="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
        />
      </Link>
    ))}
  </div>
);

export default UserInfo;
