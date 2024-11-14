import './index.scss';

import SpawnEffect from '../SpawnEffect';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      key: 'alipay',
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];


function Header() {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };

    return (
        <header>
            <h1><SpawnEffect>Hi, I'm Antoine Buirey</SpawnEffect></h1>
            <h2>I am a computer science student, currently in my third year of a BUT degree at the University Institute of Technology of Aix-Marseille, in France.</h2>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </header>
    );
}

export default Header;