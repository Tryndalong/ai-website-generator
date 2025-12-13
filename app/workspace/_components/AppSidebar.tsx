import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-5">
                <div className="flex items-center gap-2">
                    <Image src={'/logo.svg'} alt="logo" width={35} height={35} />
                    <h2 className="font-bold text-xl">AI Website Builder</h2>
                </div>
                <Link href={'/workspace'} className="mt-5 w-full">
                    <Button className="w-full">
                        + Add New Project
                    </Button>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
