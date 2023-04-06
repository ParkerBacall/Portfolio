import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import CustomImage from './CustomImage'
import React, { useState, useRef, useEffect } from 'react'


const AdaptiveHeight = (slider) => {
    function updateHeight() {
        slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight + "px"
    }
    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
}

export default function ImageSlideshow({ }) {

    const animation = { duration: 500, easing: (t) => t }

    const [pause, setPause] = useState(false)
    const timer = useRef()

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 2000,
        dragStart: () => {
          setPause(true)
        },
        dragEnd: () => {
          setPause(false)
        },
    }, [AdaptiveHeight])

    useEffect(() => {
        sliderRef?.current?.addEventListener("mouseover", () => {
          setPause(true)
        })
        sliderRef?.current?.addEventListener("mouseout", () => {
          setPause(false)
        })
      }, [sliderRef])

      useEffect(() => {
        timer.current = setInterval(() => {
          if (!pause && slider) {
            slider.current.moveToIdx(slider.current.track.details.abs + 1, true, animation)
          }
        }, 4000)
        return () => {
          clearInterval(timer.current)
        }
      }, [pause, slider])

    return (
        <div ref={sliderRef} className="keen-slider">

            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680743856/thisWillEND_axjmi6.png'
                title='This will end' />

            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680493838/meWithart_sdmybv.png'
                title='Artist with Carrion painting' />

            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680563695/FALLEN_szv0bn.png'
                title='Fallen Mural' />

            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680563697/SEPUKKU_bqqpo0.png'
                title='Seppuku Mural' />

            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680149030/final4_amutft.png'
                title='Skull Sqaure' />


            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680149027/flowerskull_eo9dbf.png'
                title='Skull Sqaure' />

            <CustomImage
                image='https://res.cloudinary.com/dpdnba5be/image/upload/v1680149032/totem_vkzr1y.png'
                title='Skull Sqaure' />
        </div>
    )
}
