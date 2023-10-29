import Image from "next/image"

export const CardPorto = (props) => {
    return <div className="border-2 rounded-md cursor-pointer border-gray-400 border-dotted">
        <a className="relative h-10">
            <span
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                }}
            >
                <span
                    style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "75% 0px 0px",
                    }}
                ></span>
                <Image
                    alt={props.name}
                    src={props.image_url ?? '/no_image.png'}
                    decoding="async"
                    data-nimg="responsive"
                    className="rounded-md"
                    width={0}
                    height={0}
                    style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                    sizes="100vw"
                    srcSet={props.image_url ?? '/no_image.png'}
                />
            </span>
            <div className="p-3">
                <h5 className="font-semibold xl:text-base xl:mb-2 text-sm ">
                    {props.name}
                </h5>
                <span className="text-gray-400 font-medium xl:text-sm text-xs">
                    {props.category}
                </span>
            </div>
        </a>
    </div>
}