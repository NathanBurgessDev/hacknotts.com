import HackNottsNavbar from "@components/shared/HackNottsNavbar.tsx";
import HackNottsFooter from "@components/shared/HackNottsFooter.tsx";

interface HackNottsDecoratedPageProps {
    hideTitle?: boolean;
    titleBreakpoint?: "xs" | "md" | "lg";
    children: JSX.Element[] | JSX.Element | null;
}

function HackNottsDecoratedPage(props: HackNottsDecoratedPageProps) : JSX.Element {
    return <div className="d-flex flex-column align-items-center w-100" style={{minHeight:"100vh"}}>
        <HackNottsNavbar hideTitle={props.hideTitle} titleBreakpoint={props.titleBreakpoint} />
        <div className="w-100 flex-grow-1">
            {props.children}
        </div>
        <HackNottsFooter />
    </div>
}

export default HackNottsDecoratedPage
export type {HackNottsDecoratedPageProps}