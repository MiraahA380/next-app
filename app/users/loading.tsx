const Loading = () => {
    return (
        <>
            <div className="h-screen items-center justify-center">
                <div>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                </div>
            </div>
        </>
    );
}

export default Loading;