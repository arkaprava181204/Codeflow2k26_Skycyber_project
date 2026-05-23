import React from 'react'
import home_image from "../assets/home_img.png"
export default function Home (){
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          //src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          src={home_image}
                          alt="image"
                      />
                  </div>
                  <div className="md:w-7/12 lg:w-6/12 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.37)] p-8 hover:scale-105 hover:shadow-orange-400/40 transition-all duration-500">
                      <h2 className="text-5xl font-extrabold tracking-wide text-[#082B6F]">
                        I-COCKROACH
                        </h2>
                      <p className="mt-6 text-xl text-orange-500">
                          This platform is not a standard freelance site; it is a system
                            engineered for hyperlocal business execution.
                      </p>
                      {/* <p className="mt-4 text-gray-600">
                            The
                            platform aims to:
                            ● Reduce agency dependency and lower execution costs for micro-businesses.
                            ● Create structured earning opportunities and an accessible, local digital workforce.
                            ● Drive SME growth while establishing a trust-verified execution network.
                        </p> */}
                        <div className="mt-4 text-gray-600">
                        <p className="font-medium mb-2">The platform aims to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Reduce agency dependency and lower execution costs for micro-businesses.</li>
                            <li>Create structured earning opportunities and an accessible, local digital workforce.</li>
                            <li>Drive SME growth while establishing a trust-verified execution network.</li>
                        </ul>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  );
}