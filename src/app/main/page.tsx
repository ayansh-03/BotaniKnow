import Ai from "@/components/ui/main/ai";
import Body from "@/components/ui/main/body";
import Hero from "@/components/ui/main/hero";

export default function page() {
  return (
    <div className="flex flex-col mx-[5vw]">
      <Hero />
      <Body />
      <Ai />
    </div>
  );
}
