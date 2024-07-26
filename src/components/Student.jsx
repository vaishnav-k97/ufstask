import React from "react";
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png";
import bell from "../assets/bell.png";
import user from "../assets/User.png";
import { navItems } from "../constants";
import { students } from "../constants";

export default function Student() {
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
      <div className="container absolute mx-auto p-4 mt-60">
        <div className="flex justify-between items-center mb-4 bg-white px-3 py-3 rounded-md">
          <h2 className="text-xl font-semibold">1,200 Students</h2>
          <div className="flex space-x-2">
            <input type="text" placeholder="Search student..." className="p-2 border border-gray-300 rounded-full" />
            <select className="p-2 border border-gray-300 rounded-full">
              <option>All</option>
              <option>Assigned to</option>
            </select>
            <button className="text-blue-500 p-2 px-3 border border-blue-700 rounded-full">+ Add student</button>
            <button className="bg-blue-500 text-white py-2 px-3 rounded-full">Filter</button>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="">
              <th className="p-2 border-b">#</th>
              <th className="p-2 border-b">Enrolled</th>
              <th className="p-2 border-b">Follow Up on</th>
              <th className="p-2 border-b">Student</th>
              <th className="p-2 border-b">Mobile</th>
              <th className="p-2 border-b">Remark</th>
              <th className="p-2 border-b">Department</th>
              <th className="p-2 border-b">Status</th>
              <th className="p-2 border-b">Assigned to</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className=" border-b">{student.id}</td>
                <td className="p-2 border-b">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                </td> 
                <td className="p-2 border-b">{student.followUp}</td>
                <td className="p-2 border-b">{student.name}</td>
                <td className="p-2 border-b">{student.mobile}</td>
                <td className="p-2 border-b">{student.remark}</td>
                <td className="p-2 border-b">{student.department}</td>
                <td className="p-2 border-b">
                  <span
                    className={`p-1 rounded-md ${
                      student.status === 'Ready to Apply'
                        ? 'bg-orange-100 text-orange-600'
                        : student.status === 'Accepted'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-2 border-b">{student.assigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
