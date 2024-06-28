import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center flex-col h-[34vh] text-white text-sm gap-4">
      <div className="text-white text-5xl px-5 py-5"> Buy Me a Tea <span className="text-sm"> <img src="/tea.jpg "width={55} height={55} alt="tea img" /></span></div>
        <p>A Crowdfunding platform for Creators. Get Funded by yours fan and followers. Start Now</p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
      <div className="bg-white h-1 opacity-10"></div>
    <div>
    </div>
    </>
  );
}
