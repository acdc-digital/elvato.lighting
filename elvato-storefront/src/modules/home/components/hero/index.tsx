// Hero Implimentation Code (Container w/ Image in the Centre)

import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"

const Hero = () => {
  return (
    <div className="mx-auto my-8 max-w-7xl rounded-xl overflow-hidden">
      <div className="h-[55vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('/hero-img.svg')" }}>
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          {/* Your content here */}
        </div>
      </div>
    </div>
  )
}

export default Hero

