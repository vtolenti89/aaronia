import React from 'react';
import './header.scss';

interface HeaderProps {

}

const links = [
    {
        url: 'bandbreite',
        label: 'Bandbreite'
    },
    {
        url: 'geschwindigkeit',
        label: 'Geschwindigkeit',
    },
    {
        url: 'poi',
        label: 'POI',
    },
    {
        url: 'recordnreplay',
        label: 'Record & Replay',
    }
]

const Header: React.FC<HeaderProps> = () => {

    return (
        <div className={'c-header'}>
            <div className={'c-header__inner container'}>
                {links.map((link, index) => {
                    return <a href={link.url}>{link.label}</a>
                })}
            </div>
        </div>
    )
}

export default Header;