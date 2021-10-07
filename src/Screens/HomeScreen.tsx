import {FirstScreen, GetToKnowScreen, ExploreScreen, ScheduledScreen, Footer, ContactScreen, HowItWork} from '../components/Parts'

export function HomeScreen(){
    return(
        <>
        {/* First Part */}
        <FirstScreen/>
        
        {/* Second Part */}
        <GetToKnowScreen className="bg-gradient-to-t from-gold"/>
          
        {/* Third Part */}
        <ExploreScreen/>
  
        {/* Forth part */}
        <HowItWork/>
        <ScheduledScreen/>
        
  
        {/* The Fifth part */}
        <ContactScreen/>
        
  
        {/* Sixth Part  */}
        <Footer/> 
      </>
    )
}