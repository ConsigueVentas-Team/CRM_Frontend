/*import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[80%] object-center left-20" />
}
*/

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const getColor = (progress: number): string => {
    if (progress >= 75) {
      return "bg-green-500"
    } else if (progress >= 50) {
      return "bg-yellow-500"
    } else if (progress >= 25) {
      return "bg-orange-500"
    } else {
      return "bg-red-500"
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <Progress value={progress} className={`w-80 ${getColor(progress)}`} />
        <span className="ml-2">{`${progress}%`}</span>
      </div>
    </div>
  )
}

