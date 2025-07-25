import React from "react";
import { Layout } from "antd";
import MusicSidebar from "../MusicSidebar/MusicSidebar";
import MusicContent from "../MusicContent/MusicContent";
import "./MusicLayout.scss";

const { Sider, Content } = Layout;

export interface MusicLayoutProps {
  className?: string;
}

const MusicLayout: React.FC<MusicLayoutProps> = ({ className }) => {
  return (
    <div className={`music-layout ${className || ""}`}>
      <Layout className="music-layout__container">
        {/* Sidebar */}
        <Sider
          width={256}
          className="music-layout__sidebar"
          breakpoint="lg"
          collapsedWidth={0}
        >
          <MusicSidebar />
        </Sider>

        {/* Main Content */}
        <Content className="music-layout__content">
          <MusicContent />
        </Content>
      </Layout>
    </div>
  );
};

export default MusicLayout;
