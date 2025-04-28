export default function Banner() {
  return (
    <>
      <div className="bg-[#D8EFD3] h-96 w-full flex flex-col gap-4 justify-center items-center text-gray-600">
        <div>
          <h1 className="text-4xl font-bold text-[#55AD9B] text-center">Welcome to the BeginDev Community</h1>
          <p className="text-center mt-1">
            Empowering developers to build, learn, and grow with the MERN stack.
          </p>
        </div>
        <div>
            <button className="bg-[#5aad9d] hover:bg-[#5ca899] px-4 py-2 rounded text-white">Join Our Community</button>
        </div>
      </div>
    </>
  );
}
