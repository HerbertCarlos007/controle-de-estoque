import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export const Carrossel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src="https://img.lojasrenner.com.br/banner/01-home/P01_240718_HOME_CARROSSEL_PREVIEW-PV_DESK_FEMININO.jpg"/>
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="https://abramark.com.br/wp-content/uploads/2022/12/bannernoticias-renner.png"/>
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="https://grandesnomesdapropaganda.com.br/wp-content/uploads/2020/12/Renner.jpg"/>
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbys-M56xGaFl7SohaDspYkj73AaZA77tq4Q&s"/>
        </div>
        {/* <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div> */}
      </div>
    </>
  )
}