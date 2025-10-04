import React from 'react';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const palette: Record<string, { bg: string; text: string }> = {
  cat: { bg: '#FFB4AB', text: '#3F1C16' },
  hat: { bg: '#D8E2FF', text: '#102A60' },
  dog: { bg: '#FFD8A9', text: '#4A2800' },
  car: { bg: '#B5F2E2', text: '#084236' },
  bug: { bg: '#FEE7B8', text: '#3A2502' },
  rug: { bg: '#C8F0FF', text: '#063549' },
  pin: { bg: '#E5D6FF', text: '#2F1165' },
  fin: { bg: '#BEE6FF', text: '#042A48' },
  sun: { bg: '#FFE082', text: '#4F2A00' },
  run: { bg: '#FFD0DD', text: '#4C0F24' },
  man: { bg: '#F7C6A0', text: '#3D1B00' },
  pan: { bg: '#CFE9B4', text: '#233713' }
};

const fallback = { bg: '#E6E1F5', text: '#2C1D4E' };

type Props = {
  word: string;
  size?: number;
};

const WordBadge: React.FC<Props> = ({ word, size = 96 }) => {
  const { bg, text } = palette[word.toLowerCase()] ?? fallback;
  return (
    <Svg height={size} width={size} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="48" fill={bg} />
      <SvgText
        fill={text}
        fontSize="28"
        fontWeight="700"
        x="50"
        y="58"
        textAnchor="middle"
      >
        {word}
      </SvgText>
    </Svg>
  );
};

export default WordBadge;
