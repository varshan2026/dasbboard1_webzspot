import { SquarePlus } from 'lucide-react';
import { Ban } from 'lucide-react';
import { useState, useEffect } from 'react';

function Dashboard(){
  const[formData, setformData] = useState({
    floor:'',
    zone:'',
    seatingCapacity:'',
    tableNumber:'',
    tableStatus:''
  });

  const[form, setForm] = useState(false)

  const[saveData, setsaveData] = useState('');

  const handleChange = (e) => {
    const{name, value} = e.target
    setformData((prev) => ({
      ...prev, [name]:value
    }))
  }

  
  const generateTableNumber = () => {

    const floorCodeSet = {
      'Ground Floor': 'G',
      '1st Floor':'F1',
      '2nd Floor':'F2',
      'Top':'T'
    };

    const zoneCodeSet = {
      'AC':'AC',
      'Non-AC':'N/AC'
    }

    const floorCode = floorCodeSet[formData.floor] || '';
    const zoneCode  = zoneCodeSet[formData.zone] || '';
    let TableNumber  = 1;

    if(floorCode && zoneCode){
      return `${floorCode}-${zoneCode}-${TableNumber}`;
    }else{
      return `Table Number`
    }
    
  }

  useEffect(() => {
    const autoNumber = generateTableNumber(
      formData.floor,
      formData.zone,
    );
    
    setformData((prev) => ({
      ...prev,
      tableNumber: autoNumber,
    }));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.floor, formData.zone,]);

  
  const dataShow = () => {

    setsaveData((prev) => [...prev, {
      floor: formData.floor,
      zone: formData.zone,
      seatingCapacity: formData.seatingCapacity,
      tableNumber: formData.tableNumber,
      tableStatus: formData.tableStatus
    }]);    

    console.log(saveData)

    setformData(
      {
        floor:'',
        zone:'',
        seatingCapacity:'',
        tableNumber:'',
        tableStatus:''
      }
    )
  }

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-4 p-4">
      <section className="w-[70%] flex flex-col gap-y-4">
        <div className="p-5 border border-[#EDEFF1] rounded-2xl">
          <p className="text-lg font-medium pb-4">Table Metrics</p>

          <div className="flex justify-between gap-4.5">
            <div className="border border-[#F2F2F2] p-3 w-40">
              <p className="text-sm text-[#92959E] pb-0">Total Tables</p>
              <h1 className="text-2xl font-medium">0</h1>
            </div>

            <div className="border border-[#F2F2F2] p-3 w-40">
              <p className="text-sm text-[#92959E]">Total Floor</p>
              <h1 className="text-2xl font-medium">0</h1>
            </div>

            <div className="border border-[#F2F2F2] p-3 w-40">
              <p className="text-sm text-[#92959E]">Total Zone</p>
              <h1 className="text-2xl font-medium">0</h1>
            </div>

            <div className="border border-[#F2F2F2] p-3 w-40">
              <p className="text-sm text-[#92959E]">Active Tables</p>
              <h1 className="text-2xl font-medium">0</h1>
            </div>

            <div className="border border-[#F2F2F2] p-3 w-40">
              <p className="text-sm text-[#92959E]">in Active Tables</p>
              <h1 className="text-2xl font-medium">0</h1>
            </div>
          </div>
        </div>

        {saveData == "" ? (
          <div className="h-full p-5 border border-[#EDEFF1] rounded-2xl flex items-center justify-center flex-col gap-y-4 text-center">
            <Ban size={88} color="#58595B" />
            <h1 className="text-xl font-medium text-[#1C2434]">
              No Tables Yet
            </h1>
            <p className="text-md text-[#64748B] font-[400]">
              Create one to start managing your <br /> data efficiently.
            </p>
          </div>
        ) : (
          <div className='h-[80vh] overflow-y-scroll'>
            <div className='p-5 flex flex-wrap gap-15'>
            {saveData.map((item, index) => (
              <div className='border border-gray-300 p-8 rounded-xl'>
                <div
                  key={index}
                  className="relative w-20 h-20 bg-[#60A06C] rounded-xl flex items-center justify-center text-white text-lg font-semibold"
                >
                  <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-10 h-2.5 bg-[#60A06C] rounded-full"></div>
                  <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-10 h-2.5 bg-[#60A06C] rounded-full"></div>
                  <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2.5 h-10 bg-[#60A06C] rounded-full"></div>
                  <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-2.5 h-10 bg-[#60A06C] rounded-full"></div>
                  <p className="text-sm">{item.tableNumber}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          
        )}
      </section>

      <section className="p-5 w-[30%] border border-[#EDEFF1] rounded-2xl">
        <header className="pb-4 border-b-1 border-[#EDEFF1]">
          {form ? (
            <div>
              <h1 className="text-lg text-[#2E2A40] font-bold pb-0.5">
                Create New Table
              </h1>
              <p className="text-sm text-[#84818A] mt-1">
                Fill the following to create table
              </p>
            </div>
          ) : (
            <div className="flex justify-between gap-x-5 pb-4 border-b-1 border-[#EDEFF1]">
              <header>
                <h1 className="text-lg text-[#2E2A40] font-bold">
                  Table Preview
                </h1>
                <p className="text-sm text-[#84818A]">
                  Overview of the Table Layout
                </p>
              </header>

              <button
                className="flex items-center gap-x-2 font-medium bg-[#C52031] text-white px-2 rounded-lg"
                onClick={() => setForm(true)}
              >
                Create Table
                <SquarePlus strokeWidth={1.25} />
              </button>
            </div>
          )}
        </header>

        {form ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="px-3 mt-3 flex flex-col gap-y-3">
              <div className="flex flex-col gap-3">
                <label className="text-base font-medium">Floor</label>
                <select
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  className="w-full p-2 rounded-sm border border-[#F2F2F2] focus:outline-0 text-base"
                >
                  <option value="">Floor</option>
                  <option value="Ground Floor">Ground Floor</option>
                  <option value="1st Floor">1st Floor</option>
                  <option value="2nd Floor">2nd Floor</option>
                  <option value="Top">Top Floor</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-base font-medium">Zone</label>
                <select
                  name="zone"
                  value={formData.zone}
                  onChange={handleChange}
                  className="w-full border border-[#F2F2F2] focus:outline-0 p-2 rounded-sm text-base"
                >
                  <option value="">Zone</option>
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-base font-medium">
                  Seating Capacity
                </label>
                <input
                  type="text"
                  name="seatingCapacity"
                  value={formData.seatingCapacity}
                  onChange={handleChange}
                  placeholder="Seating Capacity"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-base font-medium">Table Number</label>
                <input
                  disabled
                  type="text"
                  name="tableNumber"
                  value={formData.tableNumber}
                  onChange={handleChange}
                  placeholder="Table Number"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-base font-medium">Table Status</label>
                <select
                  name="tableStatus"
                  value={formData.tableStatus}
                  onChange={handleChange}
                  className="border border-[#F2F2F2] text-base focus:outline-0 px-5 py-3.5 rounded-sm"
                >
                  <option value="">Status</option>
                  <option value="Active">Active</option>
                  <option value="In-Active">In-Active</option>
                </select>
              </div>

              <div className="flex items-center justify-between mt-2">
                <label className="text-base font-medium">Table Layout</label>
                <div className="rounded-sm text-sm text-[#64748B99] flex justify-center items-center w-25 h-25">
                  {formData.tableStatus === "" ? (
                    <div className="border border-[#F2F2F2] rounded-xl w-25 h-25 p-2 flex justify-center items-center">
                      <p className="text-center text-[12px]">
                        No <br /> Data to Show
                      </p>
                    </div>
                  ) : (
                    <div className="relative w-20 h-20 bg-[#60A06C] rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                      <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-10 h-2.5 bg-[#60A06C] rounded-full"></div>
                      <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-10 h-2.5 bg-[#60A06C] rounded-full"></div>
                      <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2.5 h-10 bg-[#60A06C] rounded-full"></div>
                      <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-2.5 h-10 bg-[#60A06C] rounded-full"></div>
                      <p className="text-sm">{formData.tableNumber}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-x-2.5 mt-2">
                <button
                  className="p-2.5 text-white bg-[#C52031] font-medium text-base w-[95%] rounded-sm"
                  onClick={dataShow}
                >
                  Create
                </button>
                <button
                  className="p-2.5 text-[#C52031] border border-[#C52031] font-medium text-base w-[95%] rounded-sm"
                  onClick={() => setForm(false)}
                >
                  Discard
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="p-3 flex flex-col gap-y-3">
            <div className="flex flex-col gap-3">
              <label className="text-base font-medium">Floor</label>
              <input
                disabled
                type="text"
                placeholder="Floor"
                className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base font-medium">Zone</label>
              <input
                disabled
                type="text"
                placeholder="Zone"
                className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base font-medium">Seating Capacity</label>
              <input
                disabled
                type="text"
                placeholder="Seating Capacity"
                className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base font-medium">Table Number</label>
              <input
                disabled
                type="text"
                placeholder="Total Number"
                className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base font-medium">Table Status</label>
              <input
                disabled
                type="text"
                placeholder="Table Status"
                className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm text-base"
              />
            </div>

            <div className="flex justify-between gap-x-4">
              <div className="flex flex-col gap-3 w-[40%]">
                <label className="text-base font-medium">Table Layout</label>
                <div className="border border-[#F2F2F2] rounded-sm p-5 text-sm text-[#64748B99]">
                  <p className="text-center">
                    No <br /> Data to Show
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-[60%]">
                <label className="text-base font-medium">Table QR</label>
                <div className="border border-[#F2F2F2] rounded-sm p-5 text-sm text-[#64748B99]">
                  <p className="text-center">
                    No <br /> Data to Show
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;

