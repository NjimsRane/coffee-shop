const ListFooter = ({ linkTo }) => {
    return (
        <div>
            <ul>
                <li className="capitalize  text-2xl text-[#6e6e6e]">
                    <a href="#">{linkTo}</a>
                </li>
            </ul>
        </div>
    );
};

export default ListFooter;