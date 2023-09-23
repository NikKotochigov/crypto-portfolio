import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/Button"

function NavOptions() {
    return (
        <div >
            <Button variant="ghost" size="icon" className="cursor-pointer" asChild>
                <ThemeToggle />
            </Button>
        </div>
    )
}

export default NavOptions