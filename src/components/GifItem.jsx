

export const GifItem = ({ title, url }) => {

    return (
        <>
            <div className="card p-0 col-3 mx-2 my-2">
                <img className="card-img-top" src={url} alt={title} />
                <div className="card-body">
                    <p className="card-text text-center">{title}</p>
                </div>
            </div>
        </>
    )
}
