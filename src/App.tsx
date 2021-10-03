import React from 'react';

interface Props {
  className: string;
}

function App() {
  return (
    <>
    
    {/* First Part */}
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

    {/* Second Part */}
      <div className="relative h-flex  bg-gradient-to-t from-gold via-white mx-auto px-6 lg:pl-24">
         
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


    {/* Third Part */}
      <div className="h-screen bg-gold mx-auto px-6 lg:pl-24 pt-24">
        <h1 className="text-6xl font-bold ">Explore </h1>
        <div className="w-full overflow-x-auto">
          <div className="h-3/4 inline-flex  space-x-5 py-12 ">
            <div className="h-96 w-96 bg-blue-400 rounded-lg shadow-lg"></div>
            <div className="h-96 w-96 bg-blue-400 rounded-lg shadow-lg"></div>
            <div className="h-96 w-96 bg-blue-400 rounded-lg shadow-lg"></div>
          </div>
        </div>

        <div className="relative">
            <ScrollRight className="absolute right-12"/>
            <ScrollLeft className="absolute right-32"/>
        </div>
      </div>


      <div className="min-h-screen jj  mx-auto px-6 md:pl-24 bg-gradient-to-b from-gold via-white">
        <h1 className="text-6xl font-bold  pt-24">How it works</h1>
        <h1 className="text-3xl font-medium pt-9">What we do for you!</h1>

        <div className="grid xl:grid-cols-2 grid-flow-row space-y-16 xl:space-y-0 pt-24">
          <div className="space-y-16">
            <div className="space-y-4">
              <p className="text-5xl font-bold">Etiam gravida, felis vehicula</p>
              <p className="text-3xl font-normal text-gray-500 xl:w-4/5">Tristique ultrices, quam lectus malesuada diam, sit amet interdum sapien arcu sed nisl. </p>
            </div>

            <div className="space-y-4">
              <p className="text-5xl font-bold ">Donec efficitur nibh</p>
              <p className="text-3xl font-normal text-gray-500 xl:w-3/5">Consequat ante iaculis. In nec turpis a odio hendrerit molestie.</p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="space-y-4">
              <p className="text-5xl font-bold ">Vestibulum mi nisi, dapibus a tortor</p>
              <p className="text-3xl font-normal text-gray-500 ">Tempus rhoncus ipsum. Pellentesque mattis eleifend odio, ac egestas lectus auctor ut. </p>
            </div>

            <div className="space-y-4">
              <p className="text-5xl font-bold ">Vivamus aliquet, libero imperdiet</p>
              <p className="text-3xl font-normal text-gray-500  xl:w-4/5">Consequat ante iaculis. In nec turpis a odio hendrerit molestie.</p>
            </div>
          </div>
        </div>

        <div className="relative w-full flex  items-center justify-center h-36">
          <p className="absolute left-0 text-5xl md:text-4xl pt-12 font-bold">What you do for us!</p>
          <p className=" absolute top-40 text-4xl pt-12 text-center font-semibold">All you have to do is pay and show up :)</p>
        </div>
      </div>


      {/* Forth part */}
      <div className="h-screen mx-auto px-6 lg:pl-24 pt-24">
        <div className="xl:grid xl:grid-cols-2 grid grid-flow-row h-full">
          <div className="pt-48 space-y-16">
          <h1 className="text-7xl font-bold  w-12">Scheduled Trips</h1>
          <h1 className="text-3xl w-96 text-gold">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed faucibus eros sit amet felis fringilla blandit. </h1>
        </div>

        <div className="pt-48">
          <div className="md:h-4/5 bg-gray-500 rounded-l-3xl flex  items-center w-full py-12 px-6 ">

          <div className="space-y-12">
            <div className="w-full  flex  items-center pl-12">
              <div className="flex items-center flex-col">
                <h1 className="text-2xl text-white">OCT</h1>
                <h1 className="text-5xl text-white font-bold">16</h1>
              </div>

              <div className="pl-6 space-y-2">
                <h1 className="text-white text-4xl font-bold">Pungu Hills</h1>
                <h1 className="text-white text-xl " >Curabitur id lorem a ipsum rutrum temp...</h1>
              </div>
            </div>


            <div className="w-full flex  items-center pl-12">
              <div className="flex items-center flex-col">
                <h1 className="text-2xl text-white">NOV</h1>
                <h1 className="text-5xl text-white font-bold">23</h1>
              </div>

              <div className="pl-6  space-y-2">
                <h1 className="text-white text-4xl font-bold">Chmemaka Hotspot</h1>
                <h1 className="text-white text-xl " >Curabitur id lorem a ipsum rutrum temp...</h1>
              </div>
            </div>


            <div className="w-full   flex  items-center pl-12">
              <div className="flex items-center flex-col">
                <h1 className="text-2xl text-white">DEC</h1>
                <h1 className="text-5xl text-white font-bold">05</h1>
              </div>

              <div className="pl-6  space-y-2">
                <h1 className="text-white text-4xl font-bold">Kilwa</h1>
                <h1 className="text-white text-xl " >Curabitur id lorem a ipsum rutrum temp...</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
          </div>






  
        {/* <div className="h-flex flex  justify-center items-center pb-12">

          <div className="bg-gray-500 flex flex-row h-3/4 w-4/5 rounded-3xl  shadow-xl">
            <div className="h-full w-3/5 flex flex-col pl-48 pt-48 pb-48  space-y-4">
              <h1 className="text-5xl font-bold w-3/5">Want to setup your own trip? We’ve got you! </h1>
              <h1 className="text-2xl font-medium w-4/5">Donec sit amet nisi id tellus feugiat varius non ac dolor. Aliquam commodo porttitor nulla vitae luctus. </h1>
            </div>

            <div className=" pt-52 pb-48 space-y-10">
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
    
        </div> */}

        {/* <div className="h-flex p-24 ">
          <div className="grid grid-cols-3 h-96 px-8">

            <div className="space-y-10 pl-24">
              <div className=" flex flex-row">
                <MnaziLogo className="text-gold w-20 h-20"/>
                <div className="flex flex-col m-2">
                  <h1 className="font-semibold text-2xl text-gold">MNAZI </h1>
                  <h1 className="font-mono text-xl ">TOURS & SAFARI</h1>
                </div>
              </div>

              <h1 className="w-1/4 text-xl">
              Mwananyamala A
              Vijana House, 1st Floor
              Dar es Salaam 14101
              Tanzania
              </h1>

              <div className="flex flex-row  space-x-8 items-center">
                <InstagramLogo className=""/>
                <FacebookIcon/>
                <YoutubeIcon/>
              </div>

            </div>


            <div className="">
              <h1 className="text-3xl font-bold">Company</h1>
              <div className="pt-20 space-y-6">
                <h1 className="text-xl">Work with us</h1>
                <h1 className="text-xl">Mnazi Tour</h1>
                <h1 className="text-xl">Mnazi Store</h1>
              </div>

            </div>

            <div className="">
              <h1 className="text-3xl font-bold">Site Links</h1>
              <div className="pt-20 space-y-6">
                <h1 className="text-xl">About Mnazi Tour</h1>
                <h1 className="text-xl">Scheduled Trips</h1>
                <h1 className="text-xl">Contact us</h1>
              </div>

            </div>
          </div>
        </div>  */}


    </>
  );
}










function MnaziLogo(props:Props){
  return(
    <svg  className={props.className} viewBox="0 0 421 421" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> 
      <path d="M210.38 420.88C94.45 420.88 0.130005 326.56 0.130005 210.63C0.130005 94.7 94.45 0.380005 210.38 0.380005C326.31 0.380005 420.63 94.7 420.63 210.63C420.63 326.56 326.31 420.88 210.38 420.88ZM210.38 7.87C98.58 7.87 7.62 98.83 7.62 210.63C7.62 322.43 98.58 413.39 210.38 413.39C322.18 413.39 413.14 322.43 413.14 210.63C413.14 98.83 322.18 7.87 210.38 7.87Z" fill="currentColor"/>
      <path d="M287.4 372.22C264.02 383.42 237.84 389.69 210.19 389.69C182.54 389.69 156.36 383.43 132.98 372.22H287.4Z" fill="currentColor"/>
      <path d="M83.63 337.28H336.75C330.44 343.59 323.66 349.43 316.46 354.75H103.92C96.72 349.43 89.94 343.59 83.63 337.28Z" fill="currentColor"/>
      <path d="M363.99 302.34C360.38 308.4 356.4 314.23 352.11 319.81H68.27C63.98 314.23 60 308.41 56.39 302.34H363.99Z" fill="currentColor"/>
      <path d="M246.16 165.31C243.76 165.31 241.4 165.44 239.07 165.71C238.84 165.06 238.57 164.42 238.27 163.8L308.27 134.77C298.38 128.27 286.49 124.48 273.71 124.48C253.31 124.48 235.21 134.12 223.85 149.02C223.8 148.99 223.74 148.97 223.69 148.95C225.72 98.95 210.42 76.5 210.42 76.5C195.33 99.64 197.1 147.56 197.15 148.95C197.1 148.97 197.04 148.99 196.99 149.02C185.63 134.12 167.53 124.48 147.13 124.48C134.13 124.48 122.07 128.4 112.08 135.1L182.38 164.26C182.16 164.74 181.96 165.22 181.78 165.72C179.45 165.45 177.09 165.32 174.7 165.32C144.12 165.32 118.69 186.99 113.43 215.58L146.23 201.98L181.74 187.26C182.15 188.36 182.62 189.43 183.16 190.47C169.27 201.71 160.41 218.74 160.41 237.81C160.41 240.41 160.57 242.98 160.9 245.49C162.16 255.42 165.83 264.61 171.33 272.47L185.07 238.5L187.57 232.32L198.69 204.84C198.86 204.91 199.03 204.98 199.2 205.04V233.3L202.26 235.93V301.09H217.57V237.69L220.63 235.05V205.41C221.15 205.24 221.66 205.04 222.16 204.83L233.28 232.31L235.78 238.49L249 271.16C254.41 263.65 258.15 254.9 259.68 245.41C260.18 242.27 260.45 239.04 260.45 235.75C260.45 217.01 251.88 200.22 238.4 188.99C238.6 188.56 238.79 188.13 238.94 187.69L273.11 201.86H273.12L307.53 216.13C302.51 187.27 276.94 165.31 246.16 165.31Z" fill="currentColor"/>
    </svg>
  )
}

function InstagramLogo(props: Props){
  return(
    <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={props.className}>
      <path d="M24.75 0H11.25C5.03775 0 0 5.03775 0 11.25V24.75C0 30.9622 5.03775 36 11.25 36H24.75C30.9622 36 36 30.9622 36 24.75V11.25C36 5.03775 30.9622 0 24.75 0ZM32.625 24.75C32.625 29.0925 29.0925 32.625 24.75 32.625H11.25C6.9075 32.625 3.375 29.0925 3.375 24.75V11.25C3.375 6.9075 6.9075 3.375 11.25 3.375H24.75C29.0925 3.375 32.625 6.9075 32.625 11.25V24.75Z" fill="currrentColor"/>
      <path d="M18 8.99994C13.0297 8.99994 9 13.0297 9 17.9999C9 22.9702 13.0297 26.9999 18 26.9999C22.9703 26.9999 27 22.9702 27 17.9999C27 13.0297 22.9703 8.99994 18 8.99994ZM18 23.6249C14.8995 23.6249 12.375 21.1004 12.375 17.9999C12.375 14.8972 14.8995 12.3749 18 12.3749C21.1005 12.3749 23.625 14.8972 23.625 17.9999C23.625 21.1004 21.1005 23.6249 18 23.6249Z" fill="currentColor"/>
      <path d="M27.6752 9.52429C28.3375 9.52429 28.8745 8.98737 28.8745 8.32504C28.8745 7.66272 28.3375 7.12579 27.6752 7.12579C27.0129 7.12579 26.476 7.66272 26.476 8.32504C26.476 8.98737 27.0129 9.52429 27.6752 9.52429Z" fill="currentColor"/>
    </svg>

  )
}

function RightArrow(props: Props){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 25 25" fill="currentColor">
      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  )
}


function ScrollRight(props: Props){
  return(
    <svg width="54" height="54" className={props.className} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27" cy="27" r="27" fill="#9A7C51"/>
      <path d="M43.5 27.0001H10.5M30.6667 14.1667L43.5 27.0001L30.6667 14.1667ZM43.5 27.0001L30.6667 39.8334L43.5 27.0001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

function ScrollLeft(props: Props){
  return(
    <svg width="54" height="54" className={props.className} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27" cy="27" r="27" fill="#9A7C51"/>
      <path d="M10.5 26.9999L43.5 26.9999M23.3333 39.8333L10.5 26.9999L23.3333 39.8333ZM10.5 26.9999L23.3333 14.1666L10.5 26.9999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}


function WhatAppIcon(props: Props){
  return(
    <svg width="34" height="34"  className={props.className} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7201 4.94158C25.6236 1.81738 21.5056 0.0960705 17.1185 0.0942383C8.07837 0.0942383 0.721041 7.50858 0.717405 16.6214C0.716193 19.5345 1.47132 22.3782 2.90663 24.8847L0.579834 33.4495L9.27429 31.151C11.67 32.468 14.3671 33.162 17.1118 33.1629H17.1187C26.1578 33.1629 33.5159 25.7479 33.5193 16.6347C33.5212 12.2181 31.8168 8.06558 28.7201 4.94158ZM17.1185 30.3715H17.1128C14.6668 30.3705 12.2679 29.708 10.1747 28.4566L9.67711 28.1588L4.51768 29.5228L5.89481 24.4533L5.57058 23.9336C4.20598 21.7463 3.48539 19.2181 3.48661 16.6224C3.48943 9.04808 9.60479 2.88579 17.1239 2.88579C20.765 2.88701 24.1877 4.3178 26.7614 6.91452C29.335 9.51124 30.7516 12.9628 30.7503 16.6336C30.7471 24.2086 24.6322 30.3715 17.1185 30.3715ZM24.5958 20.0826C24.1861 19.8757 22.1712 18.8769 21.7955 18.7389C21.4202 18.6011 21.1466 18.5325 20.8737 18.9457C20.6004 19.359 19.8152 20.2894 19.576 20.5648C19.3368 20.8405 19.098 20.8751 18.6881 20.6683C18.2782 20.4616 16.9579 20.0254 15.3925 18.6184C14.1743 17.5233 13.3519 16.1709 13.1128 15.7576C12.874 15.3439 13.1107 15.142 13.2925 14.9148C13.7362 14.3596 14.1804 13.7776 14.317 13.5021C14.4537 13.2264 14.3852 12.9852 14.2826 12.7786C14.1804 12.5719 13.3608 10.5391 13.0194 9.71197C12.6865 8.907 12.3489 9.01571 12.0972 9.00309C11.8584 8.99108 11.5851 8.98864 11.3118 8.98864C11.0387 8.98864 10.5947 9.09185 10.2189 9.50554C9.84336 9.91902 8.78481 10.918 8.78481 12.9508C8.78481 14.9836 10.2533 16.9474 10.4581 17.223C10.6629 17.4987 13.3479 21.6701 17.4587 23.4588C18.4364 23.8847 19.1996 24.1386 19.795 24.3289C20.7767 24.6433 21.6698 24.5989 22.3761 24.4926C23.1635 24.3739 24.8004 23.4934 25.1423 22.5288C25.4837 21.564 25.4837 20.7373 25.381 20.5648C25.2788 20.3926 25.0055 20.2894 24.5958 20.0826Z" fill="black"/>
    </svg>

  )
}


function FacebookIcon(){
  return(
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0001 0.0664062C7.16358 0.0664062 0 7.22998 0 16.0665C0 23.9918 5.76835 30.5553 13.3316 31.8263V19.4046H9.47191V14.9345H13.3316V11.6384C13.3316 7.81403 15.6674 5.72997 19.0795 5.72997C20.7137 5.72997 22.1181 5.85174 22.5258 5.90537V9.90287L20.1593 9.90401C18.304 9.90401 17.9464 10.7854 17.9464 12.0793V14.9322H22.3731L21.7957 19.4023H17.9464V31.9332C25.8627 30.9697 32 24.239 32 16.0619C32 7.22998 24.8364 0.0664062 16.0001 0.0664062Z" fill="#010002"/>
    </svg>

  )
}


function YoutubeIcon(){
  return(
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M41.1347 10.9178C40.6505 9.11859 39.2319 7.70036 37.433 7.21586C34.1463 6.31641 20.9996 6.31641 20.9996 6.31641C20.9996 6.31641 7.85318 6.31641 4.56649 7.18158C2.80219 7.66575 1.34902 9.11892 0.864849 10.9178C0 14.2042 0 21.0198 0 21.0198C0 21.0198 0 27.8697 0.864849 31.1218C1.34934 32.9207 2.76758 34.3393 4.56681 34.8237C7.88778 35.7232 20.9999 35.7232 20.9999 35.7232C20.9999 35.7232 34.1463 35.7232 37.433 34.858C39.2322 34.3739 40.6505 32.9553 41.135 31.1564C41.9998 27.8697 41.9998 21.0544 41.9998 21.0544C41.9998 21.0544 42.0344 14.2042 41.1347 10.9178Z" fill="#FF0000"/>
      <path d="M16.814 27.3162L27.7462 21.0197L16.814 14.7231V27.3162Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="42" height="42" fill="white"/>
      </clipPath>
      </defs>
    </svg>

  )
}

function EmailIcon(){
  return(
    <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.5363 0.640625H3.45763C1.62657 0.640625 0.143555 2.14445 0.143555 3.98047V24.0195C0.143555 25.8665 1.63747 27.3594 3.45763 27.3594H34.5363C36.352 27.3594 37.8503 25.8728 37.8503 24.0195V3.98047C37.8503 2.14771 36.3732 0.640625 34.5363 0.640625ZM34.0722 2.86719C33.3951 3.54592 21.7427 15.2271 21.3404 15.6304C20.7144 16.2612 19.8822 16.6086 18.997 16.6086C18.1117 16.6086 17.2795 16.2611 16.6515 15.6283C16.3809 15.357 4.85712 3.80487 3.92175 2.86719H34.0722ZM2.35294 23.5664V4.43506L11.9003 14.0059L2.35294 23.5664ZM3.92314 25.1328L13.4667 15.5762L15.0913 17.2048C16.1345 18.2561 17.5216 18.8351 18.997 18.8351C20.4723 18.8351 21.8594 18.2561 22.9006 17.2068L24.5272 15.5762L34.0708 25.1328H3.92314ZM35.641 23.5664L26.0936 14.0059L35.641 4.43506V23.5664Z" fill="black"/>
    </svg>
  )
}



export default App;
