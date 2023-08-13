import { partnersList } from "../../../constants"

function Offers() {
  return (
    <div 
    className="max-w-[1250px]  m-auto">

      <p className="text-3xl font-bold text-center py-18">
      Explore all Todoist has to offer

      </p>
      <div className="flex my-8  gap-8 flex-wrap xl:flex-nowrap items-center justify-center"> 
      {
        partnersList.map((item)=>(
          <div key={item} className="flex flex-col items-center p-4 font-inter font-semibold shadow hover:shadow-xl cursor-pointer transition gap-16 border  rounded w-[300px]">
            <img src={item.path} className="='h-10 w-10"/>
            <p>
              {item.name}
            </p>
          </div>
        ))
      }
            </div>
    </div>
  )
}

export default Offers