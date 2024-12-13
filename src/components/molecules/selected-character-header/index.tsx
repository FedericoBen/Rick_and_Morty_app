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
    <header className="h-[175px] w-full pb-[16px]">
      <div className="flex h-[75px] w-[75px] relative">
        <div className="flex items-center justify-center  rounded-full overflow-hidden">
          <img className="object-cover w-full h-full" src={img} alt="" />
        </div>
        <div className="absolute top-[70%] right-[-10%] cursor-pointer">
          <LikeIcon onClick={clickLike} like={like} />
        </div>
      </div>
      <h1 className="text-[24px] font-greycliff font-bold">{name}</h1>
    </header>
  );
};

export default SelectedCharacterHeader;
