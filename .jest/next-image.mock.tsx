import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props: { [x: string]: any; objectFit: any }) => {
    const { objectFit, ...rest} = props
    return <img {...rest} />
  }
})
