import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export function FoodImageCarousel({ imageSrc, imageAlt, onPrev, onNext }) {
    return (
        <div className='dieciocheraCarouselImageWrapSty'>
            <button
                type='button'
                className='dieciocheraCarouselArrowSty dieciocheraCarouselArrowLeftSty'
                onClick={onPrev}
                aria-label='Alimento anterior'
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes='(max-width: 768px) 80vw, 320px'
                className='dieciocheraCarouselImageSty'
            />

            <button
                type='button'
                className='dieciocheraCarouselArrowSty dieciocheraCarouselArrowRightSty'
                onClick={onNext}
                aria-label='Siguiente alimento'
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}
