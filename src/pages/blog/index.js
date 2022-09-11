import React, { useEffect, useState } from 'react'
import Carousel from './carousel'
import ReactLoading from 'react-loading'
// import CardBlog from '../../components/card-blog'
import CarouselBlog from './carousel-blog'
import { transformBlog, mobileVersion } from '../../utils/helpers'
import { get } from '../../api'

export default function Blog() {
  const [banner, setBanner] = useState()
  const [loading, setIsLoading] = useState(false)
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    async function fetchData() {
      //get banner
      get({
        endpoint: 'blog',
      })
        .then((res) => {
          if (res?.StatusCode === 200 && res?.Error === false)
            setBanner(transformBlog(res.Data))
          setIsLoading(false)
        })
        .catch((err) => {
          console.log('err ->', err)
          setIsLoading(false)
        })
    }
    fetchData()
  }, [])

  if (loading)
    return (
      <div
        className="container-xxl d-flex align-items-center justify-content-center"
        style={{ padding: '20px', marginBottom: '30px' }}
      >
        <ReactLoading type="spin" color="#00569c" />
      </div>
    )

  return (
    <React.Fragment>
      <Carousel data={banner && banner.main} />
      <div className="container-xxl py-0 bg-dark hero-header wow fadeInUp">
        <div className="container my-5 py-5 carousel-blog">
          <h2>Untuk Kamu</h2>
          <div className="row">
            <CarouselBlog data={banner && banner.list} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
