import {MnaziLogo, InstagramLogo} from '../assets/icons'
export function NextHomePage(){
    return(
    <>
        <div className="bg-goldyellow min-h-screen mx-auto px-6 md:px-12 pb-12">
      <div className="relative h-48 flex items-center align-baseline">
        <MnaziLogo className="text-logo-gold w-20 h-20"/>
        <div className="flex flex-col m-2">
            <h1 className="font-semibold text-2xl text-black">MNAZI </h1>
            <h1 className="font-mono text-xl text-logo-gold">TOURS & SAFARI</h1>
        </div>
        <h1 className="hidden md:absolute md:right-32 md:text-logo-gold">Contact us</h1>
        <h1 className="hidden md:absolute md:right-32 md:text-logo-gold">Contact us</h1>

        <InstagramLogo className="absolute right-2 md:right-12 text-logo-gold"/>
      </div>
      <div className="flex items-center justify-center md:mt-44">
        <div className="flex flex-col items-center space-y-12">
          <h1 className="text-6xl font-bold  lg:w-1/3 text-center">Hearts made to travel the world</h1>
          <h1 className="text-xl text-center md:w-1/3 text-logo-gold ">Aliquam erat volutpat. Vivamus sit amet tempor ex. Donec vitae urna purus. In vitae lorem sed massa consectetur maximus. Curabitur placerat est ipsum, pretium aliquet tellus commodo sed.</h1>
          <div className="h-12 border-2 rounded-lg flex items-center justify-center px-6">
              <h1 className="text-xl text-white ">Check us out</h1>
          </div>
        </div>
      </div>
    </div>



      <div className="md:grid md:grid-cols-2 grid grid-flow-row min-h-screen mx-auto px-6 py-6 md:pl-24 space-y-5" >
        <div className="pt-12 xl:pt-52 space-y-5 ">
          <MnaziLogo className="w-20 h-20 text-gold"/>
          <h1 className="text-6xl font-bold w-72">Get to know us</h1>
          <h1 className="text-2xl md:w-2/3 md:text-justify">Aenean sed lacinia ante, ut egestas dui. Phasellus sagittis mattis turpis at pretium. Cras dapibus nisi lacus, eget efficitur sem porta ac. Aenean luctus eros augue, eu suscipit risus venenatis quis. Duis porttitor elit tellus, eu tincidunt sapien tincidunt sed. Praesent fringilla porta arcu sit amet consequat. </h1>
        </div>
        <div className="md:pt-52 min-h-screen">
          <div className="bg-gray-400 h-3/4 rounded-3xl md:w-4/5 w-full"></div>
        </div>
      </div>
      
      <div className="h-screen">
        <h1 className="p-12 text-7xl font-bold">Explore</h1>
        <div className="h-screen md:grid md:grid-cols-2 grid grid-flow-row py-12">
          <div className=" p-6  h-96 md:h-full min-w-full">
            <div className="bg-yellow-300 rounded-xl shadow-lg h-full"></div>
          </div>
          <div className="bg-red-400 min-w-full space-y-6 xl:space-y-36 px-6">
            <div className="overflow-x-auto pt-6">
              <div className="inline-flex h-72 space-x-4 md:space-x-12">
                {
                  
                  [1,2,3,4,5].map((ix)=>{
                    return(
                      <div key={ix} className="w-96 bg-purple-300 rounded-xl"></div>
                    )
                  })

                }
              </div>
            </div>
            <div className="w-full overflow-x-auto">
              <div className="inline-flex h-96 space-x-4 md:space-x-12">
                {
                  [1,2,3,4,5].map((ix)=>{
                    return(
  
                      <div key={ix} className="w-96  bg-purple-300  rounded-xl"></div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}