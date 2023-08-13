import  Button  from "../../../components/Button"

function Download() {
  return (
    <div className="max-w-[1250px] m-auto flex flex-col items-center gap-8 py-32 ">
        <p className="text-5xl text-center
         leading-[3.5rem] font-inter font-bold max-w-[900px]">
        Gain calmness and clarity with the world’s most beloved productivity app

        </p>
        <p className="text-2xl font-semibold">
        337,000+ ★★★★★ reviews on Google Play and App Store


        </p>
        <Button className={'bg-red-400 p-4 rounded'}>
            Get Started Free
        </Button>
        <Button className={'bg-slate-400 p-4 rounded'}>
           Download apps
        </Button>
    </div>
  )
}

export default Download