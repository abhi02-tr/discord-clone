import { NavigationSidebar } from "@/components/navigation/navigatiob-sidebar";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[120px] z-30 flex-col fixed inset-y-0">
                <NavigationSidebar />
            </div>
            <main className="md:pl-[120px] h-full">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;