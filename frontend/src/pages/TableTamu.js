import Sidebar from "components/Sidebar";
import TableTamu from "components/Table/TableTamu"

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-60">
                <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">

                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-8 h-auto -mt-24">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 px-4 mb-16">
                            <TableTamu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
