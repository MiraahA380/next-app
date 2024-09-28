interface Props {
    params: {
        id: number;
    }
}

const User = ({params: {id}}: Props) => {
    return (<>
        <div>
            <h1>User {id} </h1>
        </div>
    </>);
}

export default User;