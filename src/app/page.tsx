import ImageSlider from "@/components/ImageSlider";
import SearchHouse from "@/components/SearchHouse";
import { SLIDER_IMAGES } from "@/config";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <ImageSlider images={SLIDER_IMAGES} />
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <SearchHouse />
      </div>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        optio id ut dolore recusandae eius labore facilis maxime, culpa
        voluptate officiis cum nesciunt itaque harum porro laudantium. Tempore
        delectus in aliquam recusandae, voluptas tempora, numquam consequuntur
        inventore sunt aliquid similique soluta pariatur velit, enim animi!
        Similique eos facere asperiores reprehenderit.
      </p>
    </main>
  );
}
