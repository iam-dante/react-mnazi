import {MnaziLogo, InstagramLogo, RightArrow, ScrollLeft,ScrollRight, WhatAppIcon, EmailIcon, YoutubeIcon, FacebookIcon, } from "../assets/icons"


interface Props{
    className: string;
}

export function FirstScreen(){
    return(
        <>
            <div className="bg-gray-700 min-h-screen mx-auto px-6 lg:pl-24 ">
                <div className="relative h-48 flex items-center  ">
                <MnaziLogo className="text-gold w-20 h-20"/>
                <div className="flex flex-col m-2">
                    <h1 className="font-semibold text-2xl text-white">MNAZI </h1>
                    <h1 className="font-mono text-xl text-gold">TOURS & SAFARI</h1>
                </div>
                <InstagramLogo className="absolute right-2 md:right-12 top-16 text-white"/>
                </div>
                <div className="mt-24 md:mt-12 xl:mt-52 md:space-y-10 space-y-4 py-8">
                <h1 className="font-bold  text-6xl lg:text-7xl text-white md:w-2/5">Hearts made to travel the world</h1>
                <h1 className="text-2xl md:text-2xl text-gold md:w-3/5 lg:w-2/5">Aliquam erat volutpat. Vivamus sit amet tempor ex. Donec vitae urna purus. In vitae lorem sed massa consectetur maximus. Curabitur placerat est ipsum, pretium aliquet tellus commodo sed.</h1>
                <div className=" relative h-16 w-52 pl-4  border-2 rounded-lg flex items-center">
                    <h1 className="text-2xl text-white">Contact us</h1>
                    <RightArrow className="absolute right-3 top-5 w-7 h-7 text-white"/>
                </div>
                </div>
            </div>
        </>
    )
}

export function GetToKnowScreen(props:Props){
    return(
        <>
            <div className= {`relative h-flex   via-white mx-auto px-6 lg:pl-24 ${props.className}`}>
                <div className="pt-36 xl:pt-52 space-y-5">
                <MnaziLogo className="w-20 h-20 text-gold"/>
                <h1 className="text-6xl font-bold w-72">Get to know us</h1>
                <h1 className="text-2xl lg:w-1/3 md:text-justify">Aenean sed lacinia ante, ut egestas dui. Phasellus sagittis mattis turpis at pretium. Cras dapibus nisi lacus, eget efficitur sem porta ac. Aenean luctus eros augue, eu suscipit risus venenatis quis. Duis porttitor elit tellus, eu tincidunt sapien tincidunt sed. Praesent fringilla porta arcu sit amet consequat. </h1>
                <h1 className="text-2xl lg:w-1/3 md:text-justify">Aenean sed lacinia ante, ut egestas dui. Phasellus sagittis mattis turpis at pretium. Cras dapibus nisi lacus, eget efficitur sem porta ac. Aenean luctus eros augue, eu suscipit risus venenatis quis. Duis porttitor elit tellus, eu tincidunt sapien tincidunt sed. Praesent fringilla porta arcu sit amet consequat. </h1>
                </div>
                <div className="hidden absolute top-6 w-full space-y-6 overflow-hidden">

                <div className="flex  flex-row gap-6 h-72  transform translate-x-2/4">
                    <div className="bg-yellow-500 w-3/4"></div>
                    <div className="bg-red-500 w-3/4"></div>
                    <div className="bg-green-500 w-3/4"></div>
                </div>

                <div className="flex  flex-row gap-6 h-72  transform translate-x-3/4">
                    <div className="bg-green-800 w-3/4"></div>
                    <div className="bg-gray-500 w-3/4"></div>
                    <div className="bg-green-500 w-3/4"></div>
                </div>

                <div className="flex  flex-row gap-6 h-72  transform translate-x-2/3">
                    <div className="bg-red-500 w-3/4"></div>
                    <div className="bg-purple-400 w-3/4"></div>
                    <div className="bg-green-500 w-3/4"></div>
                </div>
                </div>
            </div>
        </>
    )
}


export function ExploreScreen(){
    return(
        <>
            <div className="min-h-screen mx-auto px-6 md:px-24 py-52 bg-gold">
                <h1 className="text-6xl font-bold">Explore </h1>
                <div className="w-full overflow-auto">
                    <div className=" inline-flex  space-x-5  min-h-screen py-32 md:py-64 ">
                        {
                            [1,2,3,4,].map((ix)=>{
                                return(
                                    <div key={ix} className=" relative  w-96 bg-gradient-to-t from-black to-pink-300 rounded-lg shadow-lg flex justify-center">
                                        <div className="absolute bottom-4 px-8 py-8">
                                            <h1 className="text-white font-semibold text-3xl text-left">Pugu Hills on the Outskirts Of  Dar es salaam</h1>
                                            <h1 className="text-gold">Aliquam erat volutpat. Vivamus sit amet tempor ex. Donec vitae urna purus.</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="relative">
                    <ScrollRight className="absolute right-0"/>
                    <ScrollLeft className="absolute right-16"/>
                </div>
            </div>
            
        </>

    )
}

export function HowItWork(){
    return(
        <div className="min-h-screen  mx-auto px-6 md:pl-24 bg-gradient-to-b from-gold">
            <h1 className="text-6xl font-bold  pt-24">How it works</h1>
            <h1 className="text-3xl font-medium pt-9">What we do for you!</h1>
            <div className="grid xl:grid-cols-2 grid-flow-row space-y-16 xl:space-y-0 pt-24">
                <div className="space-y-16">
                    <div className="space-y-4">
                        <p className="text-5xl font-bold md:w-3/5">Etiam gravida, felis vehicula</p>
                        <p className="text-3xl font-normal text-gray-500 md:w-4/5">Tristique ultrices, quam lectus malesuada diam, sit amet interdum sapien arcu sed nisl. </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-5xl font-bold md:w-3/5">Donec efficitur nibh</p>
                        <p className="text-3xl font-normal text-gray-500 xl:w-3/5">Consequat ante iaculis. In nec turpis a odio hendrerit molestie.</p>
                    </div>
                </div>
                <div className="space-y-16">
                    <div className="space-y-4">
                        <p className="text-5xl font-bold md:w-3/5">Vestibulum mi nisi, dapibus a tortor</p>
                        <p className="text-3xl font-normal text-gray-500 xl:w-3/5 ">Tempus rhoncus ipsum. Pellentesque mattis eleifend odio, ac egestas lectus auctor ut. </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-5xl font-bold md:w-3/5">Vivamus aliquet, libero imperdiet</p>
                        <p className="text-3xl font-normal text-gray-500  xl:w-4/5">Consequat ante iaculis. In nec turpis a odio hendrerit molestie.</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full flex  items-center justify-center h-36">
                <p className="absolute left-0 text-5xl md:text-4xl pt-12 font-bold">What you do for us!</p>
                <p className=" absolute top-40 text-4xl pt-12 text-center font-semibold">All you have to do is pay and show up :)</p>
            </div>
        </div>
    )
}

export function ScheduledScreen(){
    return(
        <div className="min-h-screen mx-auto  lg:pl-24 pt-24 py-12">
            <div className="xl:grid xl:grid-cols-2  grid grid-flow-row space-y-10 h-full ">
            <div className="pt-48 space-y-16 px-7">
                <h1 className="text-6xl font-bold ">Scheduled Trips</h1>
                <h1 className="text-3xl text-gold w-4/5 ">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed faucibus eros sit amet felis fringilla blandit. </h1>
            </div>
            <div className="">
                <div className=" bg-gray-500 rounded-l-3xl flex items-center w-full py-12 px-6 lg:mt-24">
                <div className="space-y-12">
                    <div className="w-full  flex  items-center pl-12 space-x-6">
                    <div className="flex items-center flex-col">
                        <h1 className="text-2xl text-white">OCT</h1>
                        <h1 className="text-5xl text-white font-bold">16</h1>
                    </div>

                    <div className=" space-y-2">
                        <h1 className="text-white text-3xl md:text-4xl font-bold">Pungu Hills</h1>
                        <h1 className="text-white text-xl " >Curabitur id lorem a ipsum rutrum temp...</h1>
                    </div>
                    </div>
                    <div className="w-full flex  items-center pl-12 space-x-6">
                    <div className="flex items-center flex-col">
                        <h1 className="text-2xl text-white">NOV</h1>
                        <h1 className="text-5xl text-white font-bold">23</h1>
                    </div>
                    <div className=" space-y-2">
                        <h1 className="text-white text-3xl md:text-4xl font-bold">Chmemaka Hotspot</h1>
                        <h1 className="text-white text-xl " >Curabitur id lorem a ipsum rutrum temp...</h1>
                    </div>
                    </div>  
                    <div className="w-full   flex  items-center pl-12 space-x-6">
                    <div className="flex items-center flex-col">
                        <h1 className="text-2xl text-white">DEC</h1>
                        <h1 className="text-5xl text-white font-bold">05</h1>
                    </div>
                    <div className=" space-y-2">
                        <h1 className="text-white text-3xl md:text-4xl font-bold">Kilwa</h1>
                        <h1 className="text-white text-xl " >Curabitur id lorem a ipsum rutrum temp...</h1>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export function ContactScreen(){
    return(
        <div className="bg-purple-400 py-24 md:grid md:grid-cols-2 grid grid-col-row space-y-12 items-center px-6 bg-opacity-70">
            <div className="flex flex-row w-full ">
            <div className="h-full  flex flex-col items-center justify-center space-y-4">
                <h1 className="text-5xl font-bold lg:w-3/4">Want to setup your own trip? We’ve got you! </h1>
                <h1 className="text-2xl font-medium lg:w-3/4">Donec sit amet nisi id tellus feugiat varius non ac dolor. Aliquam commodo porttitor nulla vitae luctus. </h1>
            </div>
            </div>
            <div className="space-y-10">
            <div className="flex flex-row items-center">
                <WhatAppIcon className="text-white"/>
                <h1 className="pl-6 text-3xl">+255 712 345 678 </h1>
            </div>
            <div className="flex flex-row items-center">
                <InstagramLogo className="text-black"/>
                <h1 className="pl-6 text-3xl">mnazitour </h1>
            </div>
            <div className="flex flex-row items-center">
                <EmailIcon />
                <h1 className="pl-6 text-3xl">buiness@gmail.com </h1>
            </div>
            </div>
        </div>
    )
}

export function Footer(){
    return(
        <div className=" pl-12 md:pl-24  py-24">
            <div className="md:grid md:grid-cols-3 grid grid-flow-row space-y-12 md:space-y-0 ">
            <div className="space-y-10">
                <div className=" flex flex-row">
                <MnaziLogo className="text-gold w-20 h-20"/>
                <div className="flex flex-col m-2">
                    <h1 className="font-semibold text-2xl text-gold">MNAZI </h1>
                    <h1 className="italic text-xl  ">TOURS & SAFARI</h1>
                </div>
                </div>
                <h1 className="w-3/4 md:w-2/4 text-xl ">Mwananyamala A Vijana House, 1st Floor Dar es Salaam 14101 Tanzania</h1>
                <div className="flex flex-row  space-x-8 items-center">
                <InstagramLogo className=""/>
                <FacebookIcon/>
                <YoutubeIcon/>
                </div>
            </div>
            <div className=" space-y-16">
                <h1 className="text-3xl font-bold">Company</h1>
                <div className="space-y-8">
                <h1 className="text-xl">Work with us</h1>
                <h1 className="text-xl">Mnazi Tour</h1>
                <h1 className="text-xl">Mnazi Store</h1>
                </div>
            </div>
            <div className="space-y-16">
                <h1 className="text-3xl font-bold">Site Links</h1>
                <div className=" space-y-8">
                <h1 className="text-xl">About Mnazi Tour</h1>
                <h1 className="text-xl">Scheduled Trips</h1>
                <h1 className="text-xl">Contact us</h1>
                </div>
            </div>
            </div>
        </div>
    )
}