import React from "react";
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import logo from "../assets/logo.png";
import bell from "../assets/bell.png";
import user from "../assets/User.png";
import trendup from "../assets/TrendUp.png";
import profile from "../assets/profile.png";
import { navItems } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [1200, 1900, 3000, 5000, 2000, 3000, 4000, 3500, 3000, 5000, 4500, 6000],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(0,0,0)',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Revenue',
    },
  },
};

export default function Main() {
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto relative text-sm">
        <div className="relative min-h-[300px] bg-gradient-to-r from-gray-700 to-gray-800">
          <div className="flex justify-between items-center pt-10 px-5 relative z-10">
            <div className="flex items-center flex-shrink-0">
              <img className="h-6 w-6 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight text-white">Empire</span>
            </div>
            <div className="justify-center items-center hidden lg:flex">
              <img className="h-5 w-5 mr-2" src={bell} alt="bell" />
              <img className="h-4 w-4 mr-2" src={user} alt="user" />
              <a href="#" className="py-2 px- rounded-md text-white">
                Admin
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center pt-16 px-5 relative z-10">
            <div className="flex flex-col text-white">
              <h4>Welcome back, Johnson🖐️</h4>
              <h4>Dashboard</h4>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-4 text-neutral-100 ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-neutral-600 px-3 py-2 rounded-md"
                >
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute w-full mt-56">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 bt-10">
          <div className="bg-white rounded-md flex flex-col justify-between">
            <img className="h-10 w-10 mx-4 my-4" src={profile} alt="logo" />
            <div className="mx-4 mb-4">
              <h5>Total Added Student</h5>
              <div className="flex items-center justify-between">
                <h3 className="text-bold text-3xl">3200</h3>
                <div className="flex items-center ml-2 text-green-700 bg-green-200 rounded-full px-2">
                  <span>20%</span>
                  <img className="h-4 w-4 ml-1" src={trendup} alt="trendup" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md flex flex-col justify-between">
            <img className="h-10 w-10 mx-4 my-4" src={profile} alt="logo" />
            <div className="mx-4 mb-4">
              <h5>Total Added Student</h5>
              <div className="flex items-center justify-between">
                <h3 className="text-bold text-3xl">3200</h3>
                <div className="flex items-center ml-2 text-green-700 bg-green-200 rounded-full px-2">
                  <span>20%</span>
                  <img className="h-4 w-4 ml-1" src={trendup} alt="trendup" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md flex flex-col justify-between">
            <img className="h-10 w-10 mx-4 my-4" src={profile} alt="logo" />
            <div className="mx-4 mb-4">
              <h5>Total Added Student</h5>
              <div className="flex items-center justify-between">
                <h3 className="text-bold text-3xl">3200</h3>
                <div className="flex items-center ml-2 text-green-700 bg-green-200 rounded-full px-2">
                  <span>20%</span>
                  <img className="h-4 w-4 ml-1" src={trendup} alt="trendup" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md flex flex-col justify-between">
            <img className="h-10 w-10 mx-4 my-4" src={profile} alt="logo" />
            <div className="mx-4 mb-4">
              <h5>Total Added Student</h5>
              <div className="flex items-center justify-between">
                <h3 className="text-bold text-3xl">3200</h3>
                <div className="flex items-center ml-2 text-green-700 bg-green-200 rounded-full px-2">
                  <span>20%</span>
                  <img className="h-4 w-4 ml-1" src={trendup} alt="trendup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-neutral-200">
        <div className="container mx-auto p-6 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">
                Agency Revenue Summary
              </h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">₹5,424</span>
                <span className="ml-2 text-green-500 text-sm">▲ 1.3% VS last year</span>
                <div className="flex space-x-4 mb-6 bg-gray-100 rounded-full">
                  <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
                    Annually
                  </button>
                  <button className="text-gray-700 py-1 px-3 rounded-full">
                    Monthly
                  </button>
                  <button className="text-gray-700 py-1 px-3 rounded-full">
                    Weekly
                  </button>
                </div>
              </div>
              <div className="h-80">
                <Line data={lineData} options={options} />
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  Country Application Summary
                </h2>
                <div className="bg-gray-200 rounded-full px-4 py-2">Canada</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">6,345 Students</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>University of Toronto</span>
                  <span className="text-gray-500">36%</span>
                  <span className="text-gray-500">2,432 Students</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-neutral-900 rounded-full"
                    style={{ width: "36%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span>University of British Columbia (UBC)</span>
                  <span className="text-gray-500">24%</span>
                  <span className="text-gray-500">2,022 Students</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-neutral-900 rounded-full"
                    style={{ width: "24%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span>McGill University</span>
                  <span className="text-gray-500">22%</span>
                  <span className="text-gray-500">864 Students</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-neutral-900 rounded-full"
                    style={{ width: "22%" }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span>University of Alberta</span>
                  <span className="text-gray-500">18%</span>
                  <span className="text-gray-500">768 Students</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-neutral-900 rounded-full"
                    style={{ width: "18%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
