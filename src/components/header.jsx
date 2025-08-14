export default function Header(){
return(
    <header className="w-full h-[100px] bg-accent text-white px-[40px]">

        <div className="w-full h-full flex relative">
            <img src="/public/logo.png" className="h-full w-[170px] left-0 object-cover absolute" />

            <div className="h-full w-full flex justify-center items-center text-lg gap-[20px]">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>

        </div>
    </header>
)
}