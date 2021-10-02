import React, { Dispatch } from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track, Tick } from '@/components/SliderComponents';

interface ILocalSlider {
  sliderValue: readonly number[];
  setSliderValue: Dispatch<React.SetStateAction<readonly number[]>>;
  domain: number[];
}

const LocalSlider = ({ sliderValue, setSliderValue, domain }: ILocalSlider) => {
  const sliderStyle: React.CSSProperties = {
    margin: '5% 1%',
    position: 'relative',
    width: '98%',
  };

  const railStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: 14,
    borderRadius: 7,
    cursor: 'pointer',
    backgroundColor: 'rgb(155,155,155)',
  };

  const onChange = (values: readonly number[]) => {
    console.log(values);
    setSliderValue(values);
  };

  return (
    <Slider
      mode={1}
      step={1}
      domain={domain}
      rootStyle={sliderStyle}
      onChange={onChange}
      values={sliderValue}
    >
      <Rail>
        {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map((handle) => (
              <Handle
                key={handle.id}
                handle={handle}
                domain={domain}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
      <Ticks count={10}>
        {({ ticks }) => (
          <div className="slider-ticks">
            {ticks.map((tick) => (
              <Tick key={tick.id} tick={tick} count={ticks.length} />
            ))}
          </div>
        )}
      </Ticks>
    </Slider>
  );
};

export default LocalSlider;
