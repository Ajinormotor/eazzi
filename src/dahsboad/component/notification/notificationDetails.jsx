import MobileSideDashboard from "../mobileSideDashboard";
import SidebarDashboard from "../sidebarDashboard";

import serachIcon from "/Image/search.svg"
import manager from "/Image/manager.svg"
import notification from "/Image/notification.svg"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { notificationdata } from "../../data/notification";


import Footerimg from "/Image/footer-dahsboard.svg"

const NotificationDetails = () => {


    const [showSide, setShowSide] = useState(false)

    const handleSide = ( ) => {
      setShowSide((prev) => !prev);
    }

    const {id} = useParams();
    const item = notificationdata.find((item)=> item.id === id)

  return (
    <section className="flex w-full  bg-[#F8F8F8] ">


    <div >
    
          <div onClick={handleSide} className="flex md:hidden text-[#1843E2] fixed right-[15px]  top-[20px] text-[30px] z-[10000] bg-white rounded-[7px] items-center justify-center w-[40px] h-[40px]" 
          style={{boxShadow:" 0px 8px 32px 0px #3326AE14"}}>
    
            {
      showSide?
    
      (<i className="ri-close-line"></i>)
      :
      ( <i className="ri-menu-2-line"></i>)
    
          
    
    
    }
    
          </div>
    
    
    
    
    <div  className={`fixed overflow-y-scroll z-[1000] h-full  ${showSide? "max-w-[214px] w-full bg-[#1843E2] " 
        : "max-w-[214px] w-[0px] bg-[#1843E2] "}`}>
    <MobileSideDashboard />
     </div>
    
       
    </div>
    
    
        
        <div  className="max-w-[204px] w-full  md:flex hidden  bg-[#1843E2]">
    <SidebarDashboard />
     </div>
    
    
     <div className="flex flex-col py-[1rem] md:px-[1rem] px-[0.4rem]  max-w-[1141px] w-full">
    
    
    {/* Top Link */}
    <div className="w-full flex   items-center justify-between">
      
        <div>
            <h1 className="outline-none w-full h-full lg:text-[32px] text-[24px] leading-[48px] text-[#5075FF] font-tekInter font-[700]">Profile</h1>
        </div>



{/* Input */}
<div className=" hidden md:flex gap-[6px] bg-[#FFFFFF] border-[1px] border-[#D0D5DD] rounded-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]" 
    style={{boxShadow:"0px 1px 2px 0px #1018280D"}}>
        <img src={serachIcon} alt="searc_icon" className="w-[20px] h-[20px]" />
        <input type="text" placeholder="Search" className="outline-none w-full h-full bg-white text-[16px] leading-[24px] text-[#667085] font-tekInter font-[400]" />

    </div>


    {/*third div  */}

    <div className="md:flex lg:gap-[12px] hidden">
<div className="flex ">

    <img src={notification}  alt="graph-pics" className="w-[24px] h-[24px]"/>
    <div className="w-[14px] h-[14px] rounded-[35px] bg-[#FF7F00] p-[2px] gap-[5px] justify-center items-center text-center ml-[-0.8rem] mt-[-0.3rem]"> <h1 className="text-[8px] leading-[10px] text-[#FFFFFF] font-tekInter font-[400] text-center items-center justify-center">20</h1></div>
 

</div>


<div className="flex items-center justify-center gap-[0px]">
<img src={manager}  alt="graph-pics" className="w-[75px] h-[30px]"/>
<h1 className="text-[14px] leading-[16px] text-[#181818] font-tekInter font-[400]">Manager</h1>

</div>

    </div>



      

        </div>



{/* main content */}
<div className="flex flex-col bg-[#ffffff] rounded-[16px] pt-[24px] pr-[32px]  h-[619px]
pb-[24px] pl-[32px] gap-[27px] my-[2rem]"


style={{boxShadow:"0px 8px 32px 0px #3326AE14"}}>


    {/* Heading */}
    <div>
        <h1  className="text-[#4F4F4F] font-[400] font-tekInter text-[24px] leading-[36px]"> <i className="ri-arrow-left-fill"></i> Welcome to Ahmed .....</h1>
    </div>



    <div className="flex flex-col pt-[15px] pr-[12px] pb-[15px] pl-[12px] gap-[16px]">
    <p className="text-[#4F4F4F] font-[400] font-tekInter text-[16px] leading-[19px]">{item.descriptionOne}</p>


    <p className="text-[#4F4F4F] font-[400] font-tekInter text-[16px] leading-[19px]"> {item.descriptionTwo}</p>

    </div>
</div>






        

{/* Footer logo */}

 <div className="w-full items-center justify-center flex">
    <img src={Footerimg} alt="icons"className="w-[107px] h-[101px]" />
    </div>



        </div>

        </section>
  )
}
export default NotificationDetails
