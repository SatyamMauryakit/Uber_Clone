import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <>
    <h5
      className="p-1 text-center w-[93%] absolute top-0 "
      onClick={() => {
        props.WaitingForDriver(false);
      }}
    >
      <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
    </h5>
    <div className='flex items-center justify-between'>
      <img className="h-12" src="https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-y-electric-suv-white-car-blank-clean-white-black_655090-605467.jpg" alt="" />
      <div className="text-right">
        <h2 className='text-lg font-medium'>Satyam</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP61 AF 3083</h4>
        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
      </div>
    </div>
   
    <div className="flex gap-2 justify-between items-center flex-col">
    
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
      
    </div>
  </>
  )
}

export default WaitingForDriver
