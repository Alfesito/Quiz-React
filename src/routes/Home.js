import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export default function Home() {
  return (
    <main>
      <div className='home'>
      <h2>
        <FormattedMessage 
          id="app.home"
          defaultMessage="Inicio"
        />
      </h2>
      <FormattedMessage 
        id="app.welcome"
      />
      </div>
      <div className='imgContainer'>
      <img className='homeImg' src='https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft_image1600w.jpg'
          alt='none'/>
      </div>
    </main>
  );
}