import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { Btn1Active } from "../component/button";

export function DetailPerson() {
  const { id } = useParams();
  const [dataPerson, setDataPerson] = useState([]);

  useEffect(() => {
    setDataPerson(JSON.parse(localStorage.getItem("data-person")) || []);
  }, []);

  return (
    <div>
      <section class="pt-16 bg-blueGray-50">
        <div class="w-full lg:w-4/12 px-4 mx-auto">
          <Btn1Active path="/" title="Main Page" />
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
              <div class="text-center mt-12">
                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {dataPerson[id]?.name}
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {dataPerson[id]?.email}
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {dataPerson[id]?.keahlian}
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  {dataPerson[id]?.pendidikan}
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  {dataPerson[id]?.pekerjaan}
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {dataPerson[id]?.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="relative  pt-8 pb-6 mt-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Author{" "}
                  <a
                    href="https://www.linkedin.com/in/alfian-prisma-yopiangga"
                    class="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Alfian Prisma Yopiangga
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
