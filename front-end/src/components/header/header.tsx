import React from 'react';
import './header.scss';

interface HeaderProps {

}

const links = [
    {
        url: 'configurator',
        label: 'Konfigurator',
    }
]

const Header: React.FC<HeaderProps> = () => {

    return (
        <div className={'c-header'}>
            <div className={'c-header__inner container'}>
                <a href={"/"}>
                    <img src="/assets/images/logo.png" alt="" />
                </a>
                {links.map((link, index) => {
                    return <a key={index} href={link.url}>{link.label}</a>
                })}
            </div>
        </div>
    )
}

export default Header;