import LikeIcon from "../../atoms/like-icon";

interface SelectedCharacterHeader {
  img: string;
  name: string;
  like: boolean;
  clickLike:()=>void
}

const SelectedCharacterHeader = ({
  img,
  name,
  like,
  clickLike
}: SelectedCharacterHeader) => {
  return (
    <header className="h-175 w-full pb-16 flex flex-col">
      <div className="flex h-75 w-75 relative">
        <div className="flex items-center justify-center  rounded-full overflow-hidden">
          <img className="object-cover w-full h-full" src={img} alt="" />
        </div>
        <div className="absolute top-60% right-n10% cursor-pointer">
          <LikeIcon onClick={clickLike} like={like} />
        </div>
      </div>
      <h1 className="text-24 h-32 font-greycliff font-bold">{name}</h1>
    </header>
  );
};

export default SelectedCharacterHeader;
