interface Props {
    params: { slug: string[] }
}

const Product = ({params: {slug}}: Props) => {
    return (<>
        <h1>{slug}</h1>
    </>)
}
export default Product