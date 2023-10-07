import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import { Session, User } from "@supabase/supabase-js";
import { SearchIcon } from "@/public/SearchIcon";
import CustomNavbarDropdown from "./NavbarComps/CustomNavbarDropdown";
import { CardylLogo } from "@/public/CardylLogo";

const CustomNavbar = ({
  session,
  user,
}: {
  session: Session | null;
  user: User | null;
}) => {
  // Get rid of Navbar if session doesn't exist
  if (!session) {
    return;
  }

  return (
    <Navbar isBordered position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
          <CardylLogo width={36} />
          <p className="hidden pl-2 font-light tracking-[2px] text-inherit sm:block">
            CARDYL
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <Input
          placeholder="Search for album..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <CustomNavbarDropdown avatarUrl={user?.user_metadata.avatar_url} />
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
