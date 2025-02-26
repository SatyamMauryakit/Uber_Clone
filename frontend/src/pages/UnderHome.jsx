import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VihiclePanel from "../components/VihiclePanel"
import ConfiromedRide from "../components/ConfiromedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const UnderHome = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const conformRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [conformRidePanel, setConformRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
const [watingForDriver, setWatingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);


  useGSAP(() => {
    if (conformRidePanel) {
      gsap.to(conformRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(conformRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [conformRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);


  useGSAP(() => {
    if (watingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [watingForDriver]);
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* image for temporary */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" h-screen flex flex-col top-0 justify-end absolute w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-6 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>{" "}
          <h4 className="text-2xl font-bold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className=" absolute h-16 w-1 top-[45%] left-10 bg-gray-800 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              type="text"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div className=" bg-white " ref={panelRef}>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
       <VihiclePanel setVehiclePanelOpen={setVehiclePanelOpen}
       setConformRidePanel={setConformRidePanel}
       
       />
      </div>
      <div
      ref={conformRidePanelRef}
      className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
       <ConfiromedRide setVehicleFound={setVehicleFound}
       setConformRidePanel={setConformRidePanel}
       
       />
      </div>
      <div
      ref={vehicleFoundRef}
      className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
      <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div
      ref={waitingForDriverRef}
      className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
      <WaitingForDriver watingForDriver={watingForDriver} />
      </div>
    </div>
  );
};

export default UnderHome;
