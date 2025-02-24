"use client";
import React from "react";

interface Tab {
  label: string;
  link: string;
}

interface TabSwitchProps {
  tabs: Tab[];
}

const TabSwitch: React.FC<TabSwitchProps> = ({ tabs }) => {
  return (
    <nav className="w-full flex border-b overflow-x-auto">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.link} 
          className="py-2 px-3 text-gray-600 hover:text-blue-500 text-sm md:text-lg"
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
};

export default TabSwitch;