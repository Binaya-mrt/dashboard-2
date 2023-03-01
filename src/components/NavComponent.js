import React from "react";
import Counterdiv from "./Counterdiv";

function NavComponent() {
  return (
    <div className="mt-10 mx-[5%] flex flex-col justify-between h-screen">
      <ul className="">
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 6.77773H12.6666C13.9999 6.77773 14.6666 6.11106 14.6666 4.77773V3.4444C14.6666 2.11106 13.9999 1.4444 12.6666 1.4444H11.3333C9.99992 1.4444 9.33325 2.11106 9.33325 3.4444V4.77773C9.33325 6.11106 9.99992 6.77773 11.3333 6.77773Z"
                  stroke="#EA526F"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33325 14.7777H4.66659C5.99992 14.7777 6.66659 14.1111 6.66659 12.7777V11.4444C6.66659 10.1111 5.99992 9.4444 4.66659 9.4444H3.33325C1.99992 9.4444 1.33325 10.1111 1.33325 11.4444V12.7777C1.33325 14.1111 1.99992 14.7777 3.33325 14.7777Z"
                  stroke="#8ABF8F"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.99992 6.77773C5.47268 6.77773 6.66659 5.58382 6.66659 4.11106C6.66659 2.6383 5.47268 1.4444 3.99992 1.4444C2.52716 1.4444 1.33325 2.6383 1.33325 4.11106C1.33325 5.58382 2.52716 6.77773 3.99992 6.77773Z"
                  stroke="#37B76C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9999 14.7777C13.4727 14.7777 14.6666 13.5838 14.6666 12.1111C14.6666 10.6383 13.4727 9.4444 11.9999 9.4444C10.5272 9.4444 9.33325 10.6383 9.33325 12.1111C9.33325 13.5838 10.5272 14.7777 11.9999 14.7777Z"
                  stroke="#37B76C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Dashboard</p>
            </div>
          </button>
        </li>
        <li className=" bg-primaryblue text-white rounded-md my-2 ">
          <button className>
            <div className="flex justify-start items-center gap-3 py-2 px-2 ">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.88443C11.96 4.87776 11.9133 4.87776 11.8733 4.88443C10.9533 4.8511 10.22 4.09776 10.22 3.16443C10.22 2.2111 10.9866 1.44443 11.94 1.44443C12.8933 1.44443 13.66 2.21776 13.66 3.16443C13.6533 4.09776 12.92 4.8511 12 4.88443Z"
                  stroke="white"
                  stroke-width="0.999996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3132 9.73781C12.2265 9.89114 13.2332 9.73114 13.9399 9.25781C14.8799 8.63114 14.8799 7.60447 13.9399 6.97781C13.2265 6.50447 12.2065 6.34447 11.2932 6.50447"
                  stroke="white"
                  stroke-width="0.999996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.97983 4.88446C4.01983 4.87779 4.06649 4.87779 4.10649 4.88446C5.02649 4.85113 5.75982 4.09779 5.75982 3.16446C5.75982 2.21113 4.99316 1.44446 4.03983 1.44446C3.08649 1.44446 2.31982 2.21779 2.31982 3.16446C2.32649 4.09779 3.05983 4.85113 3.97983 4.88446Z"
                  stroke="white"
                  stroke-width="0.999996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66663 9.73781C3.75329 9.89114 2.74663 9.73114 2.03996 9.25781C1.09996 8.63114 1.09996 7.60447 2.03996 6.97781C2.75329 6.50447 3.77329 6.34447 4.68663 6.50447"
                  stroke="white"
                  stroke-width="0.999996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99997 9.86444C7.95997 9.85777 7.9133 9.85777 7.8733 9.86444C6.9533 9.83111 6.21997 9.07777 6.21997 8.14444C6.21997 7.19111 6.98664 6.42444 7.93997 6.42444C8.8933 6.42444 9.65997 7.19777 9.65997 8.14444C9.6533 9.07777 8.91997 9.83777 7.99997 9.86444Z"
                  stroke="white"
                  stroke-width="0.999996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.05998 11.9644C5.11998 12.5911 5.11998 13.6178 6.05998 14.2444C7.12665 14.9578 8.87331 14.9578 9.93998 14.2444C10.88 13.6178 10.88 12.5911 9.93998 11.9644C8.87998 11.2578 7.12665 11.2578 6.05998 11.9644Z"
                  stroke="white"
                  stroke-width="0.999996"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Classes</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00009 8.11112C9.84105 8.11112 11.3334 6.61873 11.3334 4.77777C11.3334 2.93682 9.84105 1.44443 8.00009 1.44443C6.15914 1.44443 4.66675 2.93682 4.66675 4.77777C4.66675 6.61873 6.15914 8.11112 8.00009 8.11112Z"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.27344 14.7778C2.27344 12.1978 4.84011 10.1111 8.00012 10.1111C8.64013 10.1111 9.26013 10.1978 9.84014 10.3578"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6666 12.1111C14.6666 12.3245 14.6399 12.5311 14.5866 12.7311C14.5266 12.9978 14.4199 13.2578 14.2799 13.4845C13.8199 14.2578 12.9733 14.7778 11.9999 14.7778C11.3133 14.7778 10.6933 14.5178 10.2266 14.0911C10.0266 13.9178 9.85325 13.7111 9.71991 13.4845C9.47324 13.0845 9.33325 12.6111 9.33325 12.1111C9.33325 11.3911 9.61992 10.7311 10.0866 10.2511C10.5733 9.75114 11.2533 9.44446 11.9999 9.44446C12.7866 9.44446 13.4999 9.78447 13.9799 10.3311C14.4066 10.8045 14.6666 11.4311 14.6666 12.1111Z"
                  stroke="#37B76C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9935 12.0978H11.0068"
                  stroke="#37B76C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0002 11.1245V13.1178"
                  stroke="#37B76C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Attendance</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6668 8.77776V6.11109C14.6668 2.77776 13.3335 1.44443 10.0002 1.44443H6.00016C2.66683 1.44443 1.3335 2.77776 1.3335 6.11109V10.1111C1.3335 13.4444 2.66683 14.7778 6.00016 14.7778H8.66683"
                  stroke="#30323D"
                  stroke-width="0.971427"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.88672 9.77109L6.47339 7.71108C6.70006 7.41775 7.12006 7.36442 7.41339 7.59108L8.6334 8.55109C8.92674 8.77775 9.34672 8.72442 9.57339 8.43775L11.1134 6.45108"
                  stroke="#30323D"
                  stroke-width="0.971427"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9867 10.6578L13.1733 11.0378C13.2666 11.2244 13.5 11.3978 13.7066 11.4378L13.96 11.4778C14.72 11.6044 14.9 12.1644 14.3533 12.7178L14.12 12.9511C13.9666 13.1111 13.88 13.4178 13.9267 13.6311L13.96 13.7711C14.1666 14.6911 13.68 15.0444 12.88 14.5644L12.7066 14.4644C12.5 14.3444 12.1666 14.3444 11.96 14.4644L11.7866 14.5644C10.98 15.0511 10.4933 14.6911 10.7066 13.7711L10.74 13.6311C10.7866 13.4178 10.7 13.1111 10.5466 12.9511L10.3133 12.7178C9.76664 12.1644 9.94664 11.6044 10.7066 11.4778L10.96 11.4378C11.16 11.4044 11.4 11.2244 11.4933 11.0378L11.68 10.6578C12.04 9.9311 12.6267 9.9311 12.9867 10.6578Z"
                  stroke="#37B76C"
                  stroke-width="0.971427"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Test</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.93341 11.4444H12.0601C13.3267 11.4444 13.9934 10.7777 13.9934 9.51108V1.44441H1.99341V9.51108C2.00007 10.7777 2.66674 11.4444 3.93341 11.4444Z"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.33325 1.44441H14.6666"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33325 14.7778L7.99992 13.4444V11.4444"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 14.7778L8 13.4444"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 7.44441L7.1 5.69108C7.26666 5.55108 7.48666 5.59108 7.6 5.77775L8.4 7.11108C8.51334 7.29775 8.73334 7.33108 8.9 7.19775L11 5.44441"
                  stroke="#EA526F"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Reports</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0533 5.83113V10.3911C14.0533 11.1378 13.6533 11.8312 13.0067 12.2112L9.04663 14.4978C8.39997 14.8712 7.59996 14.8712 6.94663 14.4978L2.98661 12.2112C2.33994 11.8378 1.93994 11.1445 1.93994 10.3911V5.83113C1.93994 5.08446 2.33994 4.39109 2.98661 4.01109L6.94663 1.72442C7.5933 1.35109 8.3933 1.35109 9.04663 1.72442L13.0067 4.01109C13.6533 4.39109 14.0533 5.07779 14.0533 5.83113Z"
                  stroke="#30323D"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99987 7.44444C8.85776 7.44444 9.55321 6.74898 9.55321 5.89109C9.55321 5.03321 8.85776 4.33778 7.99987 4.33778C7.14199 4.33778 6.44653 5.03321 6.44653 5.89109C6.44653 6.74898 7.14199 7.44444 7.99987 7.44444Z"
                  stroke="#EA526F"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6666 11.2178C10.6666 10.0178 9.47327 9.04446 7.99993 9.04446C6.52659 9.04446 5.33325 10.0178 5.33325 11.2178"
                  stroke="#30323D"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Discipline</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 12.3978H8.66658L5.69991 14.3711C5.25991 14.6644 4.66659 14.3511 4.66659 13.8178V12.3978C2.66659 12.3978 1.33325 11.0645 1.33325 9.06445V5.06441C1.33325 3.06441 2.66659 1.73108 4.66659 1.73108H11.3333C13.3333 1.73108 14.6666 3.06441 14.6666 5.06441V9.06445C14.6666 11.0645 13.3333 12.3978 11.3333 12.3978Z"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99996 7.68441V7.54443C7.99996 7.0911 8.27998 6.85109 8.55998 6.65776C8.83331 6.47109 9.10661 6.2311 9.10661 5.7911C9.10661 5.17776 8.61329 4.68441 7.99996 4.68441C7.38663 4.68441 6.89331 5.17776 6.89331 5.7911"
                  stroke="#2BB8D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99708 9.27775H8.00308"
                  stroke="#2BB8D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Doubts</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6666 6.77778V8.77778C14.6666 11.4445 13.3333 12.7778 10.6666 12.7778H10.3333C10.1266 12.7778 9.92662 12.8778 9.79995 13.0445L8.79995 14.3778C8.35995 14.9645 7.63994 14.9645 7.19994 14.3778L6.19994 13.0445C6.09327 12.8978 5.8466 12.7778 5.6666 12.7778H5.33327C2.66659 12.7778 1.33325 12.1111 1.33325 8.77778V5.44444C1.33325 2.77776 2.66659 1.44442 5.33327 1.44442H9.33328"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0002 4.77777C13.9206 4.77777 14.6668 4.03157 14.6668 3.11109C14.6668 2.19062 13.9206 1.44442 13.0002 1.44442C12.0797 1.44442 11.3335 2.19062 11.3335 3.11109C11.3335 4.03157 12.0797 4.77777 13.0002 4.77777Z"
                  fill="#EA526F"
                  stroke="#EA526F"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6644 7.44445H10.6704"
                  stroke="#37B76C"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99691 7.44445H8.0029"
                  stroke="#2BB8D6"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.32967 7.44445H5.33566"
                  stroke="#FECA55"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Messages</p>
              <Counterdiv count={3} />
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3335 1.44449V3.4445"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 1.44449V3.4445"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.3335 6.17107H13.6669"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 5.77783V11.4445C14 13.4445 13 14.7779 10.6667 14.7779H5.33335C3 14.7779 2 13.4445 2 11.4445V5.77783C2 3.77783 3 2.44449 5.33335 2.44449H10.6667C13 2.44449 14 3.77783 14 5.77783Z"
                  stroke="#30323D"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99715 9.24445H8.00314"
                  stroke="#37B76C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.52938 9.24445H5.53537"
                  stroke="#EA526F"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.52938 11.2445H5.53537"
                  stroke="#FECA55"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Schedule</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 5.44444C13.7713 5.44444 14.6668 4.54901 14.6668 3.44444C14.6668 2.33986 13.7713 1.44443 12.6668 1.44443C11.5622 1.44443 10.6667 2.33986 10.6667 3.44444C10.6667 4.54901 11.5622 5.44444 12.6668 5.44444Z"
                  stroke="#37B76C"
                  stroke-width="1.21428"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66675 8.77779H8.00009"
                  stroke="#30323D"
                  stroke-width="1.21428"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66675 11.4445H10.6668"
                  stroke="#30323D"
                  stroke-width="1.21428"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33328 1.44443H5.99994C2.66659 1.44443 1.33325 2.77777 1.33325 6.11111V10.1111C1.33325 13.4445 2.66659 14.7778 5.99994 14.7778H9.99995C13.3333 14.7778 14.6666 13.4445 14.6666 10.1111V6.77778"
                  stroke="#30323D"
                  stroke-width="1.21428"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Notify</p>
            </div>
          </button>
        </li>
      </ul>
      <ul>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99992 14.6667H9.99992C13.3333 14.6667 14.6666 13.3333 14.6666 10V6.00001C14.6666 2.66668 13.3333 1.33334 9.99992 1.33334H5.99992C2.66659 1.33334 1.33325 2.66668 1.33325 6.00001V10C1.33325 13.3333 2.66659 14.6667 5.99992 14.6667Z"
                  stroke="#30323D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3799 12.3333V9.73331"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3799 4.96666V3.66666"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3801 8.43334C11.3374 8.43334 12.1134 7.6573 12.1134 6.70001C12.1134 5.74271 11.3374 4.96667 10.3801 4.96667C9.42277 4.96667 8.64673 5.74271 8.64673 6.70001C8.64673 7.6573 9.42277 8.43334 10.3801 8.43334Z"
                  stroke="#EA526F"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.62012 12.3333V11.0333"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.62012 6.26666V3.66666"
                  stroke="#30323D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.62005 11.0333C6.57735 11.0333 7.35338 10.2573 7.35338 9.29998C7.35338 8.34269 6.57735 7.56665 5.62005 7.56665C4.66276 7.56665 3.88672 8.34269 3.88672 9.29998C3.88672 10.2573 4.66276 11.0333 5.62005 11.0333Z"
                  stroke="#37B76C"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Setting</p>
              <Counterdiv count={3} />
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6M6 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.7157 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H6"
                  stroke="#30323D"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 7.99999H14M14 7.99999L10.6667 4.66666M14 7.99999L10.6667 11.3333"
                  stroke="#EA526F"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Logout</p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavComponent;
