export default {
  white: '#FFF',
  lighter: '#EEE',
  light: '#DDD',
  lightsmaller: '#e7e7e7',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  darkness: '#222',
  black: '#000',

  primary: '#7A91CA',
  dodgerBlue: '#1E90FF',
  secundary: '#444A54',
  success: '#9DCA83',
  danger: '#E37A7A',

  tranparent: 'transparent',
  darknesTransparent: 'rgba(0,0,0,0.3)',
  darkTransparent: 'rgba(0,0,0,0.6)',
  boxShadownTransparent: 'rgba(0, 0, 0, 0.1)',
  boxShadownBlueTransparent: 'rgba(12,43,99,0.2)',
  whiteTransparent: 'rgba(255,255,255,0.3)',

  pickerOne: '#0A4237',
  pickerTwo: '#4B9586',
  pickericon: '#8C8C8C',
  random: () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
};
