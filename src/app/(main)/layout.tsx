import NavbarView from "@/components/navbar";
import SideNavbar from "@/components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarView />
      <div className="flex">
        <div>{/* <SideNavbar /> */}</div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
