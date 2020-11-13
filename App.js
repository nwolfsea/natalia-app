import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {

const [collapsed, setCollapsed] = useState(false)
  
const onCollapse = collapsed => setCollapsed(collapsed);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Ativos
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
              

              
            <ol>
              <li>Bomba Hidráulica CXS7-369</li>
              <li>CAER 3X13</li>
              <li>Bomba usada para alimentar a saída do recirculador</li>
              <li>Servo Motor #SM354</li>
              <li>Primeiro passo da fragmentação de carga</li>
              <li>Motor de brita 1 para início de produção</li>
              <li>Servo Motor #SM359</li>
              <li>SM0 SM7894h3</li>
              <li>Motor para elevar carga</li>
              <li>Motor da britadeira 72</li>
              </ol>  

            
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Natália </Footer>
        </Layout>
      </Layout>
    );
  }
  
  
        

export default App;
        