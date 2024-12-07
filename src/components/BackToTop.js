import BackToTop from '../assets/icons/backtotop.svg';

function Link() {
    return (
        <a href="#top" className="link fixed flex flex-col items-center justify-center bottom-64 right-10 uppercase text-white text-right z-50">
            <img src={BackToTop} alt="Back to top" className="h-12" />
            Top
        </a>
    );
}

export default Link;
