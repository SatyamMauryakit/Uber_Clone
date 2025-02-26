import React from 'react'

const VihiclePanel = (props) => {
  return (
    <>
     <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{
          props.setVehiclePanelOpen(false);
        }}>
          <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConformRidePanel(true)
        }} className="flex w-full border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between bg-600">
          <img
            className="h-20"
            src="https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-y-electric-suv-white-car-blank-clean-white-black_655090-605467.jpg"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-bold text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹196</h2>
        </div>

        <div  onClick={()=>{
            props.setConformRidePanel(true)}} className="flex w-full border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between bg-600">
          <img
            className="h-16"
            src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fcolors%2Fultraviolette%2Ff77-mach-2%2Fultraviolette-f77-mach-2-stellar-white.jpg%3Fv%3D1722837472&w=640&q=75"
            alt=""
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-bold text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, Motocycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹65.87</h2>
        </div>

        <div onClick={()=>{
            props.setConformRidePanel(true)}} className="flex w-full border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between bg-600">
          <img
            className="h-16"
            src="https://5.imimg.com/data5/XH/MC/ZX/SELLER-85447820/atul-gem-disel-bsiv-passenger-500x500.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-bold text-base">
              UberAuto{" "}
              <span>
                <i className="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">5 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, Auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹118.39</h2>
        </div>
    </>
  )
}

export default VihiclePanel
