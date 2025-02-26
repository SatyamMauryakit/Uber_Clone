const LocationSearchPanel = (props) => {
  const location = [
    `Kashi Institute of technology, mirzamurad,Varanasi,utter pardesh,
            India`,
            `RPK Institute of technology, parsadpur,Ghazipur,utter pardesh,
            India`,
            `Ashoka Institute of technology, pandaypur,Varanasi,utte pardesh,`
  ]
  return (
    <>
      <div>
        {/* this is just a sample data */}
        {location.map((loc, index) => (
  <div 
    key={index} onClick={()=>{
      props.setVehiclePanel(true)
      props.setPanelOpen(false)
    }}
    className="flex gap-4 items-center border-gray-50 active:border-black rounded-xl justify-start p-2 border-2"
  >
    <h2 className="bg-[#eee] p-2 rounded-full h-7 w-7 flex items-center justify-center">
      <i className="ri-map-pin-fill"></i>
    </h2>
    <h4 className="font-medium">
      {loc}
    </h4>
  </div>
))}

      </div>
    </>
  );
};

export default LocationSearchPanel;
