import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/skylineCopy.png";
// import heroImg from "../public/img/hero.png";
import PopupWidget from "../components/popupWidget";


// const TestImgUrl = url('https://cdn.pixabay.com/photo/2021/05/29/18/59/petra-6294051_960_720.jpg')
export default function Hero() {
  return (
    <>
      <Container className="">

          <div className=""
            style={{
                backgroundImage: `url(${heroImg.src})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
          >
        <div className=" flex items-center w-full lg:w-1/2 p-5 m-4">
          <div className="max-w-2xl mb-8 p-2">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Turn your Art into Nfts!
            </h1>
            <span className="py-5 text-xl text-gray-300 xl:text-2xl dark:text-gray-300">
              Let us help you get started and guide you through the process digitizing your art.
              We provide a wide range of solutions, from custom smart contracts to dedicated market places, that allow you to express your creative freedom while we handle the technical complexities.
              
            </span>

            <div className="flex p-1 m-2 flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {/* <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                // className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                className=""> */}
                  <PopupWidget/>
                {/* contact us Today! */}
              {/* </a> */}
            </div>
          </div>
        </div>
        {/* </div> */}
        


                    </div>
        {/* </div> */}
        {/* </div> */}
        
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            We use Blockchain Networks Trusted by <span className="text-blue-600">Millions</span>{" "}
            users worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {/* <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div> */}
            <div className="text-gray-400 dark:text-gray-400 p-2 m-2">
              <PolygonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400 p-2 m-2">
              <SolanaLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400 p-2 m-2">
              <EthereumLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 p-2 m-2">
              <AvelancheLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

// function AmazonLogo() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="110"
//       height="33"
//       fill="none"
//       viewBox="0 0 110 33">
//       <g fill="currentColor" clipPath="url(#clip0)">
//         <path
//           fillRule="evenodd"
//           d="M67.776 25.783c-6.323 4.676-15.521 7.167-23.455 7.167-11.114 0-21.079-4.1-28.667-10.923-.575-.536-.077-1.264.651-.843 8.163 4.752 18.243 7.589 28.668 7.589 7.013 0 14.755-1.457 21.884-4.485 1.073-.421 1.954.729.92 1.495z"
//           clipRule="evenodd"></path>
//         <path
//           fillRule="evenodd"
//           d="M70.42 22.756c-.804-1.035-5.365-.499-7.396-.23-.613.076-.728-.46-.153-.844 3.64-2.567 9.581-1.8 10.271-.958.69.843-.192 6.822-3.603 9.658-.536.422-1.034.192-.804-.383.766-1.916 2.49-6.17 1.686-7.243z"
//           clipRule="evenodd"></path>
//         <path d="M63.139 3.67V1.177c0-.383.268-.613.613-.613h11.115c.345 0 .651.268.651.613v2.108c0 .345-.306.805-.843 1.571l-5.749 8.202c2.146-.038 4.408.268 6.324 1.341.421.23.536.614.575.959v2.644c0 .383-.383.805-.805.575-3.411-1.801-7.972-1.993-11.728.038-.383.192-.805-.191-.805-.575v-2.529c0-.383 0-1.073.422-1.686l6.669-9.543H63.79c-.344 0-.651-.269-.651-.614zm-40.51 15.445h-3.373c-.306-.039-.575-.269-.613-.575V1.217c0-.345.307-.614.652-.614h3.142c.345 0 .575.269.613.575V3.44h.077C23.932 1.255 25.503.22 27.573.22c2.108 0 3.45 1.035 4.369 3.22.805-2.185 2.683-3.22 4.676-3.22 1.418 0 2.95.575 3.909 1.916 1.073 1.457.843 3.565.843 5.443v10.96c0 .346-.306.614-.651.614h-3.335c-.345-.038-.613-.307-.613-.613V9.342c0-.729.077-2.568-.077-3.258-.268-1.15-.996-1.495-1.992-1.495-.805 0-1.687.537-2.032 1.418-.345.882-.306 2.338-.306 3.335v9.198c0 .345-.307.613-.652.613H28.34c-.345-.038-.613-.307-.613-.613V9.342c0-1.917.307-4.791-2.07-4.791-2.414 0-2.337 2.76-2.337 4.79v9.199c-.038.306-.307.575-.69.575zM85.099.22c5.021 0 7.742 4.293 7.742 9.773 0 5.289-2.99 9.505-7.741 9.505-4.906 0-7.589-4.293-7.589-9.658C77.473 4.436 80.194.22 85.1.22zm0 3.564c-2.49 0-2.644 3.411-2.644 5.52 0 2.107-.038 6.63 2.606 6.63 2.606 0 2.76-3.641 2.76-5.864 0-1.457-.077-3.22-.499-4.6-.383-1.226-1.15-1.686-2.222-1.686zm14.22 15.33h-3.373c-.345-.038-.614-.306-.614-.613V1.14a.662.662 0 01.652-.575h3.143c.306 0 .536.23.613.498v2.645h.077c.958-2.376 2.261-3.488 4.599-3.488 1.494 0 2.989.537 3.947 2.031.882 1.38.882 3.718.882 5.404v10.923c-.039.307-.307.537-.652.537h-3.373c-.306-.039-.574-.269-.613-.537V9.15c0-1.916.23-4.676-2.108-4.676-.804 0-1.571.537-1.954 1.38-.46 1.073-.537 2.108-.537 3.296V18.5a.702.702 0 01-.69.614zm-41.622-.038a.693.693 0 01-.805.077c-1.111-.92-1.341-1.38-1.955-2.261-1.84 1.878-3.18 2.453-5.557 2.453-2.836 0-5.059-1.764-5.059-5.251 0-2.76 1.495-4.6 3.603-5.519 1.84-.805 4.407-.958 6.362-1.188v-.422c0-.804.076-1.763-.422-2.452-.421-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.72 2.031-.078.307-.27.614-.576.614l-3.257-.345c-.269-.077-.575-.269-.499-.69.767-3.986 4.331-5.174 7.55-5.174 1.648 0 3.795.421 5.098 1.686 1.648 1.533 1.495 3.603 1.495 5.826v5.25c0 1.571.651 2.261 1.264 3.143.23.307.268.69 0 .881-.728.575-1.954 1.648-2.644 2.223zm-3.411-8.24v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603zm-41.698 8.317c-1.112-.92-1.342-1.38-1.955-2.261-1.84 1.878-3.181 2.453-5.557 2.453-2.836 0-5.06-1.764-5.06-5.251 0-2.76 1.496-4.6 3.603-5.519 1.84-.805 4.408-.958 6.362-1.188v-.422c0-.804.077-1.763-.421-2.452-.422-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.721 2.031-.077.307-.268.614-.575.614L1.128 5.93C.86 5.854.553 5.662.63 5.24 1.397 1.255 4.96.067 8.18.067c1.648 0 3.794.421 5.098 1.686 1.647 1.533 1.494 3.603 1.494 5.826v5.25c0 1.571.652 2.261 1.265 3.143.23.307.268.69 0 .881-.728.575-1.955 1.648-2.644 2.223a.693.693 0 01-.805.077zm-2.568-8.317v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603z"></path>
//       </g>
//       <defs>
//         <clipPath id="clip0">
//           <path fill="#fff" d="M0 0H109.272V33H0z"></path>
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

function SolanaLogo() {
  return (
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
  width="150"
  height="31"
	 viewBox="0 0 397.7 311.7" 
   >
<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="360.8791" y1="351.4553" x2="141.213" y2="-69.2936" gradientTransform="matrix(1 0 0 -1 0 314)">
	<stop  offset="0" />
	<stop  offset="1" />
</linearGradient>
<path className="st0"  fill="#a37d43" d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"/>
<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="264.8291" y1="401.6014" x2="45.163" y2="-19.1475" gradientTransform="matrix(1 0 0 -1 0 314)">
	<stop  offset="0" />
	<stop  offset="1" />
</linearGradient>
<path className="st1" fill="#a37d43" d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"/>
<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="312.5484" y1="376.688" x2="92.8822" y2="-44.061" gradientTransform="matrix(1 0 0 -1 0 314)">
	<stop  offset="0" />
	<stop  offset="1" />
</linearGradient>
<path className="st2" fill="#a37d43" d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
	c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"/>
</svg>






  );
}

function EthereumLogo() {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="150"
      height="60"
      // fill="none"
    viewBox="0 0 960.1 658.7">
    <title>ethereum-eth-logo-full-vertical</title>
    <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
    <path fill="currentColor" d="M86.7,611.5a3.88,3.88,0,0,1-3.9,3.8H7.9c1.9,18.5,15.8,35.4,35.4,35.4,13.4,0,23.3-5.1,30.8-15.8a3.74,3.74,0,0,1,4.8-1.5,3.63,3.63,0,0,1,2.1,2.7,3.51,3.51,0,0,1-.5,2.6C73,651.8,58,658.3,43.2,658.3,18,658.3,0,635.8,0,611.6s18-46.7,43.2-46.7,43.5,22.5,43.5,46.6Zm-8-3.7c-1.6-18.5-15.8-35.4-35.4-35.4S9.8,589.3,7.9,607.8Z"/>
    <path fill="currentColor" d="M177.6,566.8a3.93,3.93,0,0,1,3.8,3.8,3.74,3.74,0,0,1-3.8,3.8H157.5v78.8a3.86,3.86,0,0,1-3.8,3.8,3.93,3.93,0,0,1-3.8-3.8V574.4H130.6a3.74,3.74,0,0,1-3.8-3.8,3.86,3.86,0,0,1,3.8-3.8h19.3V537.9a3.77,3.77,0,0,1,3-3.8,3.72,3.72,0,0,1,4.5,3.7v29Z" />
    <path fill="currentColor" d="M300.2,604.9v47.7a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8V604.9c0-16.1-9.1-32.2-27.1-32.2-23.1,0-33,20.1-31.6,40.8,0,.5.3,2.9.3,3.2v35.8a3.77,3.77,0,0,1-3,3.8,3.72,3.72,0,0,1-4.5-3.7V495.7a3.86,3.86,0,0,1,3.8-3.8,3.93,3.93,0,0,1,3.8,3.8v88.8c6.4-11.5,18-19.3,31.4-19.3,21.9,0,34.5,19.3,34.5,39.7Z"/>
    <path  fill="currentColor" d="M434.5,611.5a3.88,3.88,0,0,1-3.9,3.8H355.7c1.9,18.5,15.8,35.4,35.4,35.4,13.4,0,23.3-5.1,30.8-15.8a3.74,3.74,0,0,1,4.8-1.5,3.63,3.63,0,0,1,2.1,2.7,3.51,3.51,0,0,1-.5,2.6c-7.5,13.1-22.5,19.6-37.3,19.6-25.2,0-43.2-22.5-43.2-46.7s18-46.7,43.2-46.7,43.5,22.5,43.5,46.6Zm-8-3.7c-1.6-18.5-15.8-35.4-35.4-35.4s-33.5,16.9-35.4,35.4Z" />
    <path fill="currentColor" d="M526.5,570.3a3.61,3.61,0,0,1-3.5,4c-22,3.2-31.9,21.2-31.9,42.1v35.8a3.77,3.77,0,0,1-3,3.8,3.72,3.72,0,0,1-4.5-3.7V570.6a3.77,3.77,0,0,1,3-3.8,3.72,3.72,0,0,1,4.5,3.7v16.6c6.2-10.5,18.5-20.4,31.4-20.4,1.8.1,4,1.4,4,3.6Z" />
    <path  fill="currentColor" d="M649.6,611.5a3.88,3.88,0,0,1-3.9,3.8H570.8c1.9,18.5,15.8,35.4,35.4,35.4,13.4,0,23.3-5.1,30.8-15.8a3.74,3.74,0,0,1,4.8-1.5,3.63,3.63,0,0,1,2.1,2.7,3.51,3.51,0,0,1-.5,2.6c-7.5,13.1-22.5,19.6-37.3,19.6-25.2,0-43.2-22.5-43.2-46.7s18-46.7,43.2-46.7,43.4,22.5,43.5,46.6Zm-8.1-3.7c-1.6-18.5-15.8-35.4-35.4-35.4s-33.5,16.9-35.4,35.4Z" />
    <path  fill="currentColor" d="M770.5,571.2v81.9a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8V637.5c-6.2,12.3-17.2,21.2-31.1,21.2-22.3,0-34.6-19.3-34.6-39.7V571a3.8,3.8,0,0,1,7.6,0v48c0,16.1,9.1,32.2,27.1,32.2,25.2,0,31.1-23.6,31.1-49.6V571a3.77,3.77,0,0,1,4.8-3.6,3.87,3.87,0,0,1,2.7,3.8Z"/>
    <path fill="currentColor" d="M960.1,604.6v48a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8v-48c0-16.1-9.1-31.9-27.1-31.9-22.5,0-31.1,24.1-31.1,42.9v37a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8v-48c0-16.1-9.1-31.9-27.1-31.9-22.8,0-32.2,18-31.4,41.8,0,.5.3,1.6,0,1.9v36.1a3.77,3.77,0,0,1-3,3.8,3.72,3.72,0,0,1-4.5-3.7v-82a3.77,3.77,0,0,1,3-3.8,3.72,3.72,0,0,1,4.5,3.7v13.7c6.4-11.5,18-19,31.4-19,15.3,0,27.1,9.7,31.9,23.9,6.2-13.9,18.2-23.9,33.8-23.9C947.5,565.2,960.1,584.2,960.1,604.6Z"/>
   
    <path fill="#46cf98" d="M480.1,150.9,354.9,207.8l125.2,74.1,125.3-74.1Z" style={{opacity:"0.6000000238418579",isolation:"isolate"}}/>
    <path  fill="#46cf98" d="M354.9,207.8l125.2,74.1V0Z" style={{opacity:"0.44999998807907104",isolation:"isolate"}}/>
    <path fill="#46cf98" d="M480.1,0V281.9l125.2-74.1Z" style={{opacity:"0.800000011920929",isolation:"isolate"}}/>
    <path  fill="#46cf98" d="M354.9,231.6,480.1,408V305.6Z" style={{opacity:"0.44999998807907104",isolation:"isolate"}}/>
    <path  fill="#46cf98" d="M480.1,305.6V408L605.4,231.6Z" style={{opacity:"0.800000011920929",isolation:"isolate"}}/>
    </g>
    </g>
    </svg>
  );
}

function AvelancheLogo() {
  return (
  <svg 
  width="136" 
  height="40" 
  viewBox="0 0 1503 1504" fill="none" 
  xmlns="http://www.w3.org/2000/svg">
<rect x="287" y="258" width="928" height="844" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z" fill="#E84142"/>
</svg>

  );
}

function PolygonLogo() {
  return (
    <svg version="1.1" id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg" 
    width="136" 
    height="30" 
	  viewBox="0 0 38.4 33.5"  
   >
<g>
	<path fill="#745cb5" d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
		c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
		c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
		L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
</g>
</svg>

  );
}
//SAMPLE SVG FORMART
// <svg 
// xmlns="http://www.w3.org/2000/svg" 
// viewBox="0 0 960.1 658.7">
// <title>ethereum-eth-logo-full-vertical</title>
// <g id="Layer_2" data-name="Layer 2">
// <g id="Layer_1-2" data-name="Layer 1">
// <path d="M86.7,611.5a3.88,3.88,0,0,1-3.9,3.8H7.9c1.9,18.5,15.8,35.4,35.4,35.4,13.4,0,23.3-5.1,30.8-15.8a3.74,3.74,0,0,1,4.8-1.5,3.63,3.63,0,0,1,2.1,2.7,3.51,3.51,0,0,1-.5,2.6C73,651.8,58,658.3,43.2,658.3,18,658.3,0,635.8,0,611.6s18-46.7,43.2-46.7,43.5,22.5,43.5,46.6Zm-8-3.7c-1.6-18.5-15.8-35.4-35.4-35.4S9.8,589.3,7.9,607.8Z" style={{fill:"#3b3b3b"}}/>
// <path d="M177.6,566.8a3.93,3.93,0,0,1,3.8,3.8,3.74,3.74,0,0,1-3.8,3.8H157.5v78.8a3.86,3.86,0,0,1-3.8,3.8,3.93,3.93,0,0,1-3.8-3.8V574.4H130.6a3.74,3.74,0,0,1-3.8-3.8,3.86,3.86,0,0,1,3.8-3.8h19.3V537.9a3.77,3.77,0,0,1,3-3.8,3.72,3.72,0,0,1,4.5,3.7v29Z" style={{fill:"#3b3b3b"}} />
// <path d="M300.2,604.9v47.7a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8V604.9c0-16.1-9.1-32.2-27.1-32.2-23.1,0-33,20.1-31.6,40.8,0,.5.3,2.9.3,3.2v35.8a3.77,3.77,0,0,1-3,3.8,3.72,3.72,0,0,1-4.5-3.7V495.7a3.86,3.86,0,0,1,3.8-3.8,3.93,3.93,0,0,1,3.8,3.8v88.8c6.4-11.5,18-19.3,31.4-19.3,21.9,0,34.5,19.3,34.5,39.7Z" style={{fill:"#3b3b3b"}}/>
// <path d="M434.5,611.5a3.88,3.88,0,0,1-3.9,3.8H355.7c1.9,18.5,15.8,35.4,35.4,35.4,13.4,0,23.3-5.1,30.8-15.8a3.74,3.74,0,0,1,4.8-1.5,3.63,3.63,0,0,1,2.1,2.7,3.51,3.51,0,0,1-.5,2.6c-7.5,13.1-22.5,19.6-37.3,19.6-25.2,0-43.2-22.5-43.2-46.7s18-46.7,43.2-46.7,43.5,22.5,43.5,46.6Zm-8-3.7c-1.6-18.5-15.8-35.4-35.4-35.4s-33.5,16.9-35.4,35.4Z"  style={{fill:"#3b3b3b"}}/>
// <path d="M526.5,570.3a3.61,3.61,0,0,1-3.5,4c-22,3.2-31.9,21.2-31.9,42.1v35.8a3.77,3.77,0,0,1-3,3.8,3.72,3.72,0,0,1-4.5-3.7V570.6a3.77,3.77,0,0,1,3-3.8,3.72,3.72,0,0,1,4.5,3.7v16.6c6.2-10.5,18.5-20.4,31.4-20.4,1.8.1,4,1.4,4,3.6Z"  style={{fill:"#3b3b3b"}}/>
// <path d="M649.6,611.5a3.88,3.88,0,0,1-3.9,3.8H570.8c1.9,18.5,15.8,35.4,35.4,35.4,13.4,0,23.3-5.1,30.8-15.8a3.74,3.74,0,0,1,4.8-1.5,3.63,3.63,0,0,1,2.1,2.7,3.51,3.51,0,0,1-.5,2.6c-7.5,13.1-22.5,19.6-37.3,19.6-25.2,0-43.2-22.5-43.2-46.7s18-46.7,43.2-46.7,43.4,22.5,43.5,46.6Zm-8.1-3.7c-1.6-18.5-15.8-35.4-35.4-35.4s-33.5,16.9-35.4,35.4Z" style={{fill:"#3b3b3b"}} />
// <path d="M770.5,571.2v81.9a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8V637.5c-6.2,12.3-17.2,21.2-31.1,21.2-22.3,0-34.6-19.3-34.6-39.7V571a3.8,3.8,0,0,1,7.6,0v48c0,16.1,9.1,32.2,27.1,32.2,25.2,0,31.1-23.6,31.1-49.6V571a3.77,3.77,0,0,1,4.8-3.6,3.87,3.87,0,0,1,2.7,3.8Z" style={{fill:"#3b3b3b"}}/>
// <path d="M960.1,604.6v48a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8v-48c0-16.1-9.1-31.9-27.1-31.9-22.5,0-31.1,24.1-31.1,42.9v37a3.93,3.93,0,0,1-3.8,3.8,3.74,3.74,0,0,1-3.8-3.8v-48c0-16.1-9.1-31.9-27.1-31.9-22.8,0-32.2,18-31.4,41.8,0,.5.3,1.6,0,1.9v36.1a3.77,3.77,0,0,1-3,3.8,3.72,3.72,0,0,1-4.5-3.7v-82a3.77,3.77,0,0,1,3-3.8,3.72,3.72,0,0,1,4.5,3.7v13.7c6.4-11.5,18-19,31.4-19,15.3,0,27.1,9.7,31.9,23.9,6.2-13.9,18.2-23.9,33.8-23.9C947.5,565.2,960.1,584.2,960.1,604.6Z" style={{fill:"#3b3b3b"}}/>
// <path d="M480.1,150.9,354.9,207.8l125.2,74.1,125.3-74.1Z" style={{opacity:"0.6000000238418579",isolation:"isolate"}}/>
// <path d="M354.9,207.8l125.2,74.1V0Z" style={{opacity:"0.44999998807907104",isolation:"isolate"}}/>
// <path d="M480.1,0V281.9l125.2-74.1Z" style={{opacity:"0.800000011920929",isolation:"isolate"}}/>
// <path d="M354.9,231.6,480.1,408V305.6Z" style={{opacity:"0.44999998807907104",isolation:"isolate"}}/>
// <path d="M480.1,305.6V408L605.4,231.6Z" style={{opacity:"0.800000011920929",isolation:"isolate"}}/>
// </g>
// </g>

// </svg>