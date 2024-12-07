function Footer() {
    return (
        <footer className="
                w-full
                flex flex-col
                items-end px-10 py-5
            ">
            <h5 className="w-fit text-right tablet:text-6xl mobile:text-4xl ">HORIZONS</h5>
            <h6 className="w-fit text-right tablet:text-3xl mobile:text-lg">
                <a href="mailto:jayden.inniss.com" className="border-b border-black border-b hover:border-white transition duration-300">JAYDEN.INNISS@GMAIL.COM</a>
                <br/>
                778-793-5323
            </h6>
        </footer>
    );
}

export default Footer;
