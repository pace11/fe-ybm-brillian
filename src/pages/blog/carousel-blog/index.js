import React from 'react'
import Slider from 'react-slick'
import CardBlog from '../../../components/card-blog'

export default function CarouselNews({ data, isMobile }) {
  const settings = {
    // dots: true,
    autoplay: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    arrows: true,
  }

  if (data && data.length === 0) return null

  if (data && data.length <= 3 && !isMobile) {
    return (
      <React.Fragment>
        {data &&
          data.map((item, idx) => (
            <div key={String(idx)} className="col-lg-3 col-md-3">
              <CardBlog
                linkTo={`blog/${item.id}`}
                imageSrc={`${process.env.REACT_APP_IMAGE_BLOG}/${item.image}`}
                imageHeight="250px"
                title={item.name}
                label={`${new Date(item.created_at).toDateString()}, ${
                  item?.blog_type?.name
                }`}
              />
            </div>
          ))}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Slider {...settings} className="carousel-list-blog">
        {data &&
          data.map((item, idx) => (
            <div key={String(idx)}>
              <div className="col-lg-12 col-md-12" style={{ padding: '5px' }}>
                <CardBlog
                  linkTo={`blog/${item.id}`}
                  imageSrc={`${process.env.REACT_APP_IMAGE_BLOG}/${item.image}`}
                  imageHeight="250px"
                  title={item.name}
                  label={item.blog_type?.name || 'blog'}
                />
              </div>
            </div>
          ))}
      </Slider>
      <style>
        {`
          .carousel-list-blog button.slick-prev {
            background: rgb(242, 102, 36, 0.7) !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            width: 40px;
            height: 40px;
            z-index: 1;
            left: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-list-blog button.slick-prev:before {
            content: "";
            border: solid #fff;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 5px;
            margin-left: 6px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }

          .carousel-list-blog button.slick-next {
            background: rgb(242, 102, 36, 0.7) !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            width: 40px;
            height: 40px;
            z-index: 1;
            right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-list-blog button.slick-next:before {
            content: "";
            border: solid #fff;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 5px;
            margin-right: 6px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
          }
        `}
      </style>
    </React.Fragment>
  )
}
