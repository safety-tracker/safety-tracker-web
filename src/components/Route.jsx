export default function Route({index, br, estado, cidade, routes, setRoutes}) {

    function remove() {
        setRoutes([...routes.slice(0, index), ...routes.slice(index + 1)]);
    }

    return (
        <div className="border-indigo-500 border-[1px] rounded-md w-full mt-4 mb-4">
            <div className="flex font-inter text-gray-700 font-medium p-2 justify-center">
                <p>{index + 1}</p>
                <p className="ml-32">BR-{br}</p>
                <p className="ml-32">{cidade}-{estado}</p>
                <div className="my-auto ml-32 hover:cursor-pointer" onClick={remove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
                </div>
            </div>
        </div>
    );
}