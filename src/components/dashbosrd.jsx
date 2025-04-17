import { SquarePlus } from 'lucide-react';
import { Ban } from 'lucide-react';

function Dashboard(){
    return (
      <div className="flex flex-wrap lg:flex-nowrap gap-4 p-4">
        <section className='w-[70%] flex flex-col gap-y-4'>
          <div className='p-5 border border-[#EDEFF1] rounded-2xl'>
            <p className="text-lg font-medium pb-4">Table Metrics</p>

            <div className="flex justify-between gap-4.5">
              <div className='border border-[#F2F2F2] p-3 w-40'>
                <p className='text-sm text-[#92959E] pb-0'>Total Tables</p>
                <h1 className='text-2xl font-medium'>0</h1>
              </div>

              <div className='border border-[#F2F2F2] p-3 w-40'>
                <p className='text-sm text-[#92959E]'>Total Floor</p>
                <h1 className='text-2xl font-medium'>0</h1>
              </div>

              <div className='border border-[#F2F2F2] p-3 w-40'>
                <p className='text-sm text-[#92959E]'>Total Zone</p>
                <h1 className='text-2xl font-medium'>0</h1>
              </div>

              <div className='border border-[#F2F2F2] p-3 w-40'>
                <p className='text-sm text-[#92959E]'>Active Tables</p>
                <h1 className='text-2xl font-medium'>0</h1>
              </div>

              <div className='border border-[#F2F2F2] p-3 w-40'>
                <p className='text-sm text-[#92959E]'>in Active Tables</p>
                <h1 className='text-2xl font-medium'>0</h1>
              </div>
            </div>
          </div>

          <div className='h-full p-5 border border-[#EDEFF1] rounded-2xl flex items-center justify-center flex-col gap-y-4 text-center'>
            <Ban size={88} color='#58595B'/>
            <h1 className='text-xl font-medium text-[#1C2434]'>No Tables Yet</h1>
            <p className='text-md text-[#64748B] font-[400]'>Create one to start managing your <br /> data efficiently.</p>
          </div>
        </section>

        <section className="p-5 w-[30%] border border-[#EDEFF1] rounded-2xl">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-center gap-x-5 pb-4 border-b-1 border-[#EDEFF1]">
              <header>
                <h1 className="text-lg text-[#2E2A40] font-bold pb-0.5">
                  Table Preview
                </h1>
                <p className="text-sm text-[#84818A]">
                  Overview of the Table Layout
                </p>
              </header>

              <button className="flex items-center gap-x-2 font-medium bg-[#C52031] text-white p-2 rounded-lg">
                Create Table
                <SquarePlus strokeWidth={1.25} />
              </button>
            </div>

            <div className="p-3 flex flex-col gap-y-3">
              <div className="flex flex-col gap-3">
                <lable className="text-base font-medium">Floor</lable>
                <input
                  type="text"
                  placeholder="Floor"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <lable className="text-base font-medium">Zone</lable>
                <input
                  type="text"
                  placeholder="Zone"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <lable className="text-base font-medium">
                  Seating Capacity
                </lable>
                <input
                  type="text"
                  placeholder="Seating Capacity"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <lable className="text-base font-medium">Total Number</lable>
                <input
                  type="text"
                  placeholder="Total Number"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <lable className="text-base font-medium">Table Status</lable>
                <input
                  type="text"
                  placeholder="Table Status"
                  className="border border-[#F2F2F2] focus:outline-0 px-5 py-3.5 rounded-sm"
                />
              </div>

              <div className='flex justify-between gap-x-4'>
                <div className="flex flex-col gap-3 w-[40%]">
                  <lable className="text-base font-medium">Table Layout</lable>
                  <div className='border border-[#F2F2F2] rounded-sm p-5 text-sm text-[#64748B99]'>
                    <p className='text-center'>No <br /> Data to Show</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-[60%]">
                  <lable className="text-base font-medium">Table Layout</lable>
                  <div className='border border-[#F2F2F2] rounded-sm p-5 text-sm text-[#64748B99]'>
                    <p className='text-center'>No <br /> Data to Show</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
}

export default Dashboard;

