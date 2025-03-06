"use client";
import React, { useState } from "react";

interface Tab {
  label: string;
  link: string;
}

interface TabSwitchProps {
  tabs: Tab[];
}

const TabSwitch: React.FC<TabSwitchProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.link);

  return (
    <nav className="w-full flex border-b overflow-x-auto">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.link}
          onClick={() => setActiveTab(tab.link)}
          className={`py-2 md:px-3 px-2 text-[#808080] text-sm md:text-lg font-extralight transition-all duration-300
            ${activeTab === tab.link ? "border-b-2 border-[#FF7F00] text-black font-semibold" : ""}
          `}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
};

export default TabSwitch;
