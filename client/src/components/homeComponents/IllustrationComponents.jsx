const IllustrationComponents = ({ illustration, desc }) => {
    return (
        <div className=" flex flex-col justify-center items-center gap-4 py-4 shadow rounded transition-all duration-500 hover:shadow-none">
            <img src={illustration} className="w-20" alt="illustration picture" />
            <p className="capitalize font-semibold text-2xl text-[#6e6e6e]">{desc}</p>
        </div>
    );
};

export default IllustrationComponents;