import LText from "./LText"
import Support from "./Support"


const Footer = () =>{
    return(
        <footer id="footer" className="footerblock">
            <div className="footerbg"></div>
            <div className="footer">
                <LText/>
                <Support/>
                <a href="#" className="link-block-29 w-inline-block">
                    <img src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66ac2a52450e2ad9e7051e04_Frame%2064.png" 
                    loading="lazy" width="77" alt="" className="image-20"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer