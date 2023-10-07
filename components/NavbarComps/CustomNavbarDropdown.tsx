"use client"

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown"
import { Avatar } from "@nextui-org/avatar"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const CustomNavbarDropdown = ({ avatarUrl }: { avatarUrl: string }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    // const doRefresh = () => { router.refresh() }
    // setTimeout(doRefresh, 1000)
    setTimeout(router.refresh, 300)
  }



  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar isBordered as="button" name="profileImage" className="transition-transform" src={avatarUrl}/>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="myProfile">My Profile</DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default CustomNavbarDropdown
