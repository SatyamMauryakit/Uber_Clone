import React from "react";

const ConfiromedRide = (props) => {
  return (
    <>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between items-center flex-col">
        <img
          className="h-28"
          src="https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-y-electric-suv-white-car-blank-clean-white-black_655090-605467.jpg"
          alt=""
        />
        <div className=" w-full mt-5">
          <div className="text-lg flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 -mt-1text-sm">
                Mirzamurad , Varanasi
              </p>
            </div>
          </div>
          <div className="text-lg flex items-center gap-5 p-3 border-b-2">
          <i className="ri-user-location-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 -mt-1text-sm">
                Mirzamurad , Varanasi
              </p>
            </div>
          </div>
          <div className="text-lg flex items-center gap-5">
          <i className="ri-currency-fill"></i>
            <div >
              <h3 className="text-lg font-medium">₹193.72</h3>
              <p className="text-gray-600 -mt-1text-sm">
                Payment Cash
              </p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConformRidePanel(false)
        }} className=" w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-sm">
          Confirm
        </button>
      </div>
    </>
  );
};

export default ConfiromedRide;
