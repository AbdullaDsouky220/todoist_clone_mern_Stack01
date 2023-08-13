import propTypes from 'prop-types'
Image.propTypes = {
  children: propTypes.node,
  data: propTypes.string,
}
export default function Image({ data }) {
  return (
    <section
      className="min-h-[100vh] 
    flex xl:flex-row flex-col
    px-32
    gap-32
    max-w-[600px]
     items-center relative "
    >
      <div
        className="h-[500px]
        rounded-lg 
    flex items-center"
      >
        <img
          src={data.img}
          className="h-full
        
         min-w-[400px]   object-cover rounded-xl"
          alt={data.title}
        />
      </div>
      <div
        className="
     
        sm:min-w-[300px]
        md:w-[500px]
        xl:min-w-[600px]
        p-4
        h-[400px]
        bg--400
        relative
       
"
      >
        <div
          className=" flex 
        flex-col
        items-start
        w-full rounded
        gap-4"
        >
          <p className="text-red-500  font-inter text-md font-bold">
            {data.title}
          </p>
          <p className="text-slate-800 min-w-[400px] font-graphic text-4xl   font-bold">
            {data.header}
          </p>
          <p className="text-slate-400 min-w-[400px]  font-inter text-xl   font-semibold leading-8">
            {data.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}
