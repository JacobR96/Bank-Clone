"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Main = () => {
  const router = useRouter();

  const FormSubmit = (event) => {
    event.preventDefault();
    window.alert(" Now Redirecting to Users Account");
    router.push("/UserAccount");
  };
  return (
    <>
      <section className="pt-12 pb-24 bg-blue-200 bg-cover flex justify-center items-center">
        <div className="container">
          <h1 className="p-6 text-3xl text-left text-blue-950 font-bold">
            Welcome to Digital Banking
          </h1>

          <div className="flex flex-row">
            <div className="bg-yellow-50/65 p-6">
              <p className="p-4 text-xl text-gray-500">Sign In</p>
              <hr className="border-2 bg-gray-500" />

              <form className="flex flex-auto" onSubmit={FormSubmit}>
                <div className="p-2">
                  <div>
                    <p className="p-4 text-gray-500">User Name</p>
                  </div>
                  <div>
                    <input
                      className="p-4 rounded-md border-2 border-gray-300"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="p-2">
                  <div>
                    <p className="p-4 text-gray-500">Password</p>
                  </div>
                  <div>
                    <input
                      className="p-4 rounded-md border-2 border-gray-300"
                      type="password"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex flex-row-reverse">
                  <button className="bg-orange-500 p-6 m-4" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-blue-950 text-lg">
        <div className="container mx-auto flex flex-row p-6">
          <div className="flex flex-col pt-12 w-1/2">
            <h3 className="text-2xl p-2">Not a Banking Member?</h3>
            <p className="text-2xl whitespace-pre-wrap p-4 mb-10">
              Join now and enjoy the support and great service of a credit union
              that puts your needs first.
            </p>
            <div className="flex space-x-2">
              <button className="rounded-md py-4 px-4 bg-orange-500 text-white">
                Become a Member
              </button>
              <button className="rounded-md py-4 px-4 bg-blue-700 text-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="banking image"
              width={1200}
              height={1200}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="container mx-auto p-12">
          <div className="flex flex-row text-center space-x-4">
            <div className="p-4 m-2 bg-white text-black rounded-lg w-1/3">
              <h4 className="p-12">Don't have online access?</h4>
              <p>Enroll in digital banking</p>
            </div>
            <div className="p-4 m-2 bg-white text-black rounded-lg w-1/3">
              <h4 className="p-12">
                Find out more about secure digital banking
              </h4>
              <p>Learn more</p>
            </div>
            <div className="p-4 m-2 bg-white text-black rounded-lg w-1/3">
              <h4 className="p-12">Need help?</h4>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
