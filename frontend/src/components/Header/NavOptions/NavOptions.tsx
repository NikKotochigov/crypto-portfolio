
import { ThemeToggle } from "@/components/Header/ThemeToggle"
import { Button } from "../../ui/Button"

export const NavOptions = () => {
    return (
        <div >
            <Button variant="ghost" size="icon" className="cursor-pointer" asChild>
                <ThemeToggle />
            </Button>
        </div>
    )
}
