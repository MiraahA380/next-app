export default function UserForm() {


    return <>
        <div className="flex items-center justify-center min-h-screen">

            <form action="" className="card bg-base-100 w-96 shadow-xl p-10">
                <div className="text-center font-bold text-2xl">
                    <h1>Create User</h1>
                </div>
                <div>
                    <label htmlFor="name" className="block">Name</label>
                    <input type="text" name="name" placeholder="Name" required
                           className="input w-full max-w-xs rounded-md"/>

                </div>
                <div>
                    <label htmlFor="email" className="block">Email</label>
                    <input type="text" name="email" placeholder="email" required
                           className="input w-full max-w-xs rounded-md"/>

                </div>
                <div>
                    <button className="btn btn-secondary text-white btn-block shadow mt-4 rounded">Create</button>
                </div>
            </form>
        </div>
    </>
}