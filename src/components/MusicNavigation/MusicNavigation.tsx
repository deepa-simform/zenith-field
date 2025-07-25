import React, { useState } from "react";
import { Button, Typography } from "antd";
import "./MusicNavigation.scss";

const { Text } = Typography;

export interface MusicNavigationProps {
  className?: string;
}

const MusicNavigation: React.FC<MusicNavigationProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { key: "tab1", label: "Tab" },
    { key: "tab2", label: "Tab" },
    { key: "tab3", label: "Tab" },
  ];

  return (
    <div className={`music-navigation ${className || ""}`}>
      {/* Segmented Control */}
      <div className="music-navigation__segmented">
        <div className="music-navigation__tab-container">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`music-navigation__tab ${
                activeTab === tab.key ? "music-navigation__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              <Text className="music-navigation__tab-text">{tab.label}</Text>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <Button type="primary" size="large" className="music-navigation__cta">
        Call to action
      </Button>
    </div>
  );
};

export default MusicNavigation;
