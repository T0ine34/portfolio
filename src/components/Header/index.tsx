import './index.scss';

import SpawnEffect from '../SpawnEffect';
import { PageContext } from '../../context';
import React, { useContext } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faListCheck, faSailboat } from '@fortawesome/free-solid-svg-icons';

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'home',
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        label: 'My projects',
        key: 'projects',
        icon: <FontAwesomeIcon icon={faListCheck} />,
        // children: [
        //     {
        //         label: 'Personal projects',
        //         key: 'personal',
        //     },
        //     {
        //         label: 'School projects',
        //         key: 'school',
        //     },
        // ],
    },
    {
        label: 'Sailing',
        key: 'sailing',
        icon: <FontAwesomeIcon icon={faSailboat} />
    }
];


function Header() {
    const { current, setCurrent } = useContext(PageContext);

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