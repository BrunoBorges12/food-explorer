import { FormPlate } from "@/components/FormPlate";
import { NavBar } from "@/components/Navbar";

export default function updateImage() {
  return (
    <>
      <NavBar />
      <FormPlate update={true} />
    </>
  );
}
