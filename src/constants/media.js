/** Public asset paths — encode paths that contain spaces */
const enc = (path) => encodeURI(path)

const hardBase = '/art/hardscaping'
const pressureDir = enc('/art/pressure washing images')

export const MEDIA = {
  logo: '/logo.png',
  jakubVertical: enc('/jakub vertical shot.jpg'),
  hardscaping: [
    `${hardBase}/AdobeStock_1883176600.jpeg`,
    `${hardBase}/AdobeStock_299849827.jpeg`,
    `${hardBase}/AdobeStock_837507389.jpeg`,
  ],
  landscaping: [
    enc('/art/landscaping images/38BC2B67-4E32-4B07-8463-49739157D497.JPG'),
    enc('/art/landscaping images/2EEBEA75-DC0B-4BB8-AACE-743B2B627DF0.JPG'),
    enc('/art/landscaping images/edging.JPG'),
  ],
  pressureWashing: [
    `${pressureDir}/AdobeStock_635024548.jpeg`,
    '/art/drivegall/IMG_8097.JPG',
    '/art/photos/848EC813-2A31-45E3-88D1-9CC272B9C4E6.JPG',
  ],
  outdoorLiving: ['/art/photos/B2ADB32A-7D89-42D7-83F5-778C091DEC53.JPG', '/art/photos/fpsss.png'],
  gallery: [
    { id: '1', img: '/art/drivegall/IMG_8097.JPG', height: 420 },
    { id: '2', img: '/art/drivegall/IMG_8044.jpg', height: 760 },
    { id: '3', img: enc('/art/landscaping images/38BC2B67-4E32-4B07-8463-49739157D497.JPG'), height: 460 },
    { id: '4', img: '/art/drivegall/IMG_8235.JPG', height: 440 },
    { id: '5', img: enc('/art/landscaping images/2EEBEA75-DC0B-4BB8-AACE-743B2B627DF0.JPG'), height: 360 },
    { id: '6', img: '/art/drivegall/IMG_8110.jpg', height: 580 },
    { id: '7', img: `${hardBase}/AdobeStock_299849827.jpeg`, height: 500 },
    { id: '8', img: `${pressureDir}/AdobeStock_635024548.jpeg`, height: 400 },
  ],
  team: {
    jakub: '/aboutpage/jakub.jpg',
    karol: '/aboutpage/karol.jpeg',
  },
  signatures: {
    jakub: '/art/sigs/j.png',
    karol: '/art/sigs/k.png',
  },
}
