import SelectedCharacter from "../../organisms/selected-character";
import Sidebar from "../../organisms/sidebar";

const DesktopTemplate = () => {
  return (
    <main className="hidden md:grid md:grid-cols-[375px_1fr] md:h-screen bg-white">
      <Sidebar />
      <SelectedCharacter />
    </main>
  );
};

export default DesktopTemplate;
