"use client"

import { useState } from "react"
import Portfolio from "../portfolio"
import PortfolioV2 from "../portfolio-v2"
import { Button } from "@/components/ui/button"

export default function SyntheticV0PageForDeployment() {
  const [showVersion, setShowVersion] = useState("v2")
  
  return (
    <div>
      <div className="fixed top-4 right-4 z-[100] flex gap-2">
        <Button 
          variant={showVersion === "v1" ? "default" : "outline"} 
          onClick={() => setShowVersion("v1")}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Version 1
        </Button>
        <Button 
          variant={showVersion === "v2" ? "default" : "outline"} 
          onClick={() => setShowVersion("v2")}
          className="bg-teal-600 hover:bg-teal-700 text-white"
        >
          Version 2
        </Button>
      </div>
      
      {showVersion === "v1" ? <Portfolio /> : <PortfolioV2 />}
    </div>
  )
}