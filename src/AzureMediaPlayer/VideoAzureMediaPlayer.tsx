import { useEffect, useRef } from 'react';
import { Box } from 'grommet';
import { ICustomWindowWithAMP } from '../Interfaces/ICustomWindow';

export interface VideoAzureMediaPlayerProps {
  videoUrl: string;
  videoGuid: string;
  videoToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: ICustomWindowWithAMP<any>;

const VideoAzureMediaPlayer = (props: VideoAzureMediaPlayerProps): JSX.Element => {
  const {
    videoUrl, videoToken,
  } = props;

  const videoAMPRef = useRef<HTMLVideoElement>(null);

  // @ts-expect-error tsconfig ignoring the ./Types folder
  const playerOptions: amp.Player.Options = {
    autoplay: false,
    controls: true,
    width: "640",
    height: "400",
    playbackSpeed: {
      enabled: true,
      initialSpeed: 1.0,
      speedLevels: [
        { name: 'x4.0', value: 4.0 },
        { name: 'x3.0', value: 3.0 },
        { name: 'x2.0', value: 2.0 },
        { name: 'x1.75', value: 1.75 },
        { name: 'x1.5', value: 1.5 },
        { name: 'x1.25', value: 1.25 },
        { name: 'normal', value: 1.0 },
        { name: 'x0.75', value: 0.75 },
        { name: 'x0.5', value: 0.5 },
      ],
    },
    logo: {
      enabled: false,
    },
  };

  const setPlayer = (): void => {
    const playerElement = videoAMPRef.current;

    const myPlayer = window.amp(
      playerElement, playerOptions,
    );

    myPlayer.src([{
      src: videoUrl,
      type: 'application/vnd.ms-sstr+xml',
      protectionInfo: [{
        type: 'AES',
        authenticationToken: videoToken,
      }],
    }],
    );

    console.log('Player activated');

    // myPlayer.addEventListener('click', onPause);
    // myPlayer.addEventListener('durationchange', durationChange);
    // myPlayer.addEventListener('timeupdate', onProgress);

    // onPause();
    // setPlaying(!myPlayer.paused());
  };

  useEffect(() => {
    setPlayer();
  }, []);

  return (
    <Box fill>
      <video
        id="videoAMP"
        ref={videoAMPRef}
        className="azuremediaplayer amp-big-play-centered amp-default-skin"
      />
    </Box>
  );
};

VideoAzureMediaPlayer.displayName = 'VideoAzureMediaPlayer';

export default VideoAzureMediaPlayer;
