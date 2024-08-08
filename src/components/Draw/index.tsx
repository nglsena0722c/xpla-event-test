const Draw = () => {
  return (
    <div className="flex flex-col justify-center bg-white items-center">

      <div className="w-full md:h-[200px] h-[80px] flex justify-center items-center bg-[#404040] px-[20px]">
        <div className="md:max-w-[1180px] md:w-full flex md:flex-row flex-col-reverse md:justify-between justify-center items-center text-[#D9D9D9] font-pretendard md:leading-[24px] md:text-[20px] text-[8px]">
          <span className="md:mt-[0px] mt-[10px] font-normal">
            Copyright © 2023{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://xpla.io/"
              className="underline"
            >
              XPLA
            </a>
          .{" "} All rights reserved.
          </span>
          <div className="flex md:gap-[22px] font-semibold md:leading-[18px] ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.xpla.io/pdf/PRIVACY_POLICY.pdf"
              className="md:hover:cursor-pointer md:hover:opacity-80 md:mr-[0px] mr-[20px]"
            >
              Privacy Policy
            </a>
            <div className="md:h-[18px] border-solid border-r-[1px] border-[#DDDDDD] md:mr-[0px] mr-[20px]" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.xpla.io/pdf/COOKIE_POLICY.pdf"
              className="md:hover:cursor-pointer md:hover:opacity-80 md:mr-[0px] mr-[20px]"
            >
              Cookie Policy
            </a>
            <div className="md:h-[18px] border-solid border-r-[1px] border-[#DDDDDD] md:mr-[0px] mr-[20px]" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://assets.xpla.io/pdf/TERMS_OF_USE.pdf"
              className="md:hover:cursor-pointer md:hover:opacity-80"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draw;
