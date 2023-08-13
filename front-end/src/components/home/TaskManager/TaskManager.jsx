import LeftPart from './LeftPart'
import RightPart from './RightPart'
const TaskManager = () => {
  return (
    <div
    className="max-w-[1250px] items-center flex flex-col xl:flex-row  m-auto">
        <LeftPart/>
        <RightPart/>
    </div>
  )
}

export default TaskManager
