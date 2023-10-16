
import { NavOptions } from './NavOptions'
import { TabsBar } from './TabsBar'

export const Header = () => {
    return (
        <header className="container rounded-b-xl bg-sky-100 shadow-lg shadow-secondary ring-1 ring-slate-500/20 dark:bg-slate-900">
            <div className="flex justify-end py-4">
                <NavOptions />
            </div>
            <div className="flex-center px-4 gap-4">
                <TabsBar />
            </div>
        </header>
    )
}