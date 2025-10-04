export const palette = {
  background: '#f8f5ff',
  card: '#ffffff',
  cardBorder: '#ece8ff',
  primary: '#4a34a5',
  primaryText: '#2c1d4e',
  secondaryText: '#5b4f7d',
  bodyText: '#3f3356',
  shadow: '#000000',
  success: '#4cc38a',
  transparent: 'transparent',
  white: '#ffffff'
} as const;

export const shadowStyles = {
  shadowColor: palette.shadow,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.08,
  shadowRadius: 12,
  elevation: 6
};
