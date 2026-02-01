export default function Hero() {
  return (
    // <section className="flex flex-col items-center text-center px-6 py-32">
    <section className="flex flex-col items-center text-center mt-30">

        {/* h2 is block level element*/}
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
        Build Faster with React
      </h2>
      {/* p is block level element*/ }
      <p className="text-gray-600  mb-8">
        Learn React and Tailwind by building real-world projects step by step.
      </p>
 
  {/* button is inline-block level element*/}
      <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
        Get Started
      </button>
     
    </section>
  );
}
