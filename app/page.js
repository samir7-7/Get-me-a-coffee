import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center w-[60vw] h-[40vh] gap-5 text-white">
        <div className="text-5xl font-sans font-bold flex gap-2 items-center">Buy me a coffee <span><img src="/coffee.gif" width={55} alt="" /></span></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quasi voluptates iure eos est sed </p>
        <div>
          {/* <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 hover:scale-[0.95] transition-[0.4s]">Start Now</button> */}
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

          <button type="button" class="text-white border-[1px] border-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:border-slate-950">Read More</button>
        </div>
      </div>

      {/* line */}
      <div className="bg-white opacity-10 h-1 w-full">
      </div>

      <div className="text-white container mx-auto">
        <h1 className="text-center text-2xl my-12 font-bold">People can buy you a coffee</h1>
        <div className="flex justify-around w-full mb-8">
          <div className="item flex flex-col items-center gap-2">
            <img className="bg-slate-100 p-3 rounded-full" src="/person-working.png" width={90} alt="" />
            <p className="font-bold">Fund your projects</p>
          </div>
          <div className="item flex flex-col items-center gap-2">
            <img className="bg-slate-100 p-3 rounded-full" src="/coins.gif" width={90} alt="" />
            <p className="font-bold">Fund your projects</p>
          </div>
          <div className="item flex flex-col items-center gap-2">
            <img className="bg-slate-100 p-3 rounded-full" src="/community.gif" width={90} alt="" />
            <p className="font-bold">Fund your projects</p>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="bg-white opacity-10 h-1 w-full">
      </div>

      <div className="text-white container mx-auto mb-7">
        <h1 className="text-center text-2xl my-12 font-bold">Learn more about us</h1>
        <div className="flex justify-around w-full">
          <div className="item flex flex-col items-center gap-2">
            <img className="bg-slate-100 p-3 rounded-full" src="/person-working.png" width={90} alt="" />
            <p className="font-bold">Fund your projects</p>
          </div>
          <div className="item flex flex-col items-center gap-2">
            <img className="bg-slate-100 p-3 rounded-full" src="/coins.gif" width={90} alt="" />
            <p className="font-bold">Fund your projects</p>
          </div>
          <div className="item flex flex-col items-center gap-2">
            <img className="bg-slate-100 p-3 rounded-full" src="/community.gif" width={90} alt="" />
            <p className="font-bold">Fund your projects</p>
          </div>
        </div>
      </div>
    </>

  );
}
