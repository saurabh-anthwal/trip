"use client";
import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabSwitchProps {
  tabs: Tab[];
}

const TabSwitch: React.FC<TabSwitchProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSwitch;
