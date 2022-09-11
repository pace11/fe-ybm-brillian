/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

/* eslint-disable array-callback-return */
export const shimmerImgLoader = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f2f2f2" offset="20%" />
      <stop stop-color="#d8d8d8" offset="50%" />
      <stop stop-color="#f2f2f2" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#d8d8d8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const monthIndonesia = (params) => {
  const val = Number(params)
  const month = {
    1: 'Januari',
    2: 'Februari',
    3: 'Maret',
    4: 'April',
    5: 'Mei',
    6: 'Juni',
    7: 'Juli',
    8: 'Agustus',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Desember',
  }

  return month[val]
}

export const dateIndonesia = (params) => {
  const first = new Date(params).toLocaleString();
  const split = first.split(',');
  const onlyDate = split[0];
  const transform = onlyDate.split('/');

  return `${transform[1]} ${monthIndonesia(transform[0])} ${transform[2]}`

}

export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const levelBreadcrumb = (params) => {
  const arr = []
  let path = ''
  const text = params
  const textArr = text.substring(1).split('/')
  textArr.map((item, idx) => {
    path = path.concat(`/${item}`)
    arr.push({
      text: item,
      path: path,
      class: `breadcrumb-item text-white ${
        idx === textArr.lengt - 1 ? 'active' : ''
      }`,
    })
  })
  return arr
}

export const mobileVersion = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return { ...screenSize }
}

export const transformNews = (data) => {
  const mainSidebar = data && data.filter((item) => item.name.toLowerCase() === "thumbnail")
  let tmp = []
  data && data.filter((item) => item.name.toLowerCase() !== "thumbnail").map((i) => {
    tmp = tmp.concat(i.berita)
  })
  return {
    main: mainSidebar.berita,
    sidebar: tmp.slice(0, 2),
    list: tmp.slice(2, 6),
    all: tmp,
  }
}

export const transformBlog = (data) => {
  return {
    main: data && data.slice(0, 8),
    list: data && data.slice(8, data.length),
  }
}
