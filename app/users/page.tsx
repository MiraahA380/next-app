import {sort} from 'fast-sort';
import Link from "next/link";


interface User {
    id: number;
    name: string;
    email: string;
    followers: number;
    isActive: boolean;
    registeredAt: string;
}

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
    const res = await fetch(
        'http://localhost:3000/api/users',
        {next: {revalidate: 20}}
    );

    const users: User[] = await res.json();

    if (users.length === 0) {
        return (<>
         No users found.
        </>);
    }

    const sortedUsers = sort(users).asc(
        sortOrder === 'email' ? user => user.email :
            user => user.name
    );

    return (<>
        <h1 className="font-extrabold py-2 text-3xl">Users</h1>
        <div>
            <Link href="/users/new" className="btn btn-primary rounded-md shadow-lg">Create</Link>
        </div>
        <div className="overflow-x-auto card shadow-lg flex justify-center">
            <table className="table table-zebra">
                <thead className="">
                <tr>
                    <th><Link href="/users?sortOrder=id">ID</Link></th>
                    <th><Link href="/users?sortOrder=name">Name</Link></th>
                    <th><Link href="/users?sortOrder=email">Email</Link></th>
                    <th><Link href="/users?sortOrder=email">Followers</Link></th>
                    <th><Link href="/users?sortOrder=email">isActive</Link></th>
                    <th><Link href="/users?sortOrder=email">Registered</Link></th>
                </tr>
                </thead>
                <tbody>
                {sortedUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.followers}</td>
                        <td>{user.isActive ? 'Yes' : 'No' }</td>
                        <td>{user.registeredAt}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>);
}

export default UsersPage;