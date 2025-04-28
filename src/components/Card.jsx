export default function Card({ data }) {
  return (
    <>
        <div className="card-body h-76 bg-secondary-content rounded border-1 border-secondary text-gray-600"> 
          <h1 className="cart-title font-semibold text-xl">{data.title}</h1>
          <p>{data.description}</p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="font-semibold w-full">Technologies:</span>
            {data.technologies.map((technology, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-sm rounded-full text-gray-700 shadow-sm "
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="text-right mt-4">
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <button className="btn  text-white px-4 py-2 rounded bg-primary">
                Visit
              </button>
            </a>
          </div>
        </div>
    </>
  );
}
