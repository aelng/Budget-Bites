import { IconCheck } from "@tabler/icons-react";

const Success = () => {
    return <div className="page flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-green-700 flex justify-center items-center">
                <IconCheck color="white" />
            </div>
            <h1 className="text-[4rem] font-bold">Success!</h1>
        </div>
        <p>Thanks for purchasing!</p>
    </div>
}

export default Success;