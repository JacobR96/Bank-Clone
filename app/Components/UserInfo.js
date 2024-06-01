import React from "react";
import Image from "next/image";
const UserInfo = () => {
  const checking = [];

  return (
    <>
      <div className="flex flow-row bg-white text-blue-950 text-md p-2">
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

      <div className="pt-6 pl-4 pr-4 flex flex-auto">
        <h1 className="text-2xl p-2 text-center">Accounts</h1>
        <p className="p-4 text-blue-700 underline">Edit Account View</p>
        <p className="p-4 text-blue-700 underline">Print</p>
      </div>
      <hr className="border-gray-200 m-4" />
      <div className="text-black">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="p-2 text-lg">Checking</h2>
            </div>
            <div>
              <p className="p-4 m-2">$12.45</p>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="p-2 text-lg"> Savings</h2>
            <div className="flex flex-row-reverse">
              <p>$12.45</p>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="p-2 text-lg"> Certificates</h2>
            <div className="flex flex-row-reverse">
              <p>$12.45</p>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="p-2 text-lg"> Credit Cards</h2>
            <div className="flex flex-row-reverse">
              <p>$12.45</p>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="p-2 text-lg"> Loans</h2>
            <div className="flex flex-row-reverse">
              <p>$12.45</p>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray p-4 m-6 rounded-md border-2 shadow-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="https://jacob-portfolio.s3.amazonaws.com/credit-card.png"
                  alt="banking image"
                  width={50}
                  height={50}
                  className="object-cover rounded-lg"
                />
                <p className="p-2">EveryDay Checking-6932</p>
              </div>
              <div>
                <p className=" p-2">$900.15</p>
                <p className="text-gray-400 text-sm   ">Available Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
