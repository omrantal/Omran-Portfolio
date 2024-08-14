import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube, FaFacebook, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://github.com/omrantal" target="_blank">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>    
            </a>

            <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.linkedin.com/in/omran-taljeh-575470220/" target="_blank">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>    
            </a>

            {/*DiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>    
            </p>*/}
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.facebook.com/amran.talgha/" target="_blank">
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>    
            </a>

            {/*<p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>    
            </p>*/}

            <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://t.me/Omrantaljeh" target="_blank">
              <FaTelegram />
              <span className="text-[15px] ml-[6px]">Telegram</span>    
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            {/*<p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
            </p>*/}

            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">Learning about me</span>    
            </p>

            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">amrantal3@gmail.com</span>    
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Omran | عمران Dev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
