import Divider from "./Divider";

export default function Remarks() {
  return (
    <section className="px-25 pt-30 pb-24 w-full overflow-hidden">
      <div className="flex gap-24 container items-center justify-center">
        <div className="basis-1/2 flex flex-col gap-5">
          <div className="flex flex-col mb-5 justify-center">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Sambutan Bupati Kabupaten Cirebon
            </h2>
          </div>
          <div className="flex flex-col gap-3.5 text-base leading-6 text-base-sonic-silver">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nemo in consectetur nihil nam nesciunt, ut laboriosam
              minus vitae sint incidunt numquam ratione suscipit reiciendis quia
              tempore atque reprehenderit? Laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              omnis illum obcaecati temporibus officiis vitae nesciunt, tempora
              cumque suscipit recusandae fugit magnam fugiat aliquid adipisci
              atque voluptate ipsa enim asperiores!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl leading-7.25 text-base-black-pearl">
              Drs. H. Imron Rosyadi, Lc., M.Ag., M.M.
            </p>
            <p className="text-base leading-6 text-base-sonic-silver">
              Bupati Kabupaten Cirebon
            </p>
          </div>
        </div>
        <div className="basis-1/2 h-128 max-h-128 relative">
          <div className="absolute w-192 max-w-192 h-128 max-h-128 bg-brand-gray-100 overflow-hidden">
            <img
              src="/images/sambutan.png"
              alt="sambutan"
              className="absolute left-30.75 top-20.75 w-187.25 h-124.75 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
