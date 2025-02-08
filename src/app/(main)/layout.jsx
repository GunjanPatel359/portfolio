import Footer from "../../components/Footer";

export default function PagesLayout({ children }) {
    return (
        <div className="bg-colorback">
        <div className="mx-auto">
            {children}
        </div>
        <div className="bg-colorback border-t border-colorfront" style={{filter:"brightness(0.93)"}}>
            <Footer />
        </div>
        </div>
    );
}