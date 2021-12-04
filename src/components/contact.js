import React from "react";
import { RiDiscordFill, RiSpotifyFill, RiTelegramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';
import { SiMatrix } from 'react-icons/si';
import { IconContext } from "react-icons/lib";

import './styles/contact.css';

export default function ContactMe() {
  return (
    <div className={'contact-wrapper'}>
      <div className={'wrapper'}>
        <a href={'https://twitter.com/pfx3l'} className={'contact-item'}>
          <div className={'contact-item twitter'} >
            <IconContext.Provider value={{ className: "icons" }}>
              <RiTwitterFill />
            </IconContext.Provider>
          </div>
        </a>
        <a href={'t.me/pfxel'} className={'contact-item'}>
          <div className={'contact-item telegram'}>
            <IconContext.Provider value={{ className: "icons" }}>
              <RiTelegramFill />
            </IconContext.Provider>
          </div>
        </a>
        <a href={'https://www.youtube.com/channel/UCSV3PpQj_cY3wqax2ZTCEXg'} className={'contact-item'}>
          <div className={'contact-item youtube'}>
            <IconContext.Provider value={{ className: "icons" }}>
              <RiYoutubeFill />
            </IconContext.Provider>
          </div>
        </a>
        <a href={'https://open.spotify.com/user/2v2c27dai96ppan44vovc1ym2'} className={'contact-item'}>
          <div className={'contact-item spotify'}>
            <IconContext.Provider value={{ className: "icons" }}>
              <RiSpotifyFill />
            </IconContext.Provider>
          </div>
        </a>
        <a href={'https://discordapp.com/users/comav#3248'} className={'contact-item'}>
          <div className={'contact-item discord'}>
            <IconContext.Provider value={{ className: "icons" }}>
              <RiDiscordFill />
            </IconContext.Provider>
          </div>
        </a>
        <a href={'https://matrix.to/#/@pfxel:matrix.org'} className={'contact-item'}>
          <div className={'contact-item matrix'}>
            <IconContext.Provider value={{ className: "icons" }}>
              <SiMatrix />
            </IconContext.Provider>
          </div>
        </a>
      </div>
    </div>
  )
}