import React from "react";
import Assignment from "./Assignment";

function Topbar() {
  return (
    <div className="basis-auto grow shrink ">
      <div className="bg-white flex items-center justify-between py-5  px-10 ">
        <div className="flex gap-4 text-sm md:text-base">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 5.92999L3.5 12L9.57 18.07"
              stroke="#9A9A9A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.4999 12H3.66992"
              stroke="#9A9A9A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>
            Assignment<span className="text-primaryblue">/ </span>Life cycle of
            frog
          </p>
        </div>
        <div className="flex  items-center gap-5 ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5583 2.66664C11.3 2.59164 11.0333 2.5333 10.7583 2.49997C9.95831 2.39997 9.19164 2.4583 8.47498 2.66664C8.71664 2.04997 9.31664 1.61664 10.0166 1.61664C10.7166 1.61664 11.3166 2.04997 11.5583 2.66664Z"
              stroke="#565659"
              stroke-width="1.25"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5167 15.8833C12.5167 17.2583 11.3917 18.3833 10.0167 18.3833C9.33339 18.3833 8.70006 18.1 8.25006 17.65C7.80006 17.2 7.51672 16.5667 7.51672 15.8833"
              stroke="#565659"
              stroke-width="1.25"
              stroke-miterlimit="10"
            />
            <path
              d="M13.8107 3.28021C12.8088 2.36192 11.4755 1.79993 10.0167 1.79993C6.91318 1.79993 4.39169 4.32142 4.39169 7.42493V9.83326C4.39169 10.0121 4.35121 10.2738 4.27383 10.5525C4.19669 10.8304 4.09673 11.0754 4.00548 11.2288L4.00484 11.2299L3.04792 12.8192C2.66372 13.4577 2.58345 14.1743 2.81912 14.8107C3.05451 15.4464 3.58097 15.9377 4.28298 16.1753L4.2853 16.1761C8.0052 17.4189 12.0189 17.419 15.7388 16.1764C17.129 15.7161 17.7322 14.0777 16.9776 12.82L16.0221 11.233C15.9329 11.0769 15.8349 10.831 15.759 10.5544C15.6822 10.2744 15.6417 10.0123 15.6417 9.83326V8.17276C15.1705 8.02064 14.7451 7.76646 14.3917 7.43628V9.83326C14.3917 10.1625 14.4595 10.5421 14.5535 10.885C14.6477 11.2286 14.7819 11.5848 14.942 11.8623L14.9479 11.8723L15.9058 13.4632C16.2505 14.0384 15.9711 14.783 15.3455 14.9898L15.3436 14.9905C11.8809 16.1474 8.1454 16.1475 4.68261 14.9909C4.30197 14.8617 4.08294 14.624 3.99134 14.3767C3.89993 14.1298 3.91141 13.8087 4.11879 13.464L5.07712 11.8723L5.07853 11.87C5.24544 11.59 5.38269 11.2313 5.47829 10.8869C5.57383 10.5427 5.64169 10.1627 5.64169 9.83326V7.42493C5.64169 5.01177 7.60353 3.04993 10.0167 3.04993C11.3512 3.04993 12.5518 3.65662 13.3562 4.60762C13.4127 4.12633 13.5716 3.67638 13.8107 3.28021Z"
              fill="#565659"
            />
            <path
              d="M16.2501 7.49998C17.4007 7.49998 18.3334 6.56724 18.3334 5.41665C18.3334 4.26605 17.4007 3.33331 16.2501 3.33331C15.0995 3.33331 14.1667 4.26605 14.1667 5.41665C14.1667 6.56724 15.0995 7.49998 16.2501 7.49998Z"
              fill="#EE222E"
              stroke="white"
              stroke-width="0.833333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <img
            src="https://th.bing.com/th/id/OIP.ZmIIA0WkR7-G-Y9tpE1ZKgHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7"
            className="h-10 w-10 rounded-[50%]"
          />
        </div>
      </div>
      <Assignment />
    </div>
  );
}

export default Topbar;
