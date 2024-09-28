interface Props {
    params: {
        id: number;
        photoId: number;
    }
}

const Photo = ({params: {id, photoId}}: Props) => {
    return (<>
        Photo {id} &apos;s photo {photoId}
    </>);
}

export default Photo;