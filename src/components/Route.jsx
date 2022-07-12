export default function Route({index, br, estado, cidade}) {
    return (
        <div className="border-indigo-500 border-[1px] rounded-md w-full mt-4 mb-4">
            <div className="flex font-inter text-gray-800 font-medium p-2 px-4 justify-center">
                <p>{index + 1}</p>
                <p className="ml-32">BR-{br}</p>
                <p className="ml-32">{cidade}-{estado}</p>
            </div>
        </div>
    );
}