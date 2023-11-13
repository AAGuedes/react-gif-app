import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className='text-center mt-5 mb-3'>{category}</h3>

            <div className='d-flex row d-flex justify-content-evenly'>
                {
                    isLoading && (
                        <div className="d-flex justify-center spinner-border m-5" role="status" />
                    )
                }
                {
                    !isLoading && images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
